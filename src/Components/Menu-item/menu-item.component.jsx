import React from 'react';
import '../Menu-item/menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageURL, history, linkurl,match}) => (
    <div style = {{
        backgroundImage : `url(${imageURL})`
    }}
    className='menu-item' onClick ={()=>history.push(`${match.url}${linkurl}`)}>
                <div className='content'>
                <h1 className='tutle'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
    </div>
)

export default withRouter(MenuItem);