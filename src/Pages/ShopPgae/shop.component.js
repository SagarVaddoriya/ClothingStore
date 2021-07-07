import React from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../Components/Preview-Collection/Preview-Collection.component';

class Shoppage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections :SHOP_DATA,
                
        }
    }

    render(){
        const {collections} = this.state;
        return (<div className = 'shop-page'>
                {
                    collections.map(({id,...otherCollectionProps}) =>(
                        <PreviewCollection key = {id} {...otherCollectionProps}></PreviewCollection>
                    ))
                }
        </div>)

    }
}


export default Shoppage;