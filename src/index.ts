import { delay } from 'bluebird';
import { Webhook } from 'discord-webhook-node';

import { blogPostId, discordWebhookMessage, discordWebhookUrl } from './config';
import { isThereANewBlog } from './isThereANewBlogPost';

const webhook = new Webhook(discordWebhookUrl);

let postId = blogPostId;

export async function run() {
  const isThereANewBlogPost = await isThereANewBlog(postId);

  if (isThereANewBlogPost) {
    await webhook.send(discordWebhookMessage);
    postId += 1;
  }

  await delay(60_000);
  await run();
}

run();
