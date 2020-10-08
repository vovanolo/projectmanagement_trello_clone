import { Injectable } from '@nestjs/common';

import { CreateListDto } from './dto';
import { List } from './interfaces';

@Injectable()
export class ListsService {
  private lists: List[] = [
    {
      id: 1,
      title: 'List 1',
      boardId: 1,
    },
  ];

  findAll(boardId: number): List[] {
    return this.lists.filter(list => list.boardId === boardId);
  }

  findOne(listId: number): List {
    const searchResults = this.lists.filter(list => list.id === listId);

    if (searchResults.length <= 0) {
      return;
    }

    return searchResults[0];
  }

  create(listData: CreateListDto): List {
    const newList: List = {
      id: this.lists.length + 1,
      ...listData,
    };

    this.lists.push(newList);

    return newList;
  }
}
