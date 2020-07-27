import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UserModel } from 'src/models/user.interface';
import { getCustomRepository } from 'typeorm';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){

    }

    @Post()
    addUser(@Body() userModel:UserModel):any{
        return this.userService.saveUser(userModel);
    }
    @Get()
    getUser():any{
        return this.userService.findAll();
    }
    @Get(":id")
    getOneUser(@Param() params): any{
        return this.userService.findOnUser(params.id);
    }
    @Put(":id")
    updateUser(@Body() userModel:UserModel, @Param() params):any{
        return this.userService.updateUser(params.id, userModel);
    }
    @Delete(":id")
    deleteUser(@Param() params):any{
        return this.userService.deleteUser(params.id);
    }
}
