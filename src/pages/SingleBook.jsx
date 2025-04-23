import { useState } from 'react'
import './SingleBook.css'

const SingleBook = ({ books, bookGroup }) => {
  const [selectedBook, setSelectedBook] = useState(null)

  const handleImageClick = (book) => {
    setSelectedBook(book)
  }

  const closeLightbox = () => {
    setSelectedBook(null)
  }

  return (
    <section className="singlebook-container">
      <h3>{bookGroup}</h3>
      <div className="single-book">
        {books.map((book, index) => (
          <div className="book-container" key={index}>
            <div className="book-wrapper">
              <ul className="book-list">
                <li className="book-item">
                  <img
                    className="book-image"
                    src={book.img}
                    alt={book.title}
                    onClick={() => handleImageClick(book)}
                  />
                  <h4 className="book-title">{book.title}</h4>
                  <p className="badge">{book.author}</p>
                  <p>பதிப்பு: {book.publication}</p>
                  <p>விலை ரூ. {book.price}</p>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox with book details */}
      {selectedBook && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={closeLightbox}>
              &times;
            </span>
            <img
              className="lightbox-img"
              src={selectedBook.img}
              alt={selectedBook.title}
            />
            <div className="lightbox-details">
              <h2>{selectedBook.title}</h2>
              <p>
                <strong>ஆசிரியர்:</strong> {selectedBook.author}
              </p>
              <p>
                <strong>பதிப்பு:</strong> {selectedBook.publication}
              </p>
              <p>
                <strong>விலை:</strong> ரூ. {selectedBook.price}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SingleBook

// import './SingleBook.css'

// const SingleBook = ({ books, bookGroup }) => {
//   return (
//     <section className="singlebook-container">
//       <h3>{bookGroup}</h3>
//       <div className="single-book">
//         {books.map((book, index) => {
//           return (
//             <div className="book-container" key={index}>
//               <div className="book-wrapper">
//                 <ul className="book-list">
//                   <li className="book-item">
//                     <img
//                       className="book-image"
//                       src={book.img}
//                       alt={book.title}
//                     />
//                     <h4 className="book-title">{book.title}</h4>
//                     <p className="badge">{book.author}</p>
//                     <p>பதிப்பு: {book.publication}</p>
//                     <p>விலை ரூ. {book.price}</p>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }
// export default SingleBook
