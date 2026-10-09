import BookForm from "./BookForm";

function BookItem({book, onToggleRead,onDelete}){
    const {id, title, author, read} = book;

    return (
         <div className={`book-list ${read ? "": ""}`} id="bookList">
        <div className="book-row" data-id={1}>
          <div className="book-cover" style={{ background: "#4f6b52" }}>
            К
          </div>
          <div className="book-info">
            <p className="book-title done">{title}е</p>
            <div className="book-author">{author}</div>
          </div>
          <div className="read-check checked" data-role="toggle">
            <span className="check-circle">✓</span>
            <span className="read-label" onClick={()=>onToggleRead(id)}>Прочитано</span>
          </div>
          <button
            className="delete-btn"
            data-role="delete"
            onClick={() => onDelete(id)}
            title="Убрать с полки"
          >
            ✕
          </button>
        </div>
      </div>
    )
}

export default BookItem