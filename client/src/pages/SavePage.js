import React, { useState, useEffect } from 'react';
import { InfoBox } from '../components';
import { API } from '../utils/API';
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
        <div>
          <div>{book.title}</div>
          <div></div>
          <div></div>
          <button
            onClick={() => {
              handleDel(book._id);
            }}
          >
            Delete!
          </button>
        </div>
      ))}
    </>
  );
};
