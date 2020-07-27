import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { FriendService } from 'src/services/friend/friend.service';
import { FriendModel } from 'src/models/friend.interface';

@Controller('friend')
export class FriendController {
    constructor(private friendService:FriendService){
    }

    @Post()
    addFriend(@Body() friendModel:FriendModel):any{
        return this.friendService.saveFriend(friendModel);
    }

    @Get()
    getFriend():any{
        return this.friendService.findAll();
    }

    @Get(":id")
    getOneFriend(@Param() params): any{
        return this.friendService.findOneFriend(params.id);
    }
    @Put(":id")
    updateFriend(@Body() friendModel:FriendModel, @Param() params):any{
        return this.friendService.updateFriend(params.id, friendModel);
    }
    @Delete(":id")
    deleteFriend(@Param() params):any{
        return this.friendService.deleteFriend(params.id);
    }
}
