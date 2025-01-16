import React from "react";

const Results = ({
  ingredients,
  instructions,
  youtubeLink,
  dishes,
  handleDishSelect,
}) => {
  return (
    <div className="result-container">
      <div className="recipe-card">
        <h3>Dishes:</h3>
        <p>
          {dishes.map((dish, id) => (
            <li key={dish.idMeal} onClick={() => handleDishSelect(dish)}>
              {dish.strMeal}
            </li>
          ))}
        </p>
      </div>
      {ingredients && (
        <div className="recipe-card">
          <h3>Ingredients:</h3>
          <p>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </p>
        </div>
      )}
      {instructions && (
        <div className="recipe-card">
          <h3>Recipe:</h3>
          <p>{instructions}</p>
        </div>
      )}
      {youtubeLink && (
        <div className="recipe-card">
          <h3>Youtube Link:{youtubeLink}</h3>
          <p>
            <a href={youtubeLink}>Watch the video here</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Results;
