import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { UserEntity } from '../user/entity/user-entity';
import { UserModule } from '../user/user.module';
import { FriendEntity } from '../friend/entity/friend-entity';
import { FriendModule } from '../friend/friend.module';
import { CountryModule } from '../country/country.module';
import { CountryEntity } from '../country/entity/country-entity';
import { SentimentalEntity } from '../sentimental/entity/sentimental-entity';
import { SentimentalModule } from '../sentimental/sentimental.module';
import { RecoverEntity } from '../recover/entity/recover-entity';
import { RecoverModule } from '../recover/recover.module';
import { LevelEntity } from '../level/entity/level-entity';
import { LevelModule } from '../level/level.module';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port:3306,
            username: "root",
            password: "",
            database:"travel_db",
            entities:[
                UserEntity,
                FriendEntity,
                CountryEntity,
                SentimentalEntity,
                RecoverEntity,
                LevelEntity,
            ],
            synchronize: true
        }),
        UserModule,
        FriendModule,
        CountryModule,
        SentimentalModule,
        RecoverModule,
        LevelModule,
    ]
})
export class DatabaseModule {}
