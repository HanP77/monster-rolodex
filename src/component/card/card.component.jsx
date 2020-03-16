import React from 'react';

import './card.style.css';

export const Card = (props) => (
  // <p>{props.monster.id}</p>

	<div className='card-container'>
    <img alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    ></img>
		<h1> {props.monster.name} </h1>
		<h1> {props.monster.email} </h1>
	</div>
);
