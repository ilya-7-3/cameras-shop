import React from "react";
import { correctedNumber } from "../../utils/index";
import './index.css';

const CartItems = ({products}) => {
    const items = products.map((el)=>{
        return(
            <div key={el.id} className="cart-item">
                <div className="image">
                    <img src={el.image.desktop.x2} alt="cart img"/>
                    {el.is_new ? <div className="new">НОВИНКА</div> : ''}
                    
                </div>
                <div className="cart-content">
                    <span className="cart-title">{el.title}</span>
                    <div className="cart-price">
                        <span>{correctedNumber(el.price)} ₽</span>
                        <span className="condition">{el.is_second_hand ? '' : 'Новое'}</span>
                    </div>
                <div className="cart-buttons">
                    <button className="basket">В корзину</button>
                    <span className="material-icons">favorite_border</span>
                </div>        
                </div>
            </div>
        )
    })

    return(
        <div className="cart-items">
            {items.length ? items : <span className="carts-empty">Товар по данным критериям не найден</span>}
        </div>
    )
}

export default CartItems;