import React, { useState } from "react";
import CamerasView from "./cameras-view";
import DataService from "../../services/index";

const CamerasContainer = ()=>{
    const Data = new DataService();
    const [cameras, setCameras] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const getData = (canon =0, nikon=0,min,max) => {
        let filter ='';
        if(canon && !nikon) filter = 'brands[]=1&';
        if(!canon && nikon) filter='brands[]=9&';
        setLoading(true);
        Data.getCameras(filter,min,max)
        .then((result)=>result.json())
        .then((data)=>{
            setCameras(data)   
            setLoading(false)
        })
        .catch(()=>setError(true))       
    }
    return <CamerasView getData={getData} cameras={cameras} loading={loading} error={error}/>
}

export default CamerasContainer;