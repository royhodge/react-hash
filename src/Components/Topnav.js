// 
// 
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountBox from '@material-ui/icons/AccountBox';
import TimeToLeave from '@material-ui/icons/TimeToLeave';
// import '../CSS/App.css';

function Topnav_Left() {
    return (
        <React.Fragment>
            <div id="topNavleft" className="row ml-2">
                <button id="openNav" className="btn btn-outline-secondary text-white pl-3"
                    onClick={() => {
                        document.getElementById('sideNav').classList.toggle('show')
                    }}>☰</button>
                <span className="ml-2 navbar-brand d-flex align-items-center">
                    <strong>Hashboard</strong>
                </span>
            </div>

        </React.Fragment>
    );
}
function Topnav_Right() {
    return (
        <React.Fragment>
            <div id="topNavRight" className="row align-items-center">
               
                <button id="userNameBtn" className="mr-2 btn btn-outline-secondary text-white text-white"
                    onClick={() => {
                        console.log('Show user content')
                    }}>User name</button>
                <IconButton aria-label="Profile menu"
                    className='btn text-light'
                    onClick={() => {
                        console.log('username btn')
                    }}>
                    <AccountBox />
                </IconButton>
                <IconButton aria-label="Profile menu"
                    className='btn text-light'
                    onClick={() => {
                        console.log('sign out btn')
                    }}>
                    <TimeToLeave />
                </IconButton>
            </div>
        </React.Fragment>
    );
}

export default { TopLeft: Topnav_Left, TopRight: Topnav_Right };