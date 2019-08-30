import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  }

  handleSearchForm = () => {
    console.log(this.state.input);
  }

  render() {
    return (
      <div className="search-by-name mg-b15">
        <input
          placeholder="Github Name"
          onChange={e => this.updateInput(e.target.value)}
          value={ this.state.input }
        />
        <button
          className="btn btn-primary mg-l10 mg-b1"
          onClick={this.handleSearchForm}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
