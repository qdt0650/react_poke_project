import './css/PokeList.css'
import PokeListItem from './PokeListItem'

function PokeList({ pokes, onRemove }) {
   return (
      <>
         <div className="pokeList">
            <PokeListItem pokes={pokes} onRemove={onRemove} />
         </div>
      </>
   )
}

export default PokeList
