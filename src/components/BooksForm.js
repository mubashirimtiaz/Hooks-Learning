import React,{useState} from 'react';

const Booksform = (props) => {
    const [title,setTitle ] = useState('');
    const [author,setAuthor] = useState('');
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
      const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBooks(title,author)
        setTitle("");
        setAuthor("");
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Add New Book</h1>
            <label>book title:</label>
            <input type="text" value={title} name="title" onChange={handleTitleChange}/>
            <label>book author:</label>
            <input type="text" value={author} name="author" onChange={handleAuthorChange}/>
            <button>Submit</button>
        </form>
     );
}
 
export default Booksform;