// src/App.js
import './App.css';
// eslint-disable-next-line
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';

import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './style-guide/AddFoodForm.example';

function App() {
  const [showFood, setShowFood] = useState(foods);

  function addFoodHandler(name, calories, image, servings) {
    const objToAdd = {
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };
    const foodArrCopy = [...showFood, objToAdd];
    setShowFood(foodArrCopy);
  }

  return (
    <div className="App">
      <AddFoodForm addFoodHandler={addFoodHandler} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFood.map((food) => {
          return (
            <FoodBox key={'' + food.name + '' + food.calories} food={food} />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
