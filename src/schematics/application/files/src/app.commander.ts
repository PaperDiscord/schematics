import {
  Commander,
  Command,
  Author,
  DiscordEvents,
  OnMessageContext,
  EventHandler,
} from '@paperdiscord/core';

@Commander('hello')
export class AppCommander {
  @Command()
  public async hello(@Author() author) {
    return `Hello there ${author.username}`;
  }
}
