import fs from 'fs-extra';
import * as path from 'node:path';

const pastIdPath = path.join(__dirname, '..', '.postid');

export async function writePostId(postId: number) {
  await fs.writeFile(pastIdPath, postId.toString());
}

export function getPostId() {
  return parseInt(fs.readFileSync(pastIdPath, 'utf8'), 10);
}
