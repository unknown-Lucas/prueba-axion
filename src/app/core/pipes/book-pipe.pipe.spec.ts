import { BookPipe } from './book-pipe.pipe';

describe('BookPipePipe', () => {
  it('create an instance', () => {
    const pipe = new BookPipe();
    expect(pipe).toBeTruthy();
  });
});
