import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProfileCover from './components/ProfileCover';
import ProfileStats from './components/ProfileStats';
import ProfileInfo from './components/ProfileInfo';
import NewTweet from './components/NewTweet';
import TweetCard from './components/TweetCard';
import RightPanel from './components/RightPanel';
// import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  let placeholderPictureURL = 'https://ih1.redbubble.net/image.4835389836.2862/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg';
  let placeholderContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum dui diam, non vulputate augue egestas id. Donec tincidunt neque sapien, a sagittis velit iaculis at. Aenean porta nec purus ut vulputate. Cras vitae lorem elit. Ut vestibulum nisi eget vulputate tristique. Ut vitae mi finibus odio interdum tincidunt ac eu dui. Quisque lobortis nisi justo, in fermentum lectus ultrices vitae. Praesent non condimentum metus, id fermentum urna.";
  let placeholderStats = {
    numComments: 1,
    numLikes: 1,
    numReposts: 1,
    numViews: 1
  };

  let numTweets = 0;

  let tweet = {
    id: numTweets,
    pictureURL: placeholderPictureURL,
    content: placeholderContent,
    stats: placeholderStats
  }

  // Connect to mongoDV and retrieve tweets
  let tweets = [];

  console.log(tweet);

  tweets.push(tweet);

  // Method to retrieve the array from MongoDB
  return (
    <div className="App" style={{
      minHeight: '100vh'
    }}>
      <Navbar />
      <ProfileCover/>
      <ProfileStats />
      <div className="d-flex h-auto">
        <div id="profile-info" className="blue-background h-auto" style={{
          width: '30vw'}}>
          <ProfileInfo name='Sir Pepe III'/>
        </div>
        <div id="tweets" className="h-auto" style={{
          width: '40vw'}}>
          <div id="new-tweet">
            <NewTweet picture={placeholderPictureURL}/>
          </div>
          <div id="tweet-cards">
            {/* Map function for TweetCard */}
            {/* Retrieve list of tweets from MongoDB */}
            {tweets.map(tweet =>
              <TweetCard 
                picture={tweet.placeholderPictureURL}
                content={tweet.content}
                numLikes= {tweet.stats.numLikes}
                numComments = {tweet.stats.numComments}
                numReposts= {tweet.stats.numReposts}
                numViews= {tweet.stats.numViews} />
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

export default App;
