import React from 'react'
const groceries = [
    {item: 'Banana',
    units: 2,
    quantity: 5,
    isPurchased: false
    },
    {item: 'Milk',
     units: 2,
     quantity: 2,
     isPurchased: true},
     {item: 'Eggs',
     units: 3,
     quantity: 4,
     isPurchased: true}
   ]
 function Grocery() { 
    const itemList = groceries.map(grocery => <div>  
           {grocery.item} 
            <ul>
            <li> Units: {grocery.units}</li>   
            <li> Quantity: {grocery.quantity} </li>
            <li> {grocery.isPurchased} </li>
        </ul>
          </div>
          )
        return (
            <div> 
            <h2> {itemList} </h2>
            </div>
        )
} 
export default Grocery;      
        