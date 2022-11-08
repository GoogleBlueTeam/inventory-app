import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList';
import "../../style.css";



// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	// const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);
	const [isAddingItem, setIsAddingItem] = useState(false);
	const  [title,setTitle] = useState("");
	const  [price,setPrice] = useState(0);
	const  [description,setDescription] = useState("");
	const  [category,setCategory] = useState("");
	const  [image,setImage] = useState("");

	// async function fetchSauces(){
	// 	try {
	// 		const response = await fetch(`${apiURL}/sauces`);
	// 		const saucesData = await response.json();
			
	// 		setSauces(saucesData);
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	const handleSubmit = async () => {
		const response = await fetch(`${apiURL}/items`, {
		  method: "POST",
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


	useEffect(() => {
		// fetchSauces();
		fetchItems();
	}, []);

	return (
		<main>	
			<div className="card">
			<h2>🔥Blue Team Inventory App 🔥</h2>


			{isAddingItem ? (
          <div>
            <form onSubmit={handleSubmit}>
              <h4>Add an Item</h4>
              <p><input
                type="text"
                placeholder="Item Title"
                aria-label="item title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              /></p>
              <p><input
                type="text"
                placeholder="Item Price"
                aria-label="item price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              /></p>
              <p><input
                type="text"
                placeholder="Item Description"
                aria-label="item description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              /></p>
              <p><input
                type="text"
                placeholder="Item Category"
                aria-label="item category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              /></p>
              <p><input
                type="text"
                placeholder="ImageURL"
                aria-label="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              /></p>
             	 <button type="submit">Submit Item</button>
			  </form>
			</div>
			) : (
				<ItemsList items = {items} setItems = {setItems}/>
			)}

			<button className="button1" onClick={() => setIsAddingItem(!isAddingItem)}>Add Item</button>

			</div>
		</main>
	)
}
