import React, { useState } from 'react'
import ViewDetails from './ViewDetails'


interface Formvalue{
  title:string,
      author: string,
      price:number
}

export interface Books{
  id:number,
  title:string,
  author: string,
  price:number
}

const Book = () => {

  const [books, setBooks]= useState<Books[]>([])

  const [formvalue, setFormValue] = useState<Formvalue>(
    {
      title: "",
      author: "",
      price: 0
    }
  )

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    const {title, author, price}= formvalue;

    setBooks([
      ...books, {id:Math.random(),title:title,author:author,price:price}
    ])
    console.log("i am handleSubmit")
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value}=e.target
    setFormValue({
      ...formvalue, [name]:value
    })
    console.log("i am handleChange")
  }


  return (
    <div>
      <div className='form-cantainer'>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="">title</label>
          <input type="text" name="title" value={formvalue.title} onChange={handleChange}/>

          <label htmlFor="">author</label>
          <input type="text"  name="author" value={formvalue.author} onChange={handleChange}/>

          <label htmlFor="">price</label>
          <input type="text"  name="price" value={formvalue.price} onChange={handleChange}/>

          <button type='submit'>Add</button>

          {/* <button type='submit'>Update</button> */}
        </form>

        <ViewDetails books={books}/>
      </div>
    </div>
  )
}

export default Book;
