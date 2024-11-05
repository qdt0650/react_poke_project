import './App.css'
import React, { useState, useRef, useCallback } from 'react'
import PokeInsert from './components/PokeInsert'
import PokeList from './components/PokeList'
import PokeTemplate from './components/PokeTemplate'

function App() {
   const [pokes, setPokes] = useState([
      { id: 1, name: '발챙이', img: '/images/발챙이.png' },
      { id: 2, name: '식스테일', img: '/images/식스테일.png' },
      { id: 3, name: '구구', img: '/images/구구.png' },
      { id: 4, name: '이상해씨', img: '/images/이상해씨.png' },
      { id: 5, name: '뚜벅쵸', img: '/images/뚜벅쵸.png' },
      { id: 6, name: '삐삐', img: '/images/삐삐.png' },
   ])

   // 포켓몬 등록
   const nextId = useRef(7)
   const onInsert = useCallback(
      (name) => {
         const poke = {
            id: nextId.current,
            name,
            img: '/images/' + name + '.png',
         }

         setPokes(pokes.concat(poke))
         nextId.current += 1
      },
      [pokes]
   )

   // 포켓몬 삭제
   const onRemove = useCallback(
      (id) => {
         const removedPoke = pokes.filter((poke) => poke.id !== id)
         setPokes(removedPoke)
      },
      [pokes]
   )

   return (
      <>
         <PokeTemplate>
            <PokeInsert onInsert={onInsert}></PokeInsert>
            <PokeList pokes={pokes} onRemove={onRemove}></PokeList>
         </PokeTemplate>
      </>
   )
}

export default App
