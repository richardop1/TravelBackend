import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from 'src/modules/country/entity/country-entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(CountryEntity) private readonly countryRP: Repository<CountryEntity>
    ){}

    async saveCountry(country:any){
        await this.countryRP.insert(country);
        return country;
    }
    async updateCountry(id:number, country:any){
        await this.countryRP.update(id,country);
    }
    async findAll(){
        return await this.countryRP.find();
    }
    async findOneCountry(id: number){
        return await this.countryRP.findOne(id);
    }
    async deleteCountry(id:number){
        return await this.countryRP.delete(id);
    }
}
