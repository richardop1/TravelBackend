import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecoverEntity } from 'src/modules/recover/entity/recover-entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecoverService {
    constructor(
        @InjectRepository(RecoverEntity) private readonly recoverRP: Repository<RecoverEntity>
    ){}

    async saveRecover(recover:any){
        await this.recoverRP.insert(recover);
        return recover;
    }
    async updateRecover(id:number, recover:any){
        await this.recoverRP.update(id,recover);
    }
    async findAll(){
        return await this.recoverRP.find();
    }
    async findOneRecover(id: number){
        return await this.recoverRP.findOne(id);
    }
    async deleteRecover(id:number){
        return await this.recoverRP.delete(id);
    }
}
