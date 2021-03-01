import { Test, TestingModule } from '@nestjs/testing';
import { ParquetController } from './parquet.controller';

describe('ParquetController', () => {
  let controller: ParquetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParquetController],
    }).compile();

    controller = module.get<ParquetController>(ParquetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
