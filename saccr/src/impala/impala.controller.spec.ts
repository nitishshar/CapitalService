import { Test, TestingModule } from '@nestjs/testing';
import { ImpalaController } from './impala.controller';

describe('ImpalaController', () => {
  let controller: ImpalaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpalaController],
    }).compile();

    controller = module.get<ImpalaController>(ImpalaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
