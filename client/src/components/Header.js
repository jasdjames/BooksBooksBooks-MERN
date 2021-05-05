import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className=" text-center m-4">
      {' '}
      <h1 className=" display-2"> Google Books </h1>{' '}
      <p className="display-4">Search and save books of interest!!</p>
      <p>
        {' '}
        <Link to="/">
          <span>Search |</span>
        </Link>
        <Link to="/saved">
          <span>| Save</span>
        </Link>
      </p>
    </div>
  );
};
