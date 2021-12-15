import React, {useEffect} from "react";
import './TotalQuantity.css';

const TotalQuantity = ({ totalCount }) => {
     const count = [ ];
     const total = 0;


useEffect(() => {
///sumArrayOfNumbers() ///when you do (), you are calling a function.,,, this is called invoking a function
}, [])



const sumArrayOfNumbers = (countArray) => {
///Context
///let basically say javascripts and react, hey I am going to describe the following var with let, total on line 9 is limited and can't be used outside of the sumArrayOfNumbers function.


   for (
     let i = 0;
      i < countArray.length;
      i += 1
    ) {
     total += countArray[i];
     }

     }  

return (

<div class="center">
<p> This is the total quantity of fruit in stock </p>
    
     <span>{totalCount}</span>
</div>
)
}

export default TotalQuantity;
