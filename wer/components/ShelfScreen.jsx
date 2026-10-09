import BookForm from "./BookForm";
import BookList from "./BookList";
import FilterChip from "./FilterChip";

function ShelfScreen({
    books,
    showOnlyUnread,
    onToggleRead,
    onDelete,
    onToggleFilter
}) {
    const filteredBooks = showOnlyUnread
    ? books.filter((book) => !book.read) :books

    return (
        <section className="screen active" id="screen-shelf">
        <p className="greeting">Добрый вечер</p>
      <div className="add-book-row">
        <input
          className="input"
          id="bookInput"
          placeholder="Название книги..."
        />
        <button className="btn" id="addBtn">
          Добавить на полку
        </button>
      </div>
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <div className="filter-chip">
          <input type="checkbox" id="filterCheckbox" />
          <label htmlFor="filterCheckbox">
            <span className="dot" />
            Только непрочитанные
          </label>
          </div>
      </div>
      </section>
    )

}
 