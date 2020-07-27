import { Module } from '@nestjs/common';
import { RecoverController } from './controller/recover/recover.controller';
import { RecoverService } from 'src/services/recover/recover.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecoverEntity } from './entity/recover-entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([RecoverEntity])
  ],
  controllers: [RecoverController],
  providers:[RecoverService]
})
export class RecoverModule {}
