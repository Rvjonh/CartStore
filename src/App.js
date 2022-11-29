import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import global_store from './Store/Store';
import { ItemsActions } from './Store/items-Slice';

import Layout from './Layout/Layout.js';
import Store from './Routes/Store.js';

import { getAllElements } from './Store/CardLocalStore/LocalStore';

export default function App(){

  return(
    <Storage />
  )
}

function Storage(){
  return(
    <Provider store={ global_store }>
      <Routing />
    </Provider>
  )
}

function Routing(){
  const dispatch = useDispatch();

  useEffect(()=>{
    function loadLocalDB(){
      let res = getAllElements();
      res.onsuccess = (e)=>{
        dispatch(ItemsActions.setInitialState({items : e.target.result, state : "loaded"}))
      }
    }
    window.addEventListener("load", loadLocalDB);

    return ()=>{
      window.removeEventListener("load", loadLocalDB);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Store />} />
        
          <Route path="*" element={<h1>No Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}