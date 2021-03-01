import { Injectable } from '@nestjs/common';
var parquet = require('parquetjs-lite');
@Injectable()
export class ParquetService {
    async getUserData(): Promise<any> {
        const responseData: any[] = [];
        const schema: any[] = [];
        let reader = await parquet.ParquetReader.openFile('C://userdata.parquet');
        const columns: any[] = reader.metadata.schema.map((el: any) => el.name);
        let cursor = reader.getCursor();
        // read all records from the file and print them
        let record = null;
        while (record = await cursor.next()) {
            responseData.push(record);
        }
        columns.forEach((col: string) => {
            schema.push({ name: col, type: this.getPropertyType(responseData[0], col)||'string' });
        });
        await reader.close();
        return { columns: schema, data: responseData };
    }

    public getPropertyValue<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    public getPropertyType<T, K extends keyof T>(obj: T, key: K) {
        return typeof obj[key];
    }
}
