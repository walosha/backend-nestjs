import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'this is the entry point of the app!';
  }

  getMe() {
    return 'this is  Olawale Afuye';
  }

  signin() {
    return 'you are signed in  successfully!';
  }
}
