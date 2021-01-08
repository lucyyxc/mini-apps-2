import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import EventList from './EventList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      currentPage: 1,
      pageCount: 0,
      offset: 0,
    };
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getData(query, offset) {
    axios
      .get(`http://localhost:3000/events?q=${query}&_start=${offset}&_limit=10`)
      .then((response) => {
        this.setState({
          data: response.data,
          pageCount: Math.ceil(response.headers['x-total-count'] / 10),
        });
      })
      .catch((error) => console.log('error getting data', error));
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getData(this.state.query, this.state.currentPage);
  }

  handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);
    this.setState({
      offset: offset,
      currentPage: selected + 1,
    });

    this.getData(this.state.query, this.state.offset);
  }

  componentDidMount() {
    this.getData(this.state.query, this.state.currentPage);
  }

  render() {
    return (
      <div>
        <h1>Challenge 1</h1>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <EventList data={this.state.data} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default App;
