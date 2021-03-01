import { Module } from '@nestjs/common';
import { ParquetController } from './parquet.controller';
import { ParquetService } from './parquet.service';

@Module({
  controllers: [ParquetController],
  providers: [ParquetService]
})
export class ParquetModule { }
