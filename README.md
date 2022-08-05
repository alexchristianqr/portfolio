# portfolio

website in vuejs for informational use of my portfolio

## automatically generated tag with shell script

```bash
git tag # Listar ascendente
git tag --sort=-v:refname # Listar descendiente
sh ghpages.sh 1.0.3
```

## manually generated tag with git

```bash
git tag -a 1.0.X -m "version 1.0.X"
git push -f git@github.com:alexchristianqr/portfolio.git master:gh-pages
```
