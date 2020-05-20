import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {

    return (
       <div><div>
           <table className="responsive-table">
               <tr>
                   <td>
           <div className="col s12 m2">
           <h1 className="z-depth-5">>
               {title}
           </h1>
           </div> </td>
           <td> <ul>
               {ingredients.map(ingredient =>
                (
                <li>{ingredient.text}</li>
                ))}
           </ul></td>
           <td><p>CALORIE(Kcal) = {calories}</p></td>
          <div className="row"> <td className ="col s12 m7"><img src={image} alt="/"  className="card-image"/></td></div>
           </tr>
           </table>
           <hr></hr>
           </div>

       </div>
       
    );
}


export default Recipe;