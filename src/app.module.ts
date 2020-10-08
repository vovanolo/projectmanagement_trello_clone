import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { ListsModule } from './lists/lists.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [BoardsModule, ListsModule, CardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
