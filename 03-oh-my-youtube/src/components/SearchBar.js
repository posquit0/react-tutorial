import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  onInputChange(query) {
    this.setState({ query });
    this.props.onQueryChange(query);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }
}

export default SearchBar;
