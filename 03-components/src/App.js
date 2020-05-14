import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
// import Clock from './components/Clock/Clock'
import Card from '../src/components/card/card.js'

const data = [
  {
    'category': 'PROGRAMMING',
    'title': '8 VS Code Extensions You Might Love',
    'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
    'author': 'Marvin Wendt in Better Programming',
    'publicationDate': 'May 4',
    'readTime': '3 min read',
    'image': 'https://picsum.photos/seed/picsum/200/300'
  },
  {
    'category': 'PROGRAMMING1',
    'title': '8 VS Code Extensions You Might Love1',
    'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more1',
    'author': 'Marvin Wendt in Better Programming1',
    'publicationDate': 'May 41',
    'readTime': '3 min read1',
    'image': 'https://picsum.photos/seed/picsum/200/300'
  },
  {
    'category': 'PROGRAMMING2',
    'title': '8 VS Code Extensions You Might Love2',
    'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more2',
    'author': 'Marvin Wendt in Better Programming2',
    'publicationDate': 'May 4 2',
    'readTime': '3 min read 2',
    'image': 'https://picsum.photos/seed/picsum/200/300'
  },
  {
    'category': 'PROGRAMMING3',
    'title': '8 VS Code Extensions You Might Love3',
    'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more3',
    'author': 'Marvin Wendt in Better Programming3',
    'publicationDate': 'May 4 3',
    'readTime': '3 min read 3',
    'image': 'https://picsum.photos/seed/picsum/200/300'
  },
]

export default class App extends Component {
  _renderCards () {
    return data.map(card => {
      return (
        <Card
          category={card.category}
          title={card.title}
          description={card.description}
          author={card.author}
          publicationDate={card.publicationDate}
          readTime={card.readTime}
          image={card.image}
        />
      )
    })
  }



  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bootcamp white - <strong>React</strong>
          </h1>
        </header>
        {this._renderCards()}
        {/* <Clock /> */}
      </div>
    );
  }
}