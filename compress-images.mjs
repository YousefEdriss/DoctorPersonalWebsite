import sharp from 'sharp'
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs'
import { join, extname } from 'path'

const dir = './public/images'
const files = readdirSync(dir)

for (const file of files) {
  const ext = extname(file).toLowerCase()
  const src = join(dir, file)
  const tmp = src + '.tmp'
  const sizeBefore = statSync(src).size

  if (ext === '.png') {
    await sharp(src)
      .resize({ width: 1400, withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(tmp)
  } else if (ext === '.jpeg' || ext === '.jpg') {
    await sharp(src)
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(tmp)
  } else {
    continue
  }

  unlinkSync(src)
  renameSync(tmp, src)
  const sizeAfter = statSync(src).size
  console.log(`${file}: ${Math.round(sizeBefore/1024)}KB → ${Math.round(sizeAfter/1024)}KB`)
}
