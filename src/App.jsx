import Header from './components/Header/Header'
import CardList from './components/CardList/CardList'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main className="app" id="collection">
        <CardList />
      </main>
    </>
  )
}

export default App