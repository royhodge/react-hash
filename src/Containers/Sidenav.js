// 
// 
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountBox from '@material-ui/icons/AccountBox';
import TimeToLeave from '@material-ui/icons/TimeToLeave';
import Close from '@material-ui/icons/Close';

import IPFSInfoModal from '../Components/IPFSInfoModal'
import AddContentModal from '../Components/AddContentModal'
// import dom from '../dom/dom'

function SideNav(params) {
    // let { parent, data } = params;

    return (
        <React.Fragment>
            <div className="w3-sidebar bg-dark w3-bar-block w3-card w3-animate-left collapse" id="sideNav"
                style={{
                    width: 250,
                    height: '100vh'
                }}>
                <div className="d-flex align-items-center justify-content-between pr-2 pl-2 mb-2">
                    <div id="sideNavTopLeft" className="d-flex align-items-center justify-content-between pt-2 mt-1">
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
                    <div id="sideNavTopRight" className="d-flex align-items-center justify-content-between pt-2 mt-1">
                        <IconButton aria-label="Profile menu"
                            className='btn text-light'
                            onClick={() => {
                                document.getElementById('sideNav').classList.toggle('show')
                            }}>
                            <Close />
                        </IconButton>
                    </div>
                </div>
                <div id="sideNavBody" className='d-flex flex-column align-items-center'>
                    <IPFSInfoModal />
                    <AddContentModal />
                </div>
            </div>
        </React.Fragment>
    );
}

export default SideNav;