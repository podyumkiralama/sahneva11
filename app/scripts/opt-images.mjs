import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const root = 'public/img';
const exts = new Set(['.jpg','.jpeg','.png','.webp']);
const files = [];
async function walk(dir) {
  for (const e of await fs.readdir(dir, { withFileTypes:true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (exts.has(path.extname(e.name).toLowerCase())) files.push(p);
  }
}
await walk(root);

for (const file of files) {
  const buf = await fs.readFile(file);
  const base = file.replace(/\.(png|jpg|jpeg|webp)$/i,'');
  await sharp(buf).avif({ quality: 55 }).toFile(`${base}.avif`);
  await sharp(buf).webp({ quality: 70 }).toFile(`${base}.webp`);
}
console.log(`Optimized ${files.length} images ✔`);
