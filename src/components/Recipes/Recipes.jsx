import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Coock from "../Coock/Coock"

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [cookes, setCookes] = useState([]);
 

    useState(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    const wantToCook = (recipe,recipe_id) => {
        const newCoockes = [...cookes, recipe];


        const existItem = newCoockes.find(cooke => cooke.recipe_id === recipe_id);
        console.log(existItem)
        if(existItem) {
            alert("Already exist");
        }
        else {
            setCookes(newCoockes);
        }




    }

    return (
        <div className="px-4 py-22">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center max-w-2xl mx-auto">
                    <h2 className="font-semibold text-[#150B2B] capitalize text-3xl sm:text-4xl mb-5">Our Recipes {recipes.length}</h2>
                    <p className="font-normal text-sm text-[#150B2B] sm:text-base leading-5">Explore a world of flavors with CalorieCanvas. Our easy-to-folow recipes, cooking tips, and unique techniques will help you to create memorable meals for any occasion.</p>
                </div>


                <div className="flex gap-5">

                    <div className="flex-2 grid grid-cols-2 gap-x-4 gap-y-8">
                        {recipes.map((recipe, idx) => <Recipe
                            key={idx}
                            recipe={recipe}
                            wantToCook={wantToCook}
                           
                        ></Recipe>)}
                    </div>

                    <div className="flex-1 border border-[#282828] rounded-xl p-4">
                        <h1 className="pb-4 text-center font-semibold text-2xl">Want to cook: {cookes.length}</h1>
                        <table>
                            <thead>
                                <tr className="pl-4">
                                    <th className="pl-5">Name</th>
                                    <th className="p-2">Time</th>
                                    <th className="p-2">Calories</th>
                                </tr>
                            </thead>
                        </table>
                        {cookes.map((cooke, idx) => <Coock
                            key={idx}
                            cooke={cooke}
                            cookes = {cookes}
                        ></Coock>)}

                    </div>

                   

                </div>

            </div>
        </div>
    );
};

export default Recipes;