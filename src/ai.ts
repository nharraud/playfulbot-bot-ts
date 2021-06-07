import { BotAI, GameAction, GameState } from 'playfulbot-client'


export class AI implements BotAI<GameState> {

  run(gameState: GameState, playerNumber: number): GameAction {
    return { name: 'action name', data: { /* add data here */ } }
  }
}