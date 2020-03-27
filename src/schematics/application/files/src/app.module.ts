import { PaperModule } from '@paperdiscord/core';
import { AppCommander } from './app.commander';
import { AppService } from './app.service';

@PaperModule({
  providers: [AppCommander, AppService],
})
export class AppModule {}
