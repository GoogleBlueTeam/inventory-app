import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, setItems}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} setItems={setItems} />
			})
		}
	</>
} 
