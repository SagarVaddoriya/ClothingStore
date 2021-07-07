import React from 'react';
import MenuItem from '../Menu-item/menu-item.component';
import '../Directory/directory.style.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state ={
            sections:[
                {
                    title:'Hats',
                    imageURL:'http://i.ibb.co/cvpntL1/hats.png',
                    id:1,
                    linkurl: 'hats'
                },
                {
                    title:'Jackets',
                    imageURL:'http://i.ibb.co/px2tCc3/jackets.png',
                    id:2,
                    linkurl: 'hats'
                },
                {
                    title:'Sneakers',
                    imageURL:'http://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3,
                    linkurl: 'hats'
                },
                {
                    title:'Womens',
                    imageURL:'http://i.ibb.co/GCCdy8t/womens.png',
                    id:4,
                    linkurl: 'hats'
                },
                {
                    title:'Hats',
                    imageURL:'http://i.ibb.co/R70vBrQ/men.png',
                    id:1,
                    linkurl: 'hats'
                },

            ]
        }
    }

    render(){
        return(
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({id, ...othersSectionProps})=>(
                    <MenuItem key= {id} {...othersSectionProps}></MenuItem>
                    ))
                }
            </div>
        )
    }


}

export default Directory;