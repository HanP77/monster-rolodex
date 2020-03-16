import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component'

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handelChange = e => {
		this.setState({ searchField: e.target.value }) 
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div className='App'>
				<h1>Monster Rolodex</h1>
				<SearchBox
					placeholder='search monsters'
					handleChange={this.handelChange}
				></SearchBox>
				<CardList monsters={filteredMonsters}></CardList>
			</div>
		);
	}
}

export default App;
