import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { CountryService } from 'src/services/country/country.service';
import { CountryModel } from 'src/models/country.interface';

@Controller('country')
export class CountryController {
    constructor(private countryService:CountryService){
    }

    @Post()
    addFriend(@Body() countryModel:CountryModel):any{
        return this.countryService.saveCountry(countryModel);
    }

    @Get()
    getFriend():any{
        return this.countryService.findAll();
    }

    @Get(":id")
    getOneFriend(@Param() params): any{
        return this.countryService.findOneCountry(params.id);
    }
    @Put(":id")
    updateUser(@Body() countryModel:CountryModel, @Param() params):any{
        return this.countryService.updateCountry(params.id, countryModel);
    }
    @Delete(":id")
    deleteUser(@Param() params):any{
        return this.countryService.deleteCountry(params.id);
    }
}
