#!/bin/bash

set -e

# VARIABLES LOCALES
KEY=''
VALUE=''
LASTTAG=''

# VALORES POR DEFECTO
VALUE_TAG=''
VALUE_DIRECTORY='dist'
VALUE_EXEC='build'
VALUE_REPOSITORY='alexchristianqr/portfolio'
VALUE_DELETED_TAG='true'
PREFIX_VERSION='v'
VALUE_BRANCH_LOCAL='main'
VALUE_BRANCH_REMOTO='gh-pages'

# VARIABLES PARA USAR EN LA EJECUCION
TAG=''
DIRECTORY=''
BRANCH_LOCAL=''
BRANCH_REMOTO=''
EXEC=''
REPOSITORY=''

# MOSTRAR MENSAJE DE ERROR DE ARGUMENTO TAG
error_arg_tag() {
  echo "[ OBLIGATORIO ]"
  echo "-t=$VALUE_TAG, --tag=$VALUE_TAG ........................... Estructura de un tag [X_mayor.Y_menor.Z_bugfix]"
  exit 1
}

# MOSTRAR MENSAJE DE ERROR GENERAL
error_args_general() {
  echo "[ COMANDOS CLI ]"
  echo "-t, --tag ........................... Estructura de un tag [X_mayor.Y_menor.Z_bugfix]"
  echo "-dt, --deleted-lasttag .............. Eliminar último tag registrado"
  echo "-b, --branch ........................ Rama git"
  echo "--exec .............................. Comando de compilación"
  echo "-o, --out-dir ....................... Carpeta de compilación"
  echo "--repository ........................ Repositorio git"
  echo "-gp, --github-pages ................. Utilizar github pages"
  echo
  echo "[ DOCUMENTACION ]"
  echo "Repositorio GitHub: https://github.com/alexchristianqr/sh-ghpages"
  echo
  echo "[ AUTOR ]"
  echo "Usuario: Alex Christian"
  echo "Email: alexchristianqr@gmail.com"
  echo "GitHub: https://github.com/alexchristianqr"
  exit 1
}

# ELIMINAR TAG
remove_tag() {
  TAG="$VALUE_TAG"

  git push --delete origin "$TAG" # Eliminar en remoto
  echo "[MESSAGE_CLI] Eliminando en remoto... tag: $TAG"
  git tag -d "$TAG" # Eliminar en local
  echo "[MESSAGE_CLI] Eliminando en local... tag: $TAG"
}

# AGREGAR o ELIMINAR TAG
add_remove_tag() {
  TAG="$VALUE_TAG"
  LATEST_TAG=$(git ls-remote --tags origin | grep -v '\^{}' | sort -t '/' -k 3 -V | tail -n 1 | awk '{print $2}' | sed 's|refs/tags/||')
  echo "[MESSAGE_CLI] Exite en remoto, tag: $LATEST_TAG"

  if [[ "$TAG" == "$LATEST_TAG" ]]; then
    echo "[MESSAGE_CLI] Existe en local, tag: $TAG"
    VALUE_TAG="$LATEST_TAG"
    remove_tag
    add_tag
  else
    VALUE_TAG="$TAG"
    git tag -a -m "New tag release $TAG" "$TAG" # Crear en local
    echo "[MESSAGE_CLI] Creado en local... tag: $TAG"
    git push origin "$TAG" # Crear en remoto
    echo "[MESSAGE_CLI] Creado en remoto... tag: $TAG"
  fi
}

# DESPLEGAR EN GITHUB PAGES
deploy_to_github() {
  TAG="$VALUE_TAG"
  EXEC="$VALUE_EXEC"
  DIRECTORY="$VALUE_DIRECTORY"
  REPOSITORY="$VALUE_REPOSITORY"
  BRANCH_LOCAL="$VALUE_BRANCH_LOCAL"
  BRANCH_REMOTO="$VALUE_BRANCH_REMOTO"

  set -e
  git push origin "$TAG"

  npm run "$EXEC"

  cd "$DIRECTORY"

  git init
  git add -A
  git commit -m "New deployment for release $TAG"
  git push -f "git@github.com:$REPOSITORY.git" "$BRANCH_LOCAL:$BRANCH_REMOTO"

  cd -

  rm -rf "$DIRECTORY"
}

# VALIDAR VALORES DE LOS ARGUMENTOS OBLIGATORIOS
validate_values_args() {
  TAG="$VALUE_TAG"

  # VALIDAR PARAMETROS REQUERIDOS OBLIGATORIAMENTE
  if [[ "$TAG" == '' ]]; then
    error_arg_tag
  fi
}

# PROCESAR ARGUMENTOS
process_args() {
  if [ -z "$1" ]; then
    error_args_general
  fi

  # ITERAR ARGUMENTOS CLI
  for ARGUMENT in "$@"; do
    KEY=$(echo "$ARGUMENT" | cut -f1 -d=)

    # SET LLAVE Y VALOR
    KEY_LENGTH=${#KEY}
    VALUE="${ARGUMENT:$KEY_LENGTH+1}"

    # VALIDAR LLAVE
    if [[ "$KEY" ]]; then
      if [[ "$KEY" == '-h' ]] || [[ "$KEY" == '--help' ]]; then
        error_args_general
      elif [[ "$KEY" == '-t' ]] || [[ "$KEY" == '--tag' ]]; then
        VALUE_TAG="$PREFIX_VERSION$VALUE"
      elif [[ "$KEY" == '-o' ]] || [[ "$KEY" == '--out-dir' ]] || [[ "$KEY" == '--out-directory' ]]; then
        VALUE_DIRECTORY="$VALUE"
      elif [[ "$KEY" == '-b' ]] || [[ "$KEY" == '--branch' ]]; then
        VALUE_BRANCH_LOCAL="$VALUE"
      elif [[ "$KEY" == '--exec' ]]; then
        VALUE_EXEC="$VALUE"
      elif [[ "$KEY" == '--repository' ]]; then
        VALUE_REPOSITORY="$VALUE"
      elif [[ "$KEY" == '-dt' ]] || [[ "$KEY" == '--deleted-lasttag' ]]; then
        VALUE_DELETED_TAG="$VALUE"
      else
        error_args_general
      fi
    else
      error_args_general
    fi
  done

  # VALIDAR PARAMETROS OBLIGATORIOS
  validate_values_args

  # CREAR TAG
  set -e
  add_remove_tag

  # EJECUTAR DESPLIEGUE
  deploy_to_github
}

# MENU PRINCIPAL
main() {
  process_args "$@"
}

# CONSTRUCTOR
main "$@"