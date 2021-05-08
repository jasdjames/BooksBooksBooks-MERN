import React, { useState } from 'react';
import { SearchBar, InfoBox, Footer } from '../components';
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

  const handleSave = (bookToSave) => {
    console.log('booook we got ta save', bookToSave);

    var newBook = {
      title: bookToSave.title,
      authors: bookToSave.authors,
      description: bookToSave.description,
      image: bookToSave.imageLinks.thumbnail,
      link: bookToSave.canonicalVolumeLink,
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
      <InfoBox pageName={pageName} btnOne={btnOne} btnTwo={btnTwo}>
        {' '}
      </InfoBox>
      {found.map((book, i) => (
        <div key={i}>
          <div className="card-text border border-dark p-4 m-5">
            <div className="card-body">
              {' '}
              <div>
                <h5>{book.volumeInfo.title}</h5>
                <p>
                  {book.volumeInfo?.authors || 'Author information unavailable'}
                </p>
                <p>{book.volumeInfo.description}</p>
                <p>
                  Link to {book.volumeInfo.title} in Google Books
                  <a href={book.volumeInfo.canonicalVolumeLink}>
                    {'-'}
                    {book.volumeInfo.canonicalVolumeLink}
                  </a>
                </p>
                <img
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
                  }
                  alt="thumbnail of searched"
                />
              </div>
              <div className="float-right">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    handleSave(book.volumeInfo);
                  }}
                >
                  Save!
                </button>
                <button type="button" className="btn btn-info ">
                  <a href={book.volumeInfo.canonicalVolumeLink}>View</a>
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
