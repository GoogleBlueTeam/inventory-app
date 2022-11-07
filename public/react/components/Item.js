import React, { useState } from 'react';
import apiURL from '../api';


export const Item = ({item, setItems}) => {
  const [isShown, setIsShown] = useState(false);
  const  [title,setTitle] = useState("");
	const  [price,setPrice] = useState(0);
	const  [description,setDescription] = useState("");
	const  [category,setCategory] = useState("");
	const  [image,setImage] = useState("");

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


  const updateItem = async (target) => {
		const res = await fetch (`${apiURL}/items/${target}`, {
		  method: "PATCH",
		  headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify({
			title: title,
			price: price,
			description: description,
			category: category,
			image: image,
			}),
		  });
			await response.json();
		  };



  return <>
    <h3 onClick = {() => handleClick(item.id)}>{item.title}</h3>

    {isShown && (
    <>
          <p><b>Price:</b> {item.price}</p>
          <p><b>Description:</b> {item.description}</p>
          <p><b>category:</b> {item.category}</p>
          <img style={{ width: 200, height: 300 }} src={item.image} alt={item.title} />
          <form>
          <input
                type="text"
                placeholder="Item Title"
                aria-label="item title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <input
                type="text"
                placeholder="Item Price"
                aria-label="item price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <input
                type="text"
                placeholder="Item Description"
                aria-label="item description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <input
                type="text"
                placeholder="Item Category"
                aria-label="item category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
              <input
                type="text"
                placeholder="ImageURL"
                aria-label="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
          </form>
          <button className="deleteButton" onClick = {() => deleteItem(item.id)}>DELETE</button>
          <button className="backButton" onClick = {() => handleClick(item.id)}>Back to Item List</button>
    </>	
	)}
  </>
} 
	