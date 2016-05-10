import React from 'react';

class App extends React.Component {
    
    constructor() { console.log(1)
        super();
        this.state = { 
            name : "World"
        };
        this.update = this.update.bind(this);
    }
    
    update (e) {
        this.setState({
            name : e.target.value 
        });
    }

    render(){
        return (
            <div>
                <div>Name : <input type="text" onChange={this.update} placeholder="World" /></div>
                Hello {this.state.name}!
            </div>
        )
    }
}

export default App;