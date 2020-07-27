import { Controller, Param, Delete, Body, Put, Get, Post } from '@nestjs/common';
import { LevelService } from 'src/services/level/level.service';
import { LevelModel } from 'src/models/level.interface';

@Controller('level')
export class LevelController {
    constructor(private levelService:LevelService){
    }

    @Post()
    addLevel(@Body() levelModel:LevelModel):any{
        return this.levelService.saveLevel(levelModel);
    }

    @Get()
    getLevel():any{
        return this.levelService.findAll();
    }

    @Get(":id")
    getOneLevel(@Param() params): any{
        return this.levelService.findOneLevel(params.id);
    }
    @Put(":id")
    updateLevel(@Body() levelModel:LevelModel, @Param() params):any{
        return this.levelService.updateLevel(params.id, levelModel);
    }
    @Delete(":id")
    deleteLevel(@Param() params):any{
        return this.levelService.deleteLevel(params.id);
    }
}
