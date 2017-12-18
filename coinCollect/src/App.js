import React, { Component } from 'react';
import Splash from './splash';
import Game from './game';
import GameStore from './game/stores/game-store';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: 0,
      gameMode: 'player-vs-player', //modes: player-vs-player, player-vs-bot, bot-vs-bot
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  render() {
    this.gameStates = [
      <Splash onStart={this.handleStart} />,
      <Game
          onLeave={this.handleLeave}
          mode={this.state.gameMode}
      />,
      // <Game
      //     onLeave={this.handleLeave}
      //     mode='player-vs-player'
      // />,
      // <Game
      //     onLeave={this.handleLeave}
      //     mode='player-vs-bot'
      // />,
      // <Game
      //     onLeave={this.handleLeave}
      //     mode='bot-vs-bot'
      // />,
    ];
    return this.gameStates[this.state.gameState];
  }

  handleStart(index) {
    // if(index === 0) {
    //   GameStore.gameMode.playerVsPlayer = true
    // } else if(index === 1) {
    //   GameStore.gameMode.playerVsBot = true
    // } else if(index === 2) {
    //   GameStore.gameMode.botVsBot = true
    // }
    this.setState({
      gameState: 1,
    });
  };

  handleLeave(index) {
    this.setState({
      gameState: 2,
    });
  };
}
