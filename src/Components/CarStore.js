import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ItemsActions } from './../Store/items-Slice';

import Assets from './../Assets/AssetsDispatcher';

export default function CarStore({counter = 2}){
    const ItemsCard = useSelector(state=>state.items)
    const dispatch = useDispatch();

    const [menuActive, setMenuActive] = useState(false);
    const [cleanPanel, setCleanPanel] = useState(false);

    const countNumberProducts = ()=>{
        let num = 0
        ItemsCard.items.forEach(element => {
            num += element.amount;
        });
        return num;
    }

    const handleShowMenu = ()=>{
        setMenuActive(!menuActive);
    }
    
    const handleCloseMenuCar =()=>{
        setMenuActive(false);
    }

    const handleDeleteItem =(item)=>{
        dispatch(ItemsActions.deleteItem(item));
    }

    const handleIncrementAmount = (item)=>{
        dispatch(ItemsActions.addItem(item));
    }

    const handleDecrementAmount = (item)=>{
        dispatch(ItemsActions.decrementItem(item));
    }

    const handleConfirmationClean = ()=>{
        setCleanPanel(true);
    }
    
    const closeCleanPanel = (e)=>{
        if (["back","cancel"].includes(e.target.id)){
            setCleanPanel(false);
        }
    }

    const handleCleanCar = ()=>{
        dispatch(ItemsActions.cleanItems());
        setCleanPanel(false);
    }

    const calculatePaid = ()=>{
        let amount = 0;

        ItemsCard.items.forEach((item)=>{
            amount += item.amount * item.price;
        })
        return amount;
    }

    if(ItemsCard.items.length <=0){
        return null;
    }

    return(
        <div className='volar-container'>
            
            {cleanPanel &&
                <div onClick={closeCleanPanel} id="back" className='clear-panel'>
                    <div className='clear-div'>
                        <p>Would you like to delete all the items?</p>
                        <div className='buttons panel-right'>
                            <button onClick={handleCleanCar} className='button-success'>Accept</button>
                            <button onClick={closeCleanPanel} id="cancel" className='button-failure'>Cancel</button>
                        </div>
                    </div>
                </div>
            }

            <div onClick={handleShowMenu} className="car-store">
                <span className="icon">🛒</span>
                <span className="counter">{countNumberProducts()}</span>
            </div>

            {menuActive &&
                <div className="panel-car-items">

                    <button onClick={handleCloseMenuCar} className='close-button'>X</button>
                    <h1 className='car-title'>
                        <button onClick={handleConfirmationClean} className="clear-car-button">
                            Clear All
                        </button>
                        Car items
                    </h1>

                    <div className='car-items'>
                        <ul>
                            {
                            ItemsCard.items.map((item, index)=>{
                                return <li className='car-item' key={index}>
                                            <div className='car-item-info'>
                                                <h4>{item.name}</h4>
                                                <div className='buttons'>
                                                    <button onClick={()=>handleIncrementAmount(item)} className='button-items button-success'>+</button>
                                                    <p>{item.amount}</p>
                                                    <button onClick={()=>handleDecrementAmount(item)} className='button-items button-failure'>-</button>
                                                    <p>${item.price}</p>
                                                </div>
                                            </div>
                                            <div className='car-item-controls'>
                                                <button onClick={()=>handleDeleteItem(item)}>
                                                    <img src={Assets["delete-icon"]} alt="delete item"/>
                                                </button>
                                            </div>
                                    </li>
                            })
                            }
                        </ul>
                    </div>
                    <div>
                        <p>
                            Total: ${calculatePaid()}
                        </p>
                    </div>
                    <div className='panel-controls'>
                        <button className='sendAndPay-button'>Pay and Send</button>
                    </div>
                </div>
            }
        </div>
    )
}