import React from "react";
import PropTypes from "prop-types";
import "../style/detailMeal.css"

const propTypes = {
  idMeal: PropTypes.string,
};

const defaultProps = {
  idMeal: "",
};

class DetailMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: [],
    };
  }

  getDetail = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.idMeal}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          const meals = data.meals.map((v) => ({
            strCategory: v.strCategory,
            strArea: v.strArea,
            strTags: v.strTags,
          }));
          this.setState({ meal: meals });
        }
      });
  };

  componentDidMount() {
    this.getDetail();
  }

  render() {
    return (
      <div className="container-detailM">
        {this.state.meal.map((meal, index) => (
          <div key={index} className="content-detailM">
            <span className="span-desing"><strong>Category:</strong>{meal.strCategory}</span>
            <span className="span-desing"><strong>Area:</strong>{meal.strArea}</span>
            {(meal.strTags) ? <span className="span-desing"><strong>Tags:</strong> {meal.strTags}</span> : <span></span>}
          </div>
        ))}
      </div>
    );
  }
}

DetailMeal.propTypes = propTypes;
DetailMeal.defaultProps = defaultProps;

export default DetailMeal;
