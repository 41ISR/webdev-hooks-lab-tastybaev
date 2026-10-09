import BookItem from "./BookItem";

function BookList({books, onToggleRead,onDelete}){
    return(
        <div className="book-list">
            {books.map((books) =>(
                <BookItem
                key={books.id}
                book={book}
                onToggleRead={onToggleRead}
                onDelete={onDelete}
            ></BookItem>
            ))}
        </div>
    )
}

export default BookList