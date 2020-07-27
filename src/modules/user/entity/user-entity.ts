import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { FriendEntity } from "src/modules/friend/entity/friend-entity";
import { EncryptionTransformer } from "typeorm-encrypted";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    is_active: boolean;

    @Column()
    is_admin: boolean;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column({
        type: "varchar",
        nullable: false,
        transformer: new EncryptionTransformer({
          key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
          algorithm: 'aes-256-cbc',
          ivLength: 16,
          iv: 'ff5ac19190424b1d88f9419ef949ae56'
        })
      })
    password: string;

    @Column()
    code: string;

    /*@OneToOne(type => FriendEntity, friendEntity => friendEntity.sender)
    sender: FriendEntity;*/
}
