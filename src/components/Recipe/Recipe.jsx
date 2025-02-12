import './Recipe.css'
import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { FaFireFlameCurved } from "react-icons/fa6";

const Recipe = ({recipe,wantToCook}) => {
    // console.log(wantToCook)
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className="single-recipie-content">
            <img src={recipe_image} alt="recipieImage" />
            <div className='headingText'>
                <h1>{recipe_name}</h1>
                <p>{short_description}</p>
            </div>
            <div className='ingredient-list'>
                <h3>Ingredients {ingredients.length}</h3>
                {
                    ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                }
            </div>


            <div className='time-calorie flex items-center my-5'>
                <p className='flex items-center mr-5'> <IoTimeOutline className='mr-1.5'/>  {preparing_time} minutes</p>
                <p className='flex items-center'> <FaFireFlameCurved className='mr-1.5' /> {calories} calories</p>
            </div>

            <button onClick={wantToCook}>Want to Cook</button>

        </div>
    );
};

export default Recipe;

Recipe.propTypes = {
    recipe: PropTypes.object,
    wantToCook:PropTypes.func
}