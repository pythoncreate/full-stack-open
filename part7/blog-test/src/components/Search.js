import React from "react";
import { connect } from "react-redux";
import { searchChange, clearSearch } from "../reducers/searchReducer";
import { filterChange } from "../reducers/filterReducer";

const Search = props => {
  const handleSearch = event => {
    props.searchChange(event.target.value.toLowerCase());
  };

  const handleFilter = event => {
    props.filterChange(event.target.value);
  };

  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      search
      <input onChange={handleSearch} />
      <select onChange={handleFilter}>
        <option value="DESC">Sort Likes Descending</option>
        <option value="ASC">Sort Likes Ascending</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    search: state.search,
    filter: state.filter
  };
};

export default connect(mapStateToProps, {
  searchChange,
  filterChange,
  clearSearch
})(Search);
