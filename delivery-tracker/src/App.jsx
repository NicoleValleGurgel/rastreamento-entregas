import DeliveryMap from './components/DeliveryMap'
import Header from './components/Header'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <DeliveryMap />
      </div>
    </div>
  )
}

export default App

