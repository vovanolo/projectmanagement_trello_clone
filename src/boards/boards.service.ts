import { Injectable } from '@nestjs/common';

import { Board } from './interfaces';
import { CreateBoardDto } from './dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [
    {
      id: 1,
      title: 'Board 1',
    },
  ];

  findAll(): Board[] {
    return this.boards;
  }

  findOne(boardId: number): Board {
    const searchResult = this.boards.filter(board => board.id === boardId);

    if (searchResult.length <= 0) {
      return;
    }

    return searchResult[0];
  }

  create(boardData: CreateBoardDto): Board {
    const newBoard: Board = {
      id: this.boards.length + 1,
      ...boardData,
    };

    this.boards.push(newBoard);

    return newBoard;
  }
}
