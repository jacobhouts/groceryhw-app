import React,{useState} from 'react';


 function Grocery() { 
 const [list, setList] = useState([
  {item: 'Tofu',
  units: 2,
  quantity: 5,
  isPurchased: false
  },
  {item: 'Tortillas',
   units: 2,
   quantity: 2,
   isPurchased: false},
   {item: 'Avocado',
   units: 3,
   quantity: 4,
   isPurchased: true}
 ])
 const [itemName, setItemName] = useState('')
const [itemUnits, setItemUnits] = useState('')
const [itemQuantity, setItemQuantity] = useState('')
    const itemList = list.filter(item => !item.isPurchased).map(item => <div>  
           {item.item} 
            <ul>
            <li> Units: {item.units}</li>   
            <li> Quantity: {item.quantity} </li>
            <li> {item.isPurchased} </li>
             <button onClick={()=> (item.isPurchased= true) && setList([...list])}> Purchased</button>
        </ul>
          </div>
          )
        return (
            <div> 
            <label for="fname">Items:</label>
            <h2> {itemList} </h2>
            <input value={itemName} placeholder="Item Name" onChange={e => setItemName(e.target.value)} />
            <input value={itemUnits}  placeholder="Item Unit" onChange={e => setItemUnits(e.target.value)} />
            <input value={itemQuantity}  placeholder="Item Quantity" onChange={e => setItemQuantity(e.target.value)} />
            <button onClick={()=> (list.push({item:itemName, units:itemUnits, quantity: itemQuantity, isPurchased:false})) && setList([...list])}> Add Items</button>
            </div>
        )
} 
export default Grocery;      
