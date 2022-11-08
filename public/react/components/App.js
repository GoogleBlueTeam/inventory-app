import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import "../../style.css";



// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	const [items, setItems] = useState([]);
	const [isAddingItem, setIsAddingItem] = useState(false);
	const  [title,setTitle] = useState("");
	const  [price,setPrice] = useState(0);
	const  [description,setDescription] = useState("");
	const  [category,setCategory] = useState("");
	const  [image,setImage] = useState("");

	const [hotsauce, setHotsauce] = useState([]);
	const [hotsauceToggle, setHotsauceToggle] = useState(false);

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

	const getHotsauce = async (city) => {
		try {
			const apiKey = "d6e7449e18770c0b5733b2d810c03137"
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
			const data = await response.json();
			console.log("hihi")
			setHotsauce(data);
			console.log(data);
			setHotsauceToggle(!hotsauceToggle);

		} catch (err) {
			console.log("Oh no an error! ", err)
	}
	}


	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
		<div className="main" >
			<div className="smallcard" ><b>It's hot sauce time!</b>
				<img 
				src="https://64.media.tumblr.com/1564fcf74adc3fe6542c34b6a1f05de1/tumblr_na9lew0bNS1tha1vgo1_r1_250.gif" 
				onClick = {() => getHotsauce("austin")} ></img>
				{hotsauceToggle && (
				<>
					<p>City: {hotsauce.name}</p>
					<p>Temperture: {hotsauce.main.temp}</p>
				</>
				)}

			</div>
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

			<button className="button1" onClick={() => setIsAddingItem(!isAddingItem)}>+</button>

			</div>
			</div>
		</main>
	)
}
