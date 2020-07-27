import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserEntity } from "src/modules/user/entity/user-entity";

@Entity('recover')
export class RecoverEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => UserEntity, user => user.id)
    user: UserEntity;
    
    @Column()
    code: string;

    @Column()
    isUsed: boolean;
    @Column()
    createAt: Date;
}
