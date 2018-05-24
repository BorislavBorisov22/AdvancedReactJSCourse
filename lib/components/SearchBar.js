import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchTerm: ''
    }

    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }

    render() {
        return (
            <input 
                type="search"
                placeholder="Enter search term"
                value={this.state.searchTerm}
                onChange={this.handleSearch}
            />
        );
    }
}

export default SearchBar;