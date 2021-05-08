export const SearchBar = (props) => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="Search"></label>
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
