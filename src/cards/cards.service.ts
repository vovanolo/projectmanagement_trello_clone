import { Injectable } from '@nestjs/common';

import { CreateCardDto } from './dto';
import { Card } from './interfaces';

@Injectable()
export class CardsService {
  private cards: Card[] = [
    {
      id: 1,
      title: 'Card 1',
      listId: 1,
      boardId: 1,
    },
  ];

  findAll(boardId: number): Card[] {
    return this.cards.filter(card => card.boardId === boardId);
  }

  findOne(cardId: number): Card {
    const searchResults = this.cards.filter(card => card.id === cardId);

    if (searchResults.length <= 0) {
      return;
    }

    return searchResults[0];
  }

  create(cardData: CreateCardDto): Card {
    const newCard: Card = {
      id: this.cards.length + 1,
      ...cardData,
    };

    this.cards.push(newCard);

    return newCard;
  }
}
