import { Module } from '@nestjs/common';
import { LevelController } from './controller/level/level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelEntity } from './entity/level-entity';
import { LevelService } from 'src/services/level/level.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([LevelEntity])
  ],
  controllers: [LevelController],
  providers:[LevelService]
})
export class LevelModule {}
