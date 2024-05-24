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
  let pictureURL = 'https://ih1.redbubble.net/image.4835389836.2862/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg';

  // Method to retrieve the array from MongoDB
  return (
    <div className="App">
      <Navbar />
      <ProfileCover/>
      <ProfileStats />
      <div className="d-flex">
        <div id="profile-info" className="blue-background" style={{
          width: '30vw'}}>
          <ProfileInfo name='Sir Pepe III'/>
        </div>
        <div id="tweets" style={{
          width: '40vw'}}>
          <div id="new-tweet">
            <NewTweet picture={pictureURL}/>
          </div>
          <div id="tweet-cards">
            {/* Map function for TweetCard */}
            {/* Retrieve list of tweets from MongoDB */}
            <TweetCard />
            {/* <img src={pictureURL} alt="profile-pic"/> */}
          </div>
        </div>
        <div id="right-panel" className="blue-background" style={{width: '30vw'}}>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
