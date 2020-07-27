import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LevelEntity } from 'src/modules/level/entity/level-entity';
import { Repository } from 'typeorm';

@Injectable()
export class LevelService {
    constructor(
        @InjectRepository(LevelEntity) private readonly levelRP: Repository<LevelEntity>
    ){}

    async saveLevel(level:any){
        await this.levelRP.insert(level);
        return level;
    }
    async updateLevel(id:number, level:any){
        await this.levelRP.update(id,level);
    }
    async findAll(){
        return await this.levelRP.find();
    }
    async findOneLevel(id: number){
        return await this.levelRP.findOne(id);
    }
    async deleteLevel(id:number){
        return await this.levelRP.delete(id);
    }
}
