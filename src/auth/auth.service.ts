import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from "bcrypt";
import { failCode, successCode } from 'src/config/response';

// const {successCode} = require("../config/response.js")





@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService
  ) { }

  prisma = new PrismaClient()

  // passport
  signup(userSignUp) {
    this.prisma.nguoi_dung.create({
      data: userSignUp
    })

    // check email trùng 

    // false trùng báo lỗi mail trùng

    //true: tạo mới user
    // return, 
  }

  signin = async (userLogin) => {
    let { email, pass_word } = userLogin
    // tìm bằng email 
    let checkUser = await this.prisma.nguoi_dung.findFirst({
      where: {
        email,
      }
    })
    if (checkUser) {
      // login thành công
      // true: check mật khẩu
      if (bcrypt.compareSync(pass_word, checkUser.pass_word)) {
        checkUser = { ...checkUser, pass_word: "" }

        let token = this.jwtService.signAsync(
          // nhận vào data, payload
          { data: checkUser }, {
          secret:
            // "AIRBNB"
            this.configService.get("KEY")
          , expiresIn: "5m"
        })
        successCode(userLogin, token, "Login thành công");
      } else {
        // false pass_word: báo mật khẩu không đúng
        //false email: báo mail tồn tại 
        failCode(userLogin, "", "Mật khẩu không đúng !");
      }
    } else {
      // email hoặc password không đúng
      failCode(userLogin, "", "Email không đúng !");
    }
  }
}
