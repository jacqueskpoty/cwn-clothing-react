import React from 'react';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview.Component';
import SHOP_DATA from './Shop.Data';

class Shop extends React.Component{

    constructor(props){

        super(props);

        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'> 
                {
                    collections.map(({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Shop