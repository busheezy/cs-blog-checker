import dotenv from 'dotenv';
dotenv.config();

if (!process.env.DISCORD_WEBHOOK_URL) {
  throw new Error('env DISCORD_WEBHOOK_URL is not defined');
}

if (!process.env.DISCORD_WEBHOOK_MESSAGE) {
  throw new Error('env DISCORD_WEBHOOK_MESSAGE is not defined');
}

export const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
export const discordWebhookMessage = process.env.DISCORD_WEBHOOK_MESSAGE;
