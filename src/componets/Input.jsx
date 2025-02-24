import {useRef, useState} from 'react'

const Input = () => {
    
    const [book_list, setBookList] = useState([
       {
        name:"Harry Poter",
        author:"Harry Poter",
        year:2012
       },
       {
        name:"Sariq devni minib",
        author:"Xudoyberdi Toxtaboyev",
        year:2025
       }
    ])
    
    const [editIndex, setEditIndex] = useState(null);
    
    const nameRef = useRef()
    const authorRef = useRef()
    const yearRef = useRef()

    const addBooks = () => {
        let new_book = {
            name: nameRef.current.value,
            author: authorRef.current.value,
            year: yearRef.current.value
        }
        
        if (editIndex !== null) {
            let updatedBooks = [...book_list];
            updatedBooks[editIndex] = new_book;
            setBookList(updatedBooks);
            setEditIndex(null);
        } else {
            setBookList([...book_list, new_book]);
        }
        
        nameRef.current.value = "";
        authorRef.current.value = "";
        yearRef.current.value = "";
    }

    const deleteBook = (i) => {
        setBookList(prevList => prevList.filter((_, index) => index !== i));
    };
    
    const editBook = (i) => {
        const book = book_list[i];
        nameRef.current.value = book.name;
        authorRef.current.value = book.author;
        yearRef.current.value = book.year;
        setEditIndex(i);
    }

    return (
    <div>
        <div className='cantainer'>
            <div>
                <input ref={nameRef} type="text" placeholder='Kitob nomini kiriting' />
                <input ref={authorRef} type="text" placeholder='Kitob muallifini kiriting' />
                <input ref={yearRef} type="text" placeholder='Kitob chop etilgan yili' />
                <button onClick={addBooks}>{editIndex !== null ? "Update book" : "Add book"}</button>
            </div>
           <ul>
            {
                book_list.map((item,index) =>{
                    return(
                        <li key={index} className='lii'>    
                            <p>Kitob nomi:  {item?.name}</p>
                            <p>Kitob muallifi:   {item?.author}</p>
                            <p>Kitob chop etilgan yili:  {item?.year}</p>
                            <button className='delete' onClick={() => deleteBook(index)}>delete</button>
                            <button className='edit' onClick={() => editBook(index)}>edit</button>
                        </li>
                    )
                })
            }
           </ul>
        </div>
    </div>
  )
}

export default Input