import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { userTypeDto } from 'src/nguoi_dung/entities/nguoi_dung.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Post("/signin")
  signin(@Body() body: userTypeDto) {
    // {email, pass_word}

    return this.authService.signin(body)
  }

  @Post("/signup")
  signup(@Body() body)  {
    // {name, email, pass_word, phone, birth_day,gender, role}
    return this.authService.signup(body)
  }

}

// yarn add @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt