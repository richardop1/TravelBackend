import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { UserEntity } from "src/modules/user/entity/user-entity";

@Entity('friend')
export class FriendEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => UserEntity)
    @JoinColumn()
    sender: UserEntity;

    @OneToOne(type => UserEntity)
    @JoinColumn()
    receptor: UserEntity;

    @Column()
    is_acepted: boolean;

    @Column()
    is_readed: boolean;

    @Column()
    create_at: Date;
}
