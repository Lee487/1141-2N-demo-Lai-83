import "./App_83.scss";
import books_data from "./booklist_data2";

console.log('books_data',books_data);
const App_83 =() =>{
    return (
    <section className='booklist'>
    {books_data.map((book) => {
    return (
        <article className="book">
            <img src={book.img} />
            <div className='bookinfo'>
            <h1>{book.title}</h1>
            <h4>{book.author}</h4>
            </div>
            </article>
          );
        })}
        </section>
    );
};

export default App_83;