import React from 'react';
import { SHOP_DATA } from './shop.data.js';
import CollectionPreview  from "../../components/preview-collection/CollectionPreview.component";

class ShopPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            Collections : SHOP_DATA
        }
    }

    render(){
        const {Collections} = this.state;
        return(
            <div className="shop-page">
            {
                Collections.map(({id, ...OtherCollectionProps}) => 
                    <CollectionPreview key={id} {...OtherCollectionProps}>
                    {}
                    </CollectionPreview>
                )
            }
             
            </div>        
           
        );

    }

}


export default ShopPage;