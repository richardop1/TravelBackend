import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('country')
export class CountryEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    prefix: string;
}
