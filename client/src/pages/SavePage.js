import React, { useState, useEffect } from 'react';
import { Footer, InfoBox } from '../components';

import axios from 'axios';
const pageName = 'Saved Pages';

export const SavePage = () => {
  const [savedBooks, setSavedBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  console.log('saved books!', savedBooks);
  function getBooks() {
    axios.get('/api/books').then(function (data) {
      console.log('datttt form api post', data);
      setSavedBooks(data.data);
    });
  }

  const handleDel = (id) => {
    console.log('is this the id?', id);
    axios.delete('/api/books/' + id).then(function (data) {
      getBooks();
    });
  };
  return (
    <>
      <InfoBox pageName={pageName} />
      {savedBooks.map((book, i) => (
        <div key={i}>
          <div className="card-text border border-dark p-4 m-5">
            <div className="card-body">
              {' '}
              <div>
                <h5>{book.title}</h5>
                <p>{book.authors}</p>
                <p>{book.description}</p>
                <p>
                  Link to {book.link} in Google Books
                  <a href={book.link}>
                    {'-'}
                    {book.link}
                  </a>
                </p>
                <img src={book.image} alt="thumbnail of searched" />
              </div>
              <div className="float-right">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    handleDel(book._id);
                  }}
                >
                  Delete!
                </button>
                <button type="button" className="btn btn-info ">
                  <a href={book.link}>View</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};
