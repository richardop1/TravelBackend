import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('level')
export class LevelEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
}
