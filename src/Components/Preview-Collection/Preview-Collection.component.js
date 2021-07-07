import React from 'react';
import './Preview-Collection.style.scss';
import Collectionitem from '../Collection-Item/Collection-Item.component';


const PreviewCollection = ({title,items}) =>(

    <div className = 'collection-preview'>
        <h1 className = 'title'>
            {title.toUpperCase()}
        </h1>
        <div className = 'preview'>
            {items.filter((item,idx)=> idx <4).map(({id, ...otherItemProps}) =>(
                <Collectionitem key = {id}{...otherItemProps}></Collectionitem>
            ))}
        </div>
    </div>

);

export default PreviewCollection;