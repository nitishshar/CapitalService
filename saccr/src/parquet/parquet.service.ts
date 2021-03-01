import { Injectable } from '@nestjs/common';
var parquet = require('parquetjs-lite');
@Injectable()
export class ParquetService {
    async getUserData(): Promise<any> {
        const response: any[] = [];
        let reader = await parquet.ParquetReader.openFile('C://userdata.parquet');
        let cursor = reader.getCursor();

        // read all records from the file and print them
        let record = null;
        while (record = await cursor.next()) {
            response.push(record);
        }
        await reader.close();
        return response;
    }
    async getMetadata(): Promise<any> {
        //const response: any[] = [];
        let reader = await parquet.ParquetReader.openFile('C://userdata.parquet');
        
        let row_groups=reader.metadata;
        await reader.close();
        
        return row_groups;
    }
}
