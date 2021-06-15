import React, {Component} from "react";
import initialContacts from "./contacts.json";
import './App.css';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.contacts.map((row) => {
    return (
      <tr key={row.id}>
        <td><img className="vip-pic" src={row.pictureUrl} alt="contact" /></td>
        <td>{row.name}</td>
        <td>{row.popularity.toFixed(2)}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}





class Table extends Component { // mejor contructor
  
  state = {
    contacts: initialContacts.slice(0, 5),
  };

  handleRandom = () => {
    const randomContact = initialContacts[Math.floor(Math.random() * initialContacts.length)];
    const newState = [...this.state.contacts]

    newState.push(randomContact)

   this.setState({
      contacts: newState
    });
  }

  handleSortName = () => {
    const copyOfContacts = [...this.state.contacts];

    copyOfContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      contacts: copyOfContacts
    });
  }

    handleSortPop = () => {
    const copyOfContacts = [...this.state.contacts];

    copyOfContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    this.setState({
      contacts: copyOfContacts,
    });
  };
  
  render() {
    const {contacts} = this.state
    return (
      <>
      <button onClick={this.handleRandom}>Add Random Contact</button>
      <button onClick={this.handleSortName}>Sort by Name</button>
      <button onClick={this.handleSortPop}>Sort by Popularity</button>
      <table>
        <TableHeader />
        <TableBody contacts={contacts} />
      </table>
      </>
    )
  }
}






class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Table />
      </div>
    )
  }
}





export default App;