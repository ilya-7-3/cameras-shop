import React, {useState, useEffect} from "react";
import Spinner from "../spinner/index";
import Error from "../error/index";
import {useNavigate, useParams} from 'react-router-dom';
import CheckBox from "../../ui-elements/checkbox/index";
import CartItems from "../cart-items/index";
import './index.css';

const CamerasView = ({cameras, getData, loading, error}) => {
    const navigate = useNavigate();
    let {Canon, Nikon, min, max} = useParams(),
    filter = 0;
    Canon = !Canon ? 0 : Number(Canon);
    Nikon = !Nikon ? 0 : Number(Nikon);
    min = !min ? 0 : Number(min);
    max = !max ? 499000 : Number(max);
    const [price, setPrice] = useState({
        min,
        max
    })

    useEffect(()=>{
        getData(Canon,Nikon,min,max);
    },[]);

    const onChecked = (e) => {
        filter = e.target.checked ? Number(e.target.getAttribute("data-filter")) : 0;
        if(e.target.name === 'Canon'){
            navigate(`/${filter}/${Nikon}/${min}/${max}`);
            getData(filter,Nikon,price.min,price.max);  
        }
        if(e.target.name === 'Nikon'){
            navigate(`/${Canon}/${filter}/${min}/${max}`);  
            getData(Canon,filter,price.min,price.max);
        }
    }
    const onBlur = () => {
        navigate(`/${Canon}/${Nikon}/${price.min}/${price.max}`)
        getData(Canon,Nikon,price.min,price.max);
    }
    const onChange = (e) => {
        if(!isNaN(e.target.value) && e.target.value.indexOf(' ')===-1){
            setPrice((prevState)=>{
                return{
                    min:e.target.className === 'min-price' ? e.target.value : prevState.min,
                    max:e.target.className === 'max-price' ? e.target.value : prevState.max,
                }
            }) 
        }
    }
        if (error) return <Error/>
        return(
            <div className="cameras">
                <div className="first-section">
                    <span className="quantity">Товаров {loading || !Object.values(cameras).length ? 0 : cameras.products.length}</span>
                    <span className="title">Камеры</span>
                    <span className="price">Цена, ₽</span>
                    <div className="inputs">
                        <input type="text" value={price.min} onChange={(e)=>onChange(e)} 
                        onBlur={(e)=>onBlur(e)} className="min-price" disabled={loading}/>
                        <input type="text" value={price.max} onChange={(e)=>onChange(e)} 
                        onBlur={(e)=>onBlur(e)} className="max-price" disabled={loading}/>
                    </div>
                    <span className="brands">Бренд</span>
                    <CheckBox name='Canon' dataAttribute={1} checked={Canon ? true : false }
                     onChange={(e)=>onChecked(e)} disabled={loading}/>
                    <CheckBox name='Nikon' dataAttribute={9} checked={Nikon ? true : false } 
                     onChange={(e)=>onChecked(e)} disabled={loading}/>
                </div>
                <div className="second-section">
                    {
                        loading || !Object.values(cameras).length ? <Spinner/> : <CartItems products={cameras.products}/> 
                    }
                    
                </div>
            </div>
        )
    
}

export default CamerasView;