import fs from 'fs';
import path from 'path';
export function getPostsFiles() {
  const postsNames = fs.readdirSync(path.join('posts'));
  return postsNames;
}

export function getFileData(filename) {
  const fullMarkdown = fs.readFileSync(path.join('posts', filename), 'utf-8');
  return fullMarkdown;
}
