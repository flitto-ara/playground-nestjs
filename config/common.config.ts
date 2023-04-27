import { registerAs } from '@nestjs/config'

export default registerAs('common', () => ({
  is_prod: process.env.NODE_ENV === 'production',
}))
