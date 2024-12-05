import Rates from './Rates';
import '../styles/App.css'

function App() {
  return (
    <>
    <Rates
    price = {300}
    speed = {10} />
    <Rates
    price = {450}
    speed = {50} />
    <Rates 
    price = {550}
    speed = {100} />
    <Rates 
    price = {1000}
    speed = {200} />
    </>
  )
}

export default App;
