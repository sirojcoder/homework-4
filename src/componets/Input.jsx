import {useRef, useState} from 'react'

const Input = () => {
  
    const  [book_list, setBookList] = useState([
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
       const nameRef = useRef()
       const authorRef = useRef()
       const yearRef = useRef()

    const addBooks = () => {
        let new_book = {
            name: nameRef.current.value,
            author:authorRef.current.value,
            year:  yearRef.current.value
        }
        let current = [...book_list]
        current.push(new_book)
        setBookList(current)

        nameRef.current.value = null
        authorRef.current.value = null
        yearRef.current.value = null
    }

    const deleteBook = (i) => {
        setBookList(prevList => prevList.filter((_, index) => index !== i));
    };
    return (
    <div>
        <div className='cantainer'>
            <div>
                <input ref={nameRef} type="text" placeholder='Kitob nomini kiriting' />
                <input ref={authorRef} type="text" placeholder='Kitob muallifini kiriting' />
                <input ref={yearRef} type="text" placeholder='Kitob chop etilgan kiriting' />
                <button onClick={() => {addBooks()}}>Add book</button>
            </div>
           <ul>
            {
                book_list.map((item,index) =>{
                    return(
                        <li key={index} className='lii'>    
                            <p>Kitob nomi:  {item?.name}</p>
                            <p>Kitob muallifi:   {item?.author}</p>
                            <p>Kitob choq etilgan yili:  {item?.year}</p>
                            <button onClick={() => {deleteBook(index)}}>delete</button>
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