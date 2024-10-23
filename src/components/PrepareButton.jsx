import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import "../style/prepareButton.css"

const propTypes = {
    text: PropTypes.string,
    idMeal: PropTypes.string.isRequired,
};

const defaultProps = {
    text: '',
};

class PrepareButton extends React.Component{
    render(){
        return (
            <Link to="/meal-page" state={{idMeal: this.props.idMeal}}>
                <button className='prepare-button'>{this.props.text}</button>
            </Link>
        );
    }
}

PrepareButton.propTypes = propTypes;
PrepareButton.defaultProps = defaultProps;

export default PrepareButton;