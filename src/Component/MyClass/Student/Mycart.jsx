import React from 'react';
import useCart from '../../hooks/useCart';
import ReactStars from 'react-stars';
import { Link, NavLink } from 'react-router-dom';
import CartCard from './CartCard';

const Mycart = () => {

    const [cart,] = useCart();
    
    return (
        <div>
            <div className="divider"></div> 
            <div className="divider text-3xl">All courses of your Cart</div> 
            <div className="divider"></div>
<div className=' grid grid-cols-2 gap-20 py-5'>
    {
        cart.map((course)=>(<CartCard key={course._id} state={course}/>))
    }
</div>

        </div>
    );
};

export default Mycart;