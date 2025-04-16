import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from './components/footer/footer';
import HomePage from './Pages/HomePage';
function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
