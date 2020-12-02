import React,{useState} from 'react';
import BooksForm from './BooksForm';
import {v4 as uuid} from 'uuid';

const Books = () => {
    const [books,setBooks] = useState(
        [
        {id:1,title:"The Great Gatsby",author: "mubashir"},
        {id:2,title: "The find of lost time",author: "mudassir"},
        {id:3,title: "A quick brown fox",author: "mubashir2"}
        ]);
    const addBooks = (title,author) => {
        setBooks([...books,{id:uuid(),title,author}])
    }
    return (
        <div>
            {books.map((book)=> <div key={book.id}><h1>{book.title}</h1><p>{book.author}</p></div>)}

            <BooksForm addBooks={addBooks} />
        </div>
    );
}
 
export default Books;