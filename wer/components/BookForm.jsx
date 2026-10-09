import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function BookForm({onAdd}) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!title.trim()) return

    onAdd(title.trim())
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
        <Input
        value= {title}
        onChange={(e)=> setTitle(e.target.value)}
        placeholder="Введите название книги"
        />
        <Button type="submit">Добавить на полку</Button>
    </form>
  );
}
export default BookForm