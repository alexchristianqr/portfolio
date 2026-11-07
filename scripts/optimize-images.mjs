/**
 * Genera las imágenes de proyecto que se publican a partir de los originales de
 * `assets-src/portfolio/` (que NO se despliegan).
 *
 *   npm run images
 *
 * Qué proyectos procesa lo dicta `src/data/projects.data.ts` (su campo `image` es el nombre base,
 * sin extensión): así no se generan imágenes que nadie usa y una referencia rota falla aquí, no
 * en el navegador.
 *
 * Salida en `public/assets/images/portfolio/`:
 *   sm/<nombre>.webp   720 px de ancho   → tarjetas
 *   lg/<nombre>.webp  1280 px de ancho   → diálogo de detalle
 */
import { mkdir, readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const root = fileURLToPath(new URL('..', import.meta.url))
const SOURCE = path.join(root, 'assets-src/portfolio')
const OUT = path.join(root, 'public/assets/images/portfolio')
const SIZES = { sm: 720, lg: 1280 }

const data = await readFile(path.join(root, 'src/data/projects.data.ts'), 'utf8')
const names = [...new Set([...data.matchAll(/image:\s*'([^']+)'/g)].map((m) => m[1]))]
const files = await readdir(SOURCE)

let failed = 0
for (const name of names) {
  const file = files.find((f) => path.parse(f).name === name)
  if (!file) {
    console.error(`✗ ${name}: no hay original en assets-src/portfolio/`)
    failed++
    continue
  }
  for (const [dir, width] of Object.entries(SIZES)) {
    await mkdir(path.join(OUT, dir), { recursive: true })
    const info = await sharp(path.join(SOURCE, file))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(path.join(OUT, dir, `${name}.webp`))
    console.log(
      `✓ ${dir}/${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`
    )
  }
}
if (failed) process.exit(1)
