import React, { useState } from 'react';
import apiURL from '../api';


export const Item = ({item, setItems}) => {
  const [isShown, setIsShown] = useState(false);

  async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

  const handleClick = async (target) => {

		const res = await fetch(`${apiURL}/items/${target}`);
		const data = await res.json();
		//console.log(data);
		setIsShown(!isShown);
		//console.log("hihihi");
	}

  const deleteItem = async (target) => {
    const res = await fetch (`${apiURL}/items/${target}`, {
      method: "DELETE"
    });
    await res.json();
    fetchItems()
  }







  return <>
    <h3 onClick = {() => handleClick(item.id)}>{item.title}</h3>

    {isShown && (
    <>
          <p><b>Price:</b> {item.price}</p>
          <p><b>Description:</b> {item.description}</p>
          <p><b>category:</b> {item.category}</p>
          <img style={{ width: 200, height: 300 }} src={item.image} alt={item.title} />
          <button className="deleteButton" onClick = {() => deleteItem(item.id)}>DELETE</button>
          <button className="backButton" onClick = {() => handleClick(item.id)}>Back to Item List</button>
    </>	
	)}
  </>
} 
	