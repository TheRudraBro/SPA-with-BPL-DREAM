import React from 'react';
import navImg from '../../assets/logo.png'
import coinImg from '../../assets/currency.png'

const Navbar = () => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="text-xl"> <img className='w-[60px] h-[60px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex items-center gap-2 pr-4">
  <span>6000000000</span>
  <span>Coin</span>
    <img className='h-[20px] w-[20px]' src={coinImg} alt="" />
  </div>
</div>
    );
};

export default Navbar;