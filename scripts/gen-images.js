const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  { src: 'images/hero1.webp', outBase: 'hero1', widths: [637, 936, 1184, 1510, 1776] },
  { src: 'images/hero3.webp', outBase: 'hero3', widths: [637, 936, 1184, 1510, 1776] },
  { src: 'images/hero4.webp', outBase: 'hero4', widths: [256, 637, 936, 1184, 1510, 1776] },
  { src: 'images/heroteam.webp', outBase: 'heroteam', widths: [637, 936, 1184, 1510, 1776, 1940] },
];

(async () => {
  for (const img of images) {
    const input = path.resolve(img.src);
    if (!fs.existsSync(input)) { console.warn('Missing', input); continue; }
    const dir = path.dirname(input);
    for (const w of img.widths) {
      const out = path.join(dir, `${img.outBase}-${w}.webp`);
      try {
        await sharp(input).resize({ width: w }).webp({ quality: 82 }).toFile(out);
        console.log('Wrote', out);
      } catch (e) {
        console.error('Error processing', input, '->', out, e.message);
      }
    }
  }
})();
