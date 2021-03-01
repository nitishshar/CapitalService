import { Module } from '@nestjs/common';
import { ImpalaController } from './impala.controller';

@Module({
  controllers: [ImpalaController]
})
export class ImpalaModule {}
