import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { Board } from './interfaces';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsServices: BoardsService) {}

  @Get()
  findAll(): Board[] {
    return this.boardsServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') boardId): Board {
    return this.boardsServices.findOne(Number(boardId));
  }

  @Post()
  create(@Body() boardData: CreateBoardDto): Board {
    return this.boardsServices.create(boardData);
  }
}
