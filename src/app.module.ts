import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OrmConfig } from '../config/orm.config'
import { ConfigModule } from '@nestjs/config'
import { modules } from './modules'
import commonConfig from '../config/common.config'
const ormConfig = new OrmConfig().getTypeOrmConfig()

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/common.config.ts`],
      load: [commonConfig],
      isGlobal: true,
    }),
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
