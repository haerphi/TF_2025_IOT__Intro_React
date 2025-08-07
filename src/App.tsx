import './App.css'
import Header from './components/header/header'
import SensorCurrent from './features/sensor/sensor-current'
import SensorHistory from './features/sensor/sensor-history'

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Demo React - IOT</h1>

        {/* <Counter /> */}

        {/* <SensorDisplay 
          name='Test'
          value='42 Pommes'
          date={new Date()} /> */}

        <SensorCurrent />

        <SensorHistory />

      </main>
    </>
  )
}

export default App
