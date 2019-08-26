import React from 'react';

const ItemsForm = (props) => {
    if (props.addToButtonClicked === true) {
        return (
            <div className="SignUp">
                <form id='infos' action=''>
                    Item Name:<input type='text' onChange={props.onChangeAddItem} className='item_name' name='item_name' /><br/>
                    Expiration Date:<input type='text' onChange={props.onChangeAddItem} className='expiration' name='expiration' />
                </form>
                <div className='pantryButtons'>
                    <button className='Submit' onClick={() => {props.renderItemsForm(); props.onAddToPantry()}}>Add</button>
                    <button className='Cancel' onClick={props.renderItemsForm}>Cancel</button>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}


export default ItemsForm;