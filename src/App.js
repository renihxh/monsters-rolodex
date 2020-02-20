import React, {Component} from 'react';
import { SearchBox } from './components/search-box/search-box-component';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component{
constructor() {
  super();
  this.state = {
    monsters: [],
    searchField : ''
  };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users }));
}

handleChange = (e) =>{
  this.setState({searchField: e.target.value});
}

onSearchChange = event => {

};
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsetrs = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        
        <CardList monsters={filteredMonsetrs} />
      </div>
    );
  }
}
export default App;
