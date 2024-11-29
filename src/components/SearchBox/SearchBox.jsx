import s from './SearchBox.module.css';

const SearchBox = ({ searchValue, handleSearch }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="search"
        className={s.input}
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
