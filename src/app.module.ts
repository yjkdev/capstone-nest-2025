import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizGameModule } from './quiz-game/quiz-game.module';
import { WordsModule } from './words/words.module';
import { GrammarsModule } from './grammars/grammars.module';
import { ChatbotModule } from './chatbot/chatbot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',  
      port: 3306,
      username: 'root',
      password: 'Mydb1234@',
      database: 'capstone',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
      connectTimeout: 60000,
    }),
    AuthModule,
    ProfileModule,
    QuizGameModule,
    WordsModule,
    GrammarsModule,
    ChatbotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}