import ffmpeg from 'fluent-ffmpeg'
import ffmpegStatic from 'ffmpeg-static'
import { statSync } from 'fs'

ffmpeg.setFfmpegPath(ffmpegStatic)

const input = './public/images/16.mp4'
const output = './public/images/16-compressed.mp4'
const sizeBefore = Math.round(statSync(input).size / (1024 * 1024) * 10) / 10

console.log(`Compressing ${sizeBefore}MB...`)

ffmpeg(input)
  .videoCodec('libx264')
  .audioCodec('aac')
  .outputOptions([
    '-crf 28',
    '-preset fast',
    '-vf scale=1280:-2',
    '-movflags +faststart',
  ])
  .on('progress', (p) => process.stdout.write(`\r  ${Math.round(p.percent || 0)}%`))
  .on('end', () => {
    const sizeAfter = Math.round(statSync(output).size / (1024 * 1024) * 10) / 10
    console.log(`\nDone: ${sizeBefore}MB → ${sizeAfter}MB`)
  })
  .on('error', (err) => console.error('Error:', err.message))
  .save(output)
