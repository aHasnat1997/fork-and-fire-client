import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <section className='min-h-screen flex flex-col'>
      <NavBar />
      <Outlet />
      <Footer />
    </section>
  )
}

export default App
