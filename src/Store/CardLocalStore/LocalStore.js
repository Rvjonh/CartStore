let db, request, ver = 1;

request = indexedDB.open("Products", ver);

request.onerror = () =>{
}

request.onsuccess = (e) =>{
    db = e.target.result;
}

request.onupgradeneeded = (e) =>{
    const  db = e.target.result;

    if (db.objectStoreNames.contains("items")) {
        db.deleteObjectStore("items");
    }

    db.createObjectStore("items", { keyPath: "id" });
}


export function addElement(item){
    if (item.id === undefined){
        console.log("Id Necesario para guardar ...")
        return;
    }

    let transaction = db.transaction("items", "readwrite");
    let store = transaction.objectStore("items");
    let r = store.put({id:item.id, ...item});

    r.onerror = ()=>{
    }

    r.onsuccess = ()=>{
    }
    
}

export function deleteElement(item){
    if (item.id === undefined){
        console.log("Id Necesario para guardar ...")
        return;
    }

    let transaction = db.transaction("items", "readwrite");
    let store = transaction.objectStore("items");
    let r = store.delete(item.id);

    r.onerror = ()=>{
    }
    r.onsuccess = ()=>{
    }
}

export function cleanDataBase(){
    let transaction = db.transaction("items", "readwrite");
    let store = transaction.objectStore("items");
    store.clear();
}

export function getAllElements(){
    let transaction = db.transaction("items", "readwrite");
    let store = transaction.objectStore("items");
    let r = store.getAll()
    
    return r;
}

