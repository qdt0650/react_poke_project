import { useCallback, useState } from 'react'
import './css/PokeInsert.css'
import { IoIosAddCircleOutline } from 'react-icons/io'

function PokeInsert({ onInsert }) {
   const [input, setInput] = useState('')

   const onChange = (e) => setInput(e.target.value)

   const onSubmit = useCallback(
      (e) => {
         e.preventDefault()
         if (input === '') {
            alert('포켓몬 이름을 입력해주세요')
            return
         }
         onInsert(input) // props로 전달받은 onInsert 함수 실행
         setInput('') // value값 초기화
      },
      [input, onInsert]
   )

   return (
      <>
         <form className="pokeInsert" onSubmit={onSubmit}>
            <input type="text" value={input} onChange={onChange} placeholder="포켓몬 이름을 입력해주세요" />
            <button type="button">
               <IoIosAddCircleOutline />
            </button>
         </form>
      </>
   )
}

export default PokeInsert
