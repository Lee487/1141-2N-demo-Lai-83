import Wrapper from "../assets/wrappers/BookList_83";
import books_data from "../assets/data/booklist_data2";

console.log('books_data', books_data);

const BookListPage_83 = () => {
  return (
    <Wrapper>
      <section className="booklist">
        {books_data.map((book, index) => {
          return (
            <article key={book.id || index} className="book">
              <img src={book.img} alt={book.title} />
              <div className="bookinfo">
                <h1>{book.title}</h1>
                <h4>{book.author}</h4>
              </div>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
};

export default BookListPage_83;