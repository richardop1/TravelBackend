import { Module } from '@nestjs/common';
import { SentimentalController } from './controller/sentimental/sentimental.controller';
import { SentimentalService } from 'src/services/sentimental/sentimental.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SentimentalEntity } from './entity/sentimental-entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([SentimentalEntity])
  ],
  controllers: [SentimentalController],
  providers:[SentimentalService]
})
export class SentimentalModule {}
