import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CreateListDto } from './dto';
import { List } from './interfaces';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Get()
  findAll(@Query('boardId') boardId: string): List[] {
    return this.listsService.findAll(Number(boardId));
  }

  @Get(':id')
  findOne(@Param('id') listId: string): List {
    return this.listsService.findOne(Number(listId));
  }

  @Post()
  create(@Body() listData: CreateListDto): List {
    return this.listsService.create(listData);
  }
}
