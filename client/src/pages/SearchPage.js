import React, { useState } from 'react';
import { SearchBar, InfoBox } from '../components';
import { API } from '../utils/API';

export const SearchPage = () => {
  const [searchQ, setSearchQ] = useState([]);
  const [found, setFound] = useState([]);
  const pageName = 'Results';

  const handleSearch = () => {
    API.search(searchQ).then(function (res) {
      console.log('This is the res', res);
      function getBook() {
        setFound(res.data.item);
      }
    });
  };
  const handleInput = (event) => {
    const value = event.target.value;
    setSearchQ(value);
  };

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

      <InfoBox pageName={pageName} />
      {found.map((book, i) => (
        <div key={i}>
          <div></div>
          <div></div>
          <div></div>
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
