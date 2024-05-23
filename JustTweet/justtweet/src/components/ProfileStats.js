import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class ProfileStats extends Component {
    render() {
        return(
            <div class="container-fluid d-flex py-2 bg-light" style={{ paddingLeft: '30vw'}}>
                {/* <div style={{ 
                    width: '30vw',
                    zIndex: '1000'
                }}>
                    <img id="profile-picture"src="https://ih1.redbubble.net/image.4835389836.2862/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" class="rounded-circle"/>
                </div> */}
                <div class="d-flex flex-column px-2">
                    <p class="text-center my-1">Tweets</p>
                    <p id="num-tweets" class="text-center my-1">0</p>
                </div>
                <div class="d-flex flex-column px-2">
                    <p class="text-center my-1">Following</p>
                    <p id="num-following" class="text-center my-1">0</p>
                </div>
                <div class="d-flex flex-column px-2">
                    <p class="text-center my-1">Followers</p>
                    <p id="num-followers" class="text-center my-1">0</p>
                </div>
                <div class="d-flex flex-column px-2">
                    <p class="text-center my-1">Likes</p>
                    <p id="num-likes" class="text-center my-1">0</p>
                </div>
            </div>
        );
    };
}

export default ProfileStats;