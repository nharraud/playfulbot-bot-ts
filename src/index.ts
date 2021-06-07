import { GameState, PlayfulBot } from 'playfulbot-client';
import { AI } from './ai';

const token = process.env.BOT_TOKEN;
if (token === undefined) {
  throw new Error('BOT_TOKEN env variables should be set');
}

const ai = new AI();
const bot = new PlayfulBot<GameState>(token, ai);

bot.run().catch((reason) => {
  console.log(reason);
  process.exit(1);
})