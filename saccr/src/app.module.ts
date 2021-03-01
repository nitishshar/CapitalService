import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImpalaModule } from './impala/impala.module';
import { ParquetModule } from './parquet/parquet.module';

@Module({
  imports: [ImpalaModule, ParquetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
