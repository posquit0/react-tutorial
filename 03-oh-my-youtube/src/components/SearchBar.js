import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  onInputChange(query) {
    this.setState({ query });

    if (this.props.onQueryChange)
      this.props.onQueryChange(query);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Video"
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }
}

export default SearchBar;
