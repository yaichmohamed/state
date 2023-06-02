import React, { Component } from 'react';
import Person from './Person';
import Timer from './Timer';

class App extends Component {
  state = {
    Person: {
      fullName: 'Lionel Messi', // Full name of the person
      bio: 'Lionel Messi naît le 24 juin 1987 à Rosario en Argentine.', // Biography of the person
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', // Image URL of the person
      profession: ' footballeur international ', // Profession of the person
    },
    shows: true, // Flag to determine if the Person component should be shown
    timeInterval: 0, // Time interval value for Timer component
  };

  toggleShow = () => {
    this.setState(prevState => ({ shows: !prevState.shows })); // Toggle the shows flag when the button is clicked
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({ timeInterval: prevState.timeInterval + 0.5 })); // Increment the time interval every 1.1 seconds
    }, 1100);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person; // Destructure the person properties from state
    const { shows, timeInterval } = this.state; // Destructure the shows and timeInterval properties from state

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle show</button> // Button to toggle the show flag
        {shows && <Person fullName={fullName} bio={bio} imgSrc={imgSrc} profession={profession} />} // Render the Person component only if shows is true
        <Timer timeInterval={timeInterval} /> // Render the Timer component and pass the timeInterval value
      </div>
    );
  }
}

export default App;
