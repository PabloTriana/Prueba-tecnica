import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import "../style/randomButton.css"


const propTypes = {
    text: PropTypes.string,
};

const defaultProps = {
    text: '',
};

class Random extends React.Component{

    render(){
        return (
            <Link to="/lucky-meal">
                <button className='random-button'>{this.props.text}</button>
            </Link>
        );
    }
}

Random.propTypes = propTypes;
Random.defaultProps = defaultProps;

export default Random;