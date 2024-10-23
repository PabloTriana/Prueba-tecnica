import React from 'react';
import PropTypes from 'prop-types'
import "../style/searchButton.css"


const propTypes = {
    text: PropTypes.string,
};

const defaultProps = {
    text: '',
};

class SearchButton extends React.Component{

    render(){
        return <button className='search-button'>{this.props.text}</button>
    }
}

SearchButton.propTypes = propTypes;
SearchButton.defaultProps = defaultProps;

export default SearchButton;