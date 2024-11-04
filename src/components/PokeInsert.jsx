import './css/PokeInsert.css'
import { IoSearch } from 'react-icons/io5'

function PokeInsert() {
   return (
      <>
         <form className="PokeInsert">
            <input type="text" placeholder="포켓몬 이름을 입력해주세요" />
            <button>
               <IoSearch />
            </button>
         </form>
      </>
   )
}

export default PokeInsert
