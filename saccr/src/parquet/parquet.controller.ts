import { Controller, Get, Req } from '@nestjs/common';
import { ParquetService } from './parquet.service';

@Controller('parquet')
export class ParquetController {
    constructor(private parquetService: ParquetService) { }
//     @Get()
//    async getData() {
//        return await this.parquetService.getUserData();
//     }
    @Get()
   async getMetData() {
       return await this.parquetService.getMetadata();
    }
}
