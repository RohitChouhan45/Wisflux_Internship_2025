import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books = [];

  create(createBookDto: CreateBookDto, file: Express.Multer.File) {
    const book = {
      ...createBookDto,
      filePath: file.path,
    };
    this.books.push(book);
    return book;
  }

  findAll() {
    return this.books;
  }
}