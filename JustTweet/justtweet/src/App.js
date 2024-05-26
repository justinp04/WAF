import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProfileCover from './components/ProfileCover';
import ProfileStats from './components/ProfileStats';
import ProfileInfo from './components/ProfileInfo';
import NewTweet from './components/NewTweet';
import TweetCard from './components/TweetCard';
import RightPanel from './components/RightPanel';
// import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Sir Pepe III',
      handle: 'sp3',
      tweets: [],
      numTweets: 0,
      loading: true
    };

    // Ensures that when this method is called, it is called in this context.
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  async handleDelete(tweetID) {
    // Retrieve list of tweets from MongoDB
    // Filter new array by dropping the tweetID 
    await axios.delete(`http://localhost:3000/delete/${tweetID}`);

    this.setState(prevState => {
        const updatedTweets = prevState.tweets.filter(tweet => tweet._id !== tweetID);
        return {
          tweets: updatedTweets,
          numTweets: updatedTweets.length
        };
    });
  
    console.log("Deleted tweet");

    window.location.reload();
  }

  async handleAdd(content) {
    // console.log('Added tweet: ', content)
    const newTweet = {tweetContent: content}
    const {data: tweet} = await axios.post('http://localhost:3000/post', newTweet)

    console.log(tweet);
  }

  async componentDidMount() {
    console.log('getting tweets');
    const {data: tweets} = await axios.get('http://localhost:3000/tweets');

    tweets.reverse();

    this.setState({
      tweets: tweets,
      numTweets: tweets.length,
      loading: false});

    console.log(this.state.numTweets);
  }

  render() {
    // Method to retrieve the array from MongoDB

    if (this.state.loading) {
      return <div> Loading... </div>;
    }
    
    return (
      <div className="App" style={{
        minHeight: '100vh'
      }}>
        <Navbar />
        <ProfileCover/>
        <ProfileStats 
          numTweets={this.state.numTweets}/>
        <div className="d-flex h-auto">
          <div id="profile-info" className="blue-background h-auto" style={{
            width: '30vw'}}>
            <ProfileInfo 
              name='Sir Pepe III'
              handle='theRealPepe'
              joinDate='Dec 2008'/>
          </div>
          <div id="tweets" className="h-auto" style={{
            width: '40vw'}}>
            <div id="new-tweet">
              <NewTweet
                onPost={this.handleAdd}/>
            </div>
            <div id="tweet-cards">
              {/* Map function for TweetCard */}
              {/* Retrieve list of tweets from MongoDB */}
              {this.state.tweets.map(tweet =>
                <TweetCard 
                  onDelete={this.handleDelete}
                  id={tweet._id}
                  content={tweet.content}
                  name={this.state.name}
                  handle={this.state.handle}
                  date={tweet.date}/>
              )}
              {/* <img src={pictureURL} alt="profile-pic"/> */}
            </div>
          </div>
          <div id="right-panel" className="blue-background h-auto" style={{width: '30vw'}}>
            <RightPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;