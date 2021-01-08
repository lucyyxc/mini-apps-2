import React from 'react';

const SearchBar = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='search here' onChange={handleChange} />
      <button type='submit'>search!</button>
    </form>
  );
};
export default SearchBar;
