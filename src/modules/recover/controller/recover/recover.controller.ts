import { Controller, Param, Delete, Put, Get, Post, Body } from '@nestjs/common';
import { RecoverService } from 'src/services/recover/recover.service';
import { RecoverModel } from 'src/models/recover.interface';

@Controller('recover')
export class RecoverController {
    constructor(private recoverService:RecoverService){
    }

    @Post()
    addRecover(@Body() recoverModel:RecoverModel):any{
        return this.recoverService.saveRecover(recoverModel);
    }

    @Get()
    getRecover():any{
        return this.recoverService.findAll();
    }

    @Get(":id")
    getOneRecover(@Param() params): any{
        return this.recoverService.findOneRecover(params.id);
    }
    @Put(":id")
    updateRecover(@Body() recoverModel:RecoverModel, @Param() params):any{
        return this.recoverService.updateRecover(params.id, recoverModel);
    }
    @Delete(":id")
    deleteRecover(@Param() params):any{
        return this.recoverService.deleteRecover(params.id);
    }
}
