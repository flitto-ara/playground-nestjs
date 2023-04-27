import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as path from 'path'

export class OrmConfig {
  private static getValue (key: string, throwOnMissing = true): string {
    const value = process.env[key]
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`)
    }

    return value
  }

  isDevelopment () {
    return OrmConfig.getValue('NODE_ENV', false) === 'development'
  }

  isProd () {
    return OrmConfig.getValue('NODE_ENV', false) === ''
  }

  getTypeOrmConfig (): TypeOrmModuleOptions {
    const entityPath = path.join(__dirname, '../src/**/*.entity{.ts,.js}')
    console.log(entityPath)
    return {
      type: 'postgres',
      url: 'postgresql://joala:dkfk5377@localhost/ara',
      entities: [entityPath],
      synchronize: true,
      logging: true,
      extra: { max: 1 },
    }
  }
}
