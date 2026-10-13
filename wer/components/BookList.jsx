import BookItem from "./BookItem";
import './css.css'

function BookList ({books, onToggleRead, onDelete}){
    if (books.lentgh===0) {
        return <p className="book-list__empty">Здесь пока пусто</p>;
    }

    return (
        <ul className="book-list">
            {books.map((book) =>(
                <BookItem
                key={book.id}
                book={book}
                onToggleRead={onToggleRead}
                onDelete={onDelete}
                />
            ))}
        </ul>
    )
}
export default BookList