import React, { useState } from 'react';
import { SearchBar, InfoBox, ResultsBox } from '../components';
import { API } from '../utils/API';
import axios from 'axios';

export const SearchPage = () => {
  const [searchQ, setSearchQ] = useState([]);
  const [found, setFound] = useState([]);
  const pageName = 'Results';
  const btnOne = 'View';
  const btnTwo = 'Save';

  const handleSearch = () => {
    API.search(searchQ).then(function (res) {
      console.log('This is the res', res);
      // function getBook() {
      setFound(res.data.items);
      // }
    });
  };
  const handleInput = (event) => {
    const value = event.target.value;
    setSearchQ(value);
  };

  const handelSave = (bookToSave) => {
    console.log('booook we got ta save', bookToSave);

    var newBook = {
      title: bookToSave.title,
      authors: bookToSave.authors,
      description: bookToSave.description,
      image: bookToSave.imageLinks.thumbnail,
      link: bookToSave.imageLinks.thumbnail,
    };
    console.log('about to save this book', newBook);

    axios.post('/api/books', newBook).then(function (data) {
      console.log('datttt form api post', data);
    });
  };

  console.log('book state!!!', found);
  return (
    <>
      <div className="text-center m-2">
        {' '}
        <SearchBar onChange={handleInput} />{' '}
        <button
          onClick={handleSearch}
          type="submit"
          className="btn btn-primary"
        >
          Search
        </button>
      </div>

      <InfoBox pageName={pageName} btnOne={btnOne} btnTwo={btnTwo}></InfoBox>

      {found.map((book, i) => (
        <div key={i}>
          <div>{book.volumeInfo.title}</div>
          <div></div>
          <div></div>
          <button
            onClick={() => {
              handelSave(book.volumeInfo);
            }}
          >
            Save!
          </button>
          <button>
            <a
              target="_blank"
              href={
                'https://books.google.com/books/about/She_s_Selling_What.html?hl=&id=PUShDwAAQBAJ'
              }
            >
              View
            </a>
          </button>
        </div>
      ))}
      {/* <div className="container border-3 border-dark">
        <div className="card">
          {pageName}
          <div>
            <div></div>
          </div>
        </div>
      </div> */}
    </>
  );
};
