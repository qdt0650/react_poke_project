import './App.css'
import PokeInsert from './components/PokeInsert'
import PokeList from './components/PokeList'
import PokeTemplate from './components/PokeTemplate'

function App() {
   return (
      <>
         <PokeTemplate>
            <PokeInsert></PokeInsert>
            <PokeList></PokeList>
         </PokeTemplate>
      </>
   )
}

export default App
