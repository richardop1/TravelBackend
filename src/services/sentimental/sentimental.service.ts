import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SentimentalEntity } from 'src/modules/sentimental/entity/sentimental-entity';
import { Repository } from 'typeorm';

@Injectable()
export class SentimentalService {
    constructor(
        @InjectRepository(SentimentalEntity) private readonly sentimentalRP: Repository<SentimentalEntity>
    ){}

    async saveSentimental(friend:any){
        await this.sentimentalRP.insert(friend);
        return friend;
    }
    async updateSentimental(id:number, sentimental:any){
        await this.sentimentalRP.update(id,sentimental);
    }
    async findAll(){
        return await this.sentimentalRP.find();
    }
    async findOneSentimental(id: number){
        return await this.sentimentalRP.findOne(id);
    }
    async deleteSentimental(id:number){
        return await this.sentimentalRP.delete(id);
    }
}
