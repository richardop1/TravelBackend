import { Module } from '@nestjs/common';
import { CountryController } from './controller/country/country.controller';
import { CountryService } from 'src/services/country/country.service';
import { CountryEntity } from './entity/country-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
		TypeOrmModule.forFeature([CountryEntity])
	],
	providers: [CountryService], 
	controllers: [CountryController]
})
export class CountryModule {}
