import fs from 'fs';
import path from 'path';
export function getPostsFiles() {
  try {
    const postsNames = fs.readdirSync(path.join('posts'));
    return postsNames;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function getFileData(filename) {
  try {
    const fullMarkdown = fs.readFileSync(path.join('posts', filename), 'utf-8');
    return fullMarkdown;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}
