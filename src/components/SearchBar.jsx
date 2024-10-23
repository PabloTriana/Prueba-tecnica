import React from "react";
import SearchButton from "./SearchButton";
import "../style/searchbar.css"

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value:"",
    };
  }

  handleChange = (e) =>{
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    this.props.onSearch(this.state.value);
  };
    
  render() {
    return (
      <div className="content-searchbar">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="type a meal" 
            value={this.state.value}
            onChange={this.handleChange}
            className="input-searchbar"
          />
          <SearchButton 
            text="Search" 
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
