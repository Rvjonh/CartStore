import { useDispatch } from 'react-redux';
import { ItemsActions } from './../Store/items-Slice';

import { products } from './products.js';

export default function Store(){
    const dispatch = useDispatch();

    const handleAddCar =(item)=>{
        dispatch(ItemsActions.addItem(item));
    }

    return(
        <main className="container margin-bottom-5">
            <h1 className='title'>STORE / TIENDA</h1>

            <div className='panel-productos'>
                {
                    products.map((item, index)=>{
                        return(
                            <article className='product-item' key={index}>
                                <div className='product-img'>
                                    <img src={item.img} alt="product" />
                                </div>
                                <div className='product-info'>
                                    <h3 className='product-name'>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                                <div className='product-buttons'>
                                    <button onClick={()=>handleAddCar(item)} className='button-items button-success'>🛒</button>
                                </div>
                            </article>
                            )
                    })
                }
            </div>
        </main>
    )
}