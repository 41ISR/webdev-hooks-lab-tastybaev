import BookForm from "./BookForm";
import FilterChip from "./FilterChip";
import BookList from "./BookList";
import './css.css'

function ShelfScreen({
    books,
    showOnlyUnread,
    onToggleUnread,
    onAdd,
    onToggleRead,
    onDelete,
}) {
    const visibleBooks = showOnlyUnread
    ? books.filter((book)=> !book.read)
    : books;

    return (
       <div className="app">
        <div className="app-header">
            <div className="brand">
                <div className="brand-mark">S</div>
                <div className="brand-name">Shelf</div>
            </div>
        </div>
        <section className="screen active" id="screen-shelf">
            <p className="greeting">Добрый вечер</p>
            <BookForm onAdd={onAdd}/>
            <div className="list-toolbar">
                <span className="toolbar-title">Книги</span>
                <FilterChip checked={showOnlyUnread} onChange={onToggleRead}>
                    Только непрочитанные
                </FilterChip>
                <BookList books={visibleBooks} onToggleRead={onToggleRead} onDelete={onDelete} />
            </div>
        </section>
       </div>
    )
}

export default ShelfScreen