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
  // Method to retrieve the array from MongoDB
  return (
    <div className="App">
      <Navbar />
      <ProfileCover/>
      <ProfileStats />
      <div className="d-flex">
        <div id="profile-info" style={{width: '30vw'}}>
          <ProfileInfo name='Sir Pepe III'/>
        </div>
        <div id="tweets" style={{width: '40vw'}}>
          <div id="new-tweet">
            <NewTweet />
          </div>
          <div id="tweet-cards">
            {/* Map function for TweetCard */}
            {/* Retrieve list of tweets from MongoDB */}
          </div>
        </div>
        <div id="right-panel" style={{width: '30vw'}}>
          <RightPanel />
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
