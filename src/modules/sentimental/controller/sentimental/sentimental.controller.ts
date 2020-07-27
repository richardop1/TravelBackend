import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { SentimentalService } from 'src/services/sentimental/sentimental.service';
import { SemtimentalModel } from 'src/models/semtimental.interface';

@Controller('sentimental')
export class SentimentalController {
    constructor(private sentimentalService:SentimentalService){
    }

    @Post()
    addFriend(@Body() sentimentalModel:SemtimentalModel):any{
        return this.sentimentalService.saveSentimental(sentimentalModel);
    }

    @Get()
    getFriend():any{
        return this.sentimentalService.findAll();
    }

    @Get(":id")
    getOneFriend(@Param() params): any{
        return this.sentimentalService.findOneSentimental(params.id);
    }
    
    @Put(":id")
    updateUser(@Body() sentimentalModel:SemtimentalModel, @Param() params):any{
        return this.sentimentalService.updateSentimental(params.id, sentimentalModel);
    }

    @Delete(":id")
    deleteUser(@Param() params):any{
        return this.sentimentalService.deleteSentimental(params.id);
    }
}
