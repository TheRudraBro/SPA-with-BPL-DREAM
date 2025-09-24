import React, { use } from 'react';
import userImg from '../../assets/user1.png'
import vectorImg from '../../assets/vector.png'

const AvailablePlayers = ({ playerPromise }) => {

    const playerData = use(playerPromise)
    console.log(playerData);
    return (
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-4 my-8">

{
    playerData.map(player =>  <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img
      src={player['player_image']}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className='flex gap-2 items-center mb-2'>
      <img src={userImg} alt="" /><h2 className="card-title ml-2">{player['player_name']}</h2>
  </div>
   <div className='flex justify-between mt-4 mb-4'>
<div className='flex items-center mb-2'>
    <img className='h-[15px] w-[15px]' src={vectorImg} alt="" />
    <span className='ml-2'>{player['player_country']}</span>
</div>
<button className="btn">All-Rounder</button>

   </div>


<div className='flex justify-between font-bold'>
    <span>Rating</span>
    <span>{player['player_rating']}</span>
</div>

<div className='flex justify-between'>
    <span className='font-bold'>Left Hand Bat</span>
    <span>{player['bowling_style']}</span>
</div>







    <div className="card-actions flex justify-between mt-4 items-center">
        <p className='font-semibold'>Price: $1500000</p>
      <button className="btn">Choose Player</button>
    </div>
  </div>
</div>)
}



        </div>
    );
};

export default AvailablePlayers;