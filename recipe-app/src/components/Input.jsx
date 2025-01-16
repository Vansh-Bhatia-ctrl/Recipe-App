import React, { useState } from "react";
import Button from "./Button.jsx";
import Results from "./Results.jsx";

const Input = () => {
  const [userInput, setUserInput] = useState("");
  const [fetchedMeals, setFetchedMeals] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleFetchData = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
    );
    const data = await response.json();
    setFetchedMeals(data.meals);
    console.log(data);
  };

  const handleDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  return (
    <>
      <div className="text-container">
        <input type="text" value={userInput} onChange={handleUserInput} />
        <Button onClick={handleFetchData} />
      </div>
      {selectedDish ? (
        <Results
          dishes={[selectedDish]}
          ingredients={Array.from(
            { length: 20 },
            (_, i) => selectedDish[`strIngredient${i + 1}`]
          ).filter(Boolean)}
          instructions={selectedDish.strInstructions}
          youtubeLink={selectedDish.strYoutube}
        />
      ) : (
        <Results dishes={fetchedMeals} handleDishSelect={handleDishSelect} />
      )}
    </>
  );
};

export default Input;
