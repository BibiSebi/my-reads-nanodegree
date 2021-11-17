import React from "react";

const Book = ({ book, onChangeShelf }) => {
  const onChange = (e) => {
    onChangeShelf(book, e.target.value);
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${
              book.imageLinks.thumbnail || book.imageLinks.smallThumbnail
            }")`,
          }}
        />
        <div className="book-shelf-changer">
          <select onChange={onChange} value={book.shelf || "none"}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(",")}
      </div>
    </div>
  );
};

Book.propTypes = {};

export default Book;
