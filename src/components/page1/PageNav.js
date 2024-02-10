import React from 'react';
import './PageNav.css'
import PersonIcon from '@mui/icons-material/Person';

function PageNav() {
    return (
        <div className="navbar">
            <p>Real-Time Meet</p>
            <div style={{display:'flex',marginLeft:'auto',marginRight:'2%'}}>
                <span>Live</span>
                &nbsp;&nbsp;
                <PersonIcon style={{margin:'auto',fontSize:'32px'}} />
            </div>
        </div>
    )
}
export default PageNav;
