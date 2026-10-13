import { useState } from "react";
import Input from './Input'
import Button from "./Button";
import './css.css'

function BookForm ({onAdd}) {
    const [draft, setDraft] = useState('');
     function handleSubmit (e) {
        e.preventDefault();
        const title = draft.trim();
        if (!title) return;
        onAdd(title);
        setDraft('')
     }
     return (
        <form className="add-book-row" onSubmit={handleSubmit}>
            <Input
            value={draft}
            onChange={setDraft}
            placeholder="Название книги"
            />
            <Button type ="submit"> Добавить на полку</Button>
        </form>
     )
}
export default BookForm;