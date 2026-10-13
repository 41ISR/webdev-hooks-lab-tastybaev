import { useState } from "react";
import ShelfScreen from "./components/ShelfScreen";

const COLORS = ['#e76f51', '#2a9d8f', '#e9c46a', '#457b9d', '#8d6a9f' ]

function App(){
    const [books, setBooks] = useState([]);
    const [showOnlyUnread, setShowOnlyUnread] = useState(false);

    function addBook(title) {
        const id =Date.now();
        const newBook = {
            id,
            title,
            author,
            read: false,
            color: COLORS[id % COLORS.length],
        };
        setBooks((prev) => [...prev, newBook]);
    }
    function deleteBook(id){
        setBooks((prev) => prev.filter((book) => book.id !==id));
    }

    function toggleRead(id){
        setBooks((prev) =>
        prev.map((book) =>
        book.id ===id ? {...book, read: !book.read}: book
        )
    )
 }
}

function onToggleUnread() {
    setShowOnlyUnread((prev) => !prev);
}

return (
    <ShelfScreen
    books={books}
    showOnlyUnread={showOnlyUnread}
    onToggleUnread={toggleUnread}
    onAdd={addBook}
    onToggleRead={toggleRead}
    onDelete={deleteBook}
    />
)
 export default App;