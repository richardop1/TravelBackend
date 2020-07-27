import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { UserService } from './services/user/user.service';
import { FriendModule } from './modules/friend/friend.module';
import { FriendService } from './services/friend/friend.service';
import { CountryModule } from './modules/country/country.module';
import { CountryService } from './services/country/country.service';
import { SentimentalModule } from './modules/sentimental/sentimental.module';
import { SentimentalService } from './services/sentimental/sentimental.service';
import { RecoverModule } from './modules/recover/recover.module';
import { RecoverService } from './services/recover/recover.service';
import { LevelModule } from './modules/level/level.module';
import { LevelService } from './services/level/level.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
