import './App.css'
import React, { useState } from 'react'
import PokeInsert from './components/PokeInsert'
import PokeList from './components/PokeList'
import PokeTemplate from './components/PokeTemplate'

function App() {
   const [pokes, setPokes] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' },
      { id: 2, name: '꼬부기', img: '/images/꼬부기.png' },
      { id: 3, name: '구구', img: '/images/구구.png' },
      { id: 4, name: '이상해씨', img: '/images/이상해씨.png' },
      { id: 5, name: '뚜벅쵸', img: '/images/뚜벅쵸.png' },
      { id: 6, name: '삐삐', img: '/images/삐삐.png' },
   ])
   return (
      <>
         <PokeTemplate>
            <PokeInsert></PokeInsert>
            <PokeList pokes={pokes}></PokeList>
         </PokeTemplate>
      </>
   )
}

export default App
