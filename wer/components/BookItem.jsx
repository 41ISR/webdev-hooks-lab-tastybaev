import './css.css'

function BookItem ({book, onToggleRead, onDelete}) {
    const {id, title, author, read, color} = book;

    return (
        <div className='book-cover' style={{background:color}}>
            {title[0]}
        </div>
        <div className='book-info'>
            <p className='{read ? 'book-title done' : 'book-title'}>{title} </p>
            <div className='book-author'>{author}</div>
        </div>
        <div
        className={read ? 'read-check checked' : 'read-check'}
        
    )
}
export default BookItem