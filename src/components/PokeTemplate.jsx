import './css/PokeTemplate.css'
import { MdCatchingPokemon } from 'react-icons/md'

function PokeTemplate({ children }) {
   return (
      <>
         <div className="pokeTemplate">
            <div className="poke_title">
               <img src="./images/poke_ball.png" alt="포켓볼이미지" />
               <span>포켓몬 도감</span>
            </div>
            <div className="content">{children}</div>
         </div>
      </>
   )
}

export default PokeTemplate
