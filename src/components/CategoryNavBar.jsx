import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import "../style/categoryNavBar.css"

const propTypes = {
  categories: PropTypes.array.isRequired,
};

class CategoryNavBar extends React.Component {
  render() {
    const { categories } = this.props;

    return (
      <nav className="menuCategory">
        {categories.map((category) => (
          <Link key={category.idCategory} to={`/${category.strCategory}`} className='category-link'>
            {`${category.strCategory}`}
          </Link>
        ))}
      </nav>
    );
  }
}

CategoryNavBar.propTypes = propTypes;

export default CategoryNavBar;
