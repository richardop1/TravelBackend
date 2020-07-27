import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('sentimental')
export class SentimentalEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
}
