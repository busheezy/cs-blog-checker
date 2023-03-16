import { delay } from 'bluebird';
import { Webhook } from 'discord-webhook-node';

import { discordWebhookMessage, discordWebhookUrl } from './config';
import { isThereANewBlog } from './isThereANewBlogPost';
import { getPostId, writePostId } from './postId';

const webhook = new Webhook(discordWebhookUrl);

let postId = getPostId();

async function delayRun(time: number) {
  await delay(time * 1000);
  await run();
}

export async function run() {
  const isThereANewBlogPost = await isThereANewBlog(postId);

  if (isThereANewBlogPost) {
    await webhook.send(`${discordWebhookMessage}: ${postId}`);

    postId += 1;
    await writePostId(postId);

    await delayRun(5);
    return;
  }

  await delayRun(60);
}

run();
