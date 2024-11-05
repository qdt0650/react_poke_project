import { useState } from 'react'
import './css/PokeListItem.css'

function PokeListItem({ pokes, onRemove }) {
   const { id, name, img } = pokes
   const [active, setActive] = useState('')

   const pokeDoubleClick = (id) => {
      setActive(id)
   }
   return (
      <>
         <div className="pokeListItem">
            <ul>
               {pokes.map((poke) => {
                  return (
                     <li
                        key={poke.id}
                        onDoubleClick={() => {
                           pokeDoubleClick(poke.id)
                        }}
                        className={active === poke.id ? 'active' : ''}
                     >
                        <div className="poke_item">
                           <img src={poke.img} alt={poke.name} title="더블클릭 해보세요" />
                           <span>{poke.name}</span>
                        </div>
                        <div className="poke_btn">
                           <button type="button" className="delete" onClick={() => onRemove(poke.id)}>
                              삭제
                           </button>
                           <button type="button" className="evolution">
                              진화
                           </button>
                        </div>
                     </li>
                  )
               })}
            </ul>
         </div>
      </>
   )
}

{
   /* <div className="pokeListItem">
            <ul>
               <li key={id}>
                  <div>
                     <img src={img} alt={name} width="150" />
                     <p>{name}</p>
                  </div>
               </li>
            </ul>
            <div className="poke_btn">
               <button type="button" className="delete">
                  삭제
               </button>
               <button type="button" className="evolution">
                  진화
               </button>
            </div>
         </div> /> */
}

export default PokeListItem
