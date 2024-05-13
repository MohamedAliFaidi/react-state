import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'DALY',
        bio: 'just a student',
        imgSrc: '/101710917.png',
        profession: 'Software Developer working on that hihi ☻',
      },
      show: false,
      timeSinceMount: 0,
    };

   
  }

  componentDidMount() {
   setInterval(() => {
      this.setState({timeSinceMount :this.state.timeSinceMount+1});
    }, 1000);
  }




  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={()=>{
          this.setState({show:!this.state.show})
        }}>Toggle Show</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
