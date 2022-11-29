import { createSlice } from "@reduxjs/toolkit";

import { addElement, deleteElement, cleanDataBase } from "./CardLocalStore/LocalStore";


const initialProductsState = {
    items : [],
    state : "pedding",
}

const Items = createSlice({
    name:"items",
    initialState: initialProductsState,
    reducers :{
        setInitialState (state, action){
            state.items = action.payload.items;
            state.state = action.payload.state;
        },
        addItem(state, action){
            let itemStored = state.items.findIndex((item)=>{
                return item.id === action.payload.id;
            })

            if(itemStored >=0 ){
                let allItems = state.items.map((item)=>{
                    if (item.id === action.payload.id){
                        item.amount +=1;
                        addElement(item)
                    }
                    return item;
                })

                state.items = [ ...allItems]
            }else{
                const newItem = {
                    ...action.payload,
                    amount : 1
                }
                addElement(newItem);
                state.items = [...state.items, newItem]
            }
        },
        
        decrementItem (state, action){
            let allItems = state.items.map((item)=>{
                if (item.id === action.payload.id){
                    item.amount -=1;
                    addElement(item);
                }
                return item;

            }).filter((item)=>{
                return item.amount >=1;
            })

            state.items = [ ...allItems]
        },

        deleteItem(state, action){
            let allItem = state.items.filter((item)=>{
                if(item.id === action.payload.id){
                    deleteElement(item);
                }

                return item.id !== action.payload.id;
            })
            state.items = [...allItem];
        },

        cleanItems(state){
            state.items = [];
            cleanDataBase();
        }
    }
})

const ItemsActions = Items.actions;
const ItemsReducer = Items.reducer;

export { ItemsActions , ItemsReducer}