import { Test, TestingModule } from '@nestjs/testing';
import { SentimentalController } from './sentimental.controller';

describe('Sentimental Controller', () => {
  let controller: SentimentalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SentimentalController],
    }).compile();

    controller = module.get<SentimentalController>(SentimentalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
