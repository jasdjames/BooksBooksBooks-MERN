// import { useEffect, useState } from 'react';
// import axios from 'axios';

export const SearchBar = (props) => {
  // const [searchQ, setSearchQ] = useState([])

  // const handleSearch = ({ target }) => {
  //     const { value } = target;

  // }
  return (
    <div className="container">
      <form className="border border-info">
        <div className="form-group">
          <label htmlFor="Search">Search</label>
          <input
            {...props}
            type="text"
            className="form-control"
            id="Search"
            aria-describedby="Search"
          />
        </div>
      </form>
    </div>
  );
};
