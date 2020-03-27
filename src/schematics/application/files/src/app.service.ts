import { Service, App, PaperApp } from '@paperdiscord/core';

@Service()
export class AppService {
  @App() public readonly app: PaperApp;

  public getUsername() {
    return this.app.client.user.username;
  }
}
