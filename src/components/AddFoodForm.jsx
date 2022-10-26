// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({ addFoodHandler }) {
    
    const [name, setName] = useState('Aire');
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0);

    const submitForm = (e) => {
        e.preventDefault();
        
        addFoodHandler({name,image,calories,servings})
        
    }

    

  return (
    <form onSubmit={submitForm}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foodName} type="text" onChange={() => {setName(foodName)}} />

      <label>Image</label>
      <Input value={foodImage} type="text" onChange={() => {setImage(foodImage)}} />

      <label>Calories</label>
      <Input value={foodCalories} type="text" onChange={() => {setCalories(foodCalories)}} />

      <label>Servings</label>
      <Input value={foodServings} type="text" onChange={() => {setServings(foodServings)}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;