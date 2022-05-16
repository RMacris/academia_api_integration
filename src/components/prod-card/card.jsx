import React from 'react';
import { Button } from '../../components/styled-components/button/button';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

import cardStyles from './card.module.css'

export function ProductCard() {


    return  (
        <div className={cardStyles.card}> 
            {/* <div className={cardStyles.img__container}> 
                <img className={cardStyles.img} src="https://wallpaperaccess.com/full/5274380.jpg" alt="" srcset="" /> 
            </div> */}
            <div className={cardStyles.benefits__container}>
                <h3 className={cardStyles.product_alias}>Premium </h3>
                <h4 className={cardStyles.price}>
                    R$ 24.99
                    <span className={cardStyles.price_conditions}>/m</span>
                </h4>
                <ul className={cardStyles.benefits__list}>
                        { Array(5).fill(1).map((el, index) => (
                            <li className={cardStyles.benefits__item}>
                            <span> Item {index} </span> 
                            <AiOutlineCheck className={cardStyles.available}></AiOutlineCheck>
                            <AiOutlineClose className={cardStyles.unavaible}></AiOutlineClose>
                        </li>
                        ))}
                </ul>
            </div>
            <div className={cardStyles.action__container}>
                <Button className={cardStyles.button__action}> Contratar </Button>
            </div>
            <p className={cardStyles.additional__info}>just taking into consideration some possible text that might be comming in here, althought i don't know what might it be 
                <a href=""> just a link</a>
            </p>
        </div>
    )
}