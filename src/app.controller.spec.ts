import { Test, TestingModule } from '@nestjs/testing';
//import { config } from './app.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import knex from 'knex';
import { createProductRo } from './product.entity';

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    appController = await app.get<AppController>(AppController);
  });

  describe('testing product controller', () => {
    it('should not return null', () => {
      expect(
        typeof appController.getListOfProducts('formal', 1, 1),
      ).not.toEqual(null);
    });
  });
});
