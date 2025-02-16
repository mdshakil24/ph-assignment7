import PropTypes from "prop-types";

const Coock = ({ cooke, cookes }) => {

    const { recipe_id, recipe_name, preparing_time, calories } = cooke;

    console.log(recipe_id)

    return (
        <div>

            <table className="table-auto">

                <tbody>

                    <tr className="flex justify-between">
                        <td className="p-2">{recipe_id}</td>
                        <td className="p-2">{recipe_name}</td>
                        <td className="p-2">{preparing_time} minutes</td>
                        <td className="p-2">{calories} calories</td>
                        <td className="p-2"><button className="preparing-btn">Preparing </button></td>
                    </tr>

                </tbody>
            </table>

        </div>
    );
};

export default Coock;

Coock.propTypes = {
    cooke: PropTypes.object,
    cookes: PropTypes.array
}