import React, { Component }from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';

import { SearchBox } from './components/searchBox/search-box.component'

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFied: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchFied: e.target.value })
  }

    render() {
      const { monsters, searchFied } = this.state;
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFied.toLowerCase()));
      return (
        <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox 
            placeholder='search monsters'
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />  
        </div>
      );
    }
}

export default App;
 