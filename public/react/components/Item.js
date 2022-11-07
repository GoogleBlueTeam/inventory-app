import React, {useState} from 'react';
import apiURL from '../api';


export const Item = ({item}) => {
  const [isShown, setIsShown] = useState(false);


  const handleClick = async (target) => {

		const res = await fetch(`${apiURL}/items/${target}`);
		const data = await res.json();
		//console.log(data);
		setIsShown(!isShown);
		//console.log("hihihi");
	}


  return <>
    <h3 onClick = {() => handleClick(item.id)}>{item.title}</h3>

    {isShown && (
    <>
          <p><b>Price:</b> {item.price}</p>
          <p><b>Description:</b> {item.description}</p>
          <p><b>category:</b> {item.category}</p>
          <img style={{ width: 200, height: 300 }} src={item.image} alt={item.title} />
          <button className="deleteButton" >DELETE</button>
          <button className="backButton" onClick = {() => handleClick(item.id)}>Back to Item List</button>
    </>	
	)}
  </>
} 
	