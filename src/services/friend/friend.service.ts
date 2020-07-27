import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FriendEntity } from 'src/modules/friend/entity/friend-entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendService {
    constructor(
        @InjectRepository(FriendEntity) private readonly friendRP: Repository<FriendEntity>
    ){}

    async saveFriend(friend:any){
        await this.friendRP.insert(friend);
        return friend;
    }
    async updateFriend(id:number, friend:any){
        await this.friendRP.update(id,friend);
    }
    async findAll(){
        return await this.friendRP.find();
    }
    async findOneFriend(id: number){
        return await this.friendRP.findOne(id);
    }
    async deleteFriend(id:number){
        return await this.friendRP.delete(id);
    }
}
