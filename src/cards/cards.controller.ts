import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

import { CreateCardDto } from './dto';
import { Card } from './interfaces';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  findAll(@Query('boardId') boardId: string): Card[] {
    return this.cardsService.findAll(Number(boardId));
  }

  @Get(':id')
  findOne(@Param('id') cardId: string): Card {
    return this.cardsService.findOne(Number(cardId));
  }

  @Post()
  create(@Body() cardData: CreateCardDto): Card {
    return this.cardsService.create(cardData);
  }
}
