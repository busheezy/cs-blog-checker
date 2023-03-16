import { Webhook } from 'discord-webhook-node';
import dotenv from 'dotenv';

dotenv.config();

export function createWebhook(): Webhook {
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!discordWebhookUrl) {
    throw new Error('DISCORD_WEBHOOK_URL is not defined');
  }

  const hook = new Webhook(discordWebhookUrl);

  return hook;
}
