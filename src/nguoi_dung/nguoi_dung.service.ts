import { Injectable } from '@nestjs/common';
import { CreateNguoiDungDto } from './dto/create-nguoi_dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi_dung.dto';

@Injectable()
export class NguoiDungService {
  create(createNguoiDungDto: CreateNguoiDungDto) {
    return 'This action adds a new nguoiDung';
  }

  findAll() {
    return `This action returns all nguoiDung`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nguoiDung`;
  }

  update(id: number, updateNguoiDungDto: UpdateNguoiDungDto) {
    return `This action updates a #${id} nguoiDung`;
  }

  remove(id: number) {
    return `This action removes a #${id} nguoiDung`;
  }
}
