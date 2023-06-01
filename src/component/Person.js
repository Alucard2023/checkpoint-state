import React, { Component } from 'react';

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.person = {
      fullName: 'Med Tarek Hadded',
      bio: 'Hello, my name is Tarkin and I am a developer.',
      imgSrc: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      profession: 'Software BIG boss',
    };
    this.state = { count: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.person.fullName}</h1>
        <p>{this.person.bio}</p>
        <img src={this.person.imgSrc} alt="profile" />
        <p>{this.person.profession}</p>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}