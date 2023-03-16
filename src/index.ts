import { delay } from 'bluebird';
import { createWebhook } from './createWebhook';
import { isThereANewBlog } from './isThereANewBlogPost';

const webhook = createWebhook();

let blogPostId = 41282;

export async function run() {
  const isThereANewBlogPost = await isThereANewBlog(blogPostId);

  if (isThereANewBlogPost) {
    await webhook.send('There is a new blog post! <@111200558827778048>');
    blogPostId += 1;
  }

  await delay(60_000);
  await run();
}

run();
