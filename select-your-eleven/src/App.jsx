
import { Suspense } from 'react'
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}
function App() {
 const playerPromise = fetchPlayers();

  return (
    <>

<Navbar></Navbar>
<Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
</Suspense>
{/* <SelectedPlayers></SelectedPlayers> */}

    </>
  )
}

export default App
