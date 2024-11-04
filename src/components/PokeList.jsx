import './css/PokeList.css'
import PokeListItem from './PokeListItem'

function PokeList({ pokes }) {
   return (
      <>
         <div className="pokeList">
            <PokeListItem pokes={pokes} />
         </div>
      </>
   )
}

export default PokeList
