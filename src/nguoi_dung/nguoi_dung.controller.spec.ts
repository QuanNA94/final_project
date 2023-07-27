import { Test, TestingModule } from '@nestjs/testing';
import { NguoiDungController } from './nguoi_dung.controller';
import { NguoiDungService } from './nguoi_dung.service';

describe('NguoiDungController', () => {
  let controller: NguoiDungController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NguoiDungController],
      providers: [NguoiDungService],
    }).compile();

    controller = module.get<NguoiDungController>(NguoiDungController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
