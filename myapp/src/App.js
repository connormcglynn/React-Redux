import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
    state = {
        ninjas: [
        { name: 'Ryu', age: 30, belt: 'Black', id: 1 },
        { name: 'Yoshi', age: 20, belt: 'Green', id: 2 },
        { name: 'Crystal', age: 25, belt: 'Pink', id: 3 }
        ]
    }

    addNinja = (ninja) => {
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        })
    }

    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id
        });
        this.setState({
            ninjas: ninjas
        })
    }

    componentDidMount(){
        console.log("Component mounted.");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Component updated.");
        console.log(prevProps, prevState);
    }

    render() {
        return (
        <div className="App">
            <h1>Ninja List Constructor</h1>
            <p>Welcome!</p>
            <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
            <AddNinja addNinja={this.addNinja} />
        </div>
        );
    }
}

export default App;
