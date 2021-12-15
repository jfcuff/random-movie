    // src/App.js

    import React, { Component } from 'react';
    import Contacts from './components/contacts';

    class App extends Component {
      
      state = {
        movie: []
      }
      
      componentDidMount() {
        fetch('https://imdb-api.com/en/API/MostPopularMovies/k_y0s1c50w')
        .then(res => res.json())
        .then((data) => {
          this.setState({ movie: data.items[Math.floor(Math.random()*data.items.length)] })
        })
        .catch(console.log)
      }
      
      render () {
        return (
          <Contacts movie={this.state.movie} />
        );
      }
    }

    export default App;