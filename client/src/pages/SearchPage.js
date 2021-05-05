import React, { useState, useEffect } from 'react';
import { SearchBar, InfoBox } from '../components';
import { API } from '../utils/API';

export const SearchPage = () => {
  const [searchQ, setSearchQ] = useState([]);
  const pageName = 'Results';

  useEffect(() => {
    // API.search();
    // then(function (ans) {
    //   console.log('This is the ans', ans);
    //   // setSearchQ(ans.data.results);
    // });
  }, []);

  // useEffect(()) =>{
  //   // load results???
  // }

  const handleSearch = () => {
    API.search(searchQ).then(function (res) {
      console.log('This is the res', res);
      // setSearchQ(ans.data.results);
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
