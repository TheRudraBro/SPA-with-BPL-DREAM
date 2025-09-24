
import { Suspense, useState } from 'react'
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}
function App() {
  const [toggle, setToggle] = useState( onclick)
 const playerPromise = fetchPlayers();

  return (
    <>

<Navbar></Navbar>
<div className='border-2 border-red-500 max-w-[1200px] mx-auto my-4 flex justify-between items-center p-4'>
<h1 className='text-xl font-bold'>Available players</h1>
<div className='font-semibold'>
  <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle ? 'bg-lime-300' : ''}`}>Available</button>
  <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${!toggle ? 'bg-lime-300' : ''}`}>Selected <span>(0)</span></button>
</div>
</div>

{
  toggle === true?<Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
</Suspense> : <SelectedPlayers></SelectedPlayers>
}





    </>
  )
}

export default App;
