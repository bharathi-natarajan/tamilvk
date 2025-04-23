import { useState } from 'react'
import { bookList } from '../booklist'
import SingleBook from './SingleBook'
import './Books.css'

const Books = () => {
  const [books, setBooks] = useState(bookList[0].books)
  const [bookGroup, setBookGroup] = useState(bookList[0].group)

  const handleClick = (id) => {
    const selected = bookList.find((group) => group.id === id)
    setBooks(selected.books)
    setBookGroup(selected.group)
  }

  return (
    <section className="books-section">
      <div className="books-container">
        <div className="books-menu">
          <h3>வெளியீடுகள்</h3>
          {bookList.map(({ id, group }) => (
            <button key={id} onClick={() => handleClick(id)}>
              {group}
            </button>
          ))}
        </div>
      </div>
      <SingleBook books={books} bookGroup={bookGroup} />
    </section>
  )
}
export default Books
