import { Module } from '@nestjs/common';
import { FriendController } from './controller/friend/friend.controller';
import { FriendService } from 'src/services/friend/friend.service';
import { FriendEntity } from './entity/friend-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
		TypeOrmModule.forFeature([FriendEntity])
	],
  controllers: [FriendController],
	providers: [FriendService]
})
export class FriendModule {}
