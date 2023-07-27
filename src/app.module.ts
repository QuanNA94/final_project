import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { NguoiDungModule } from './nguoi_dung/nguoi_dung.module';


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      // Cấu hình các tùy chọn cho việc đọc cấu hình, ví dụ: từ tập tin .env
      isGlobal: true
    }),
    NguoiDungModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

