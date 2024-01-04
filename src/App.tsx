import './App.css'
import {Navbar ,Container , Nav} from "react-bootstrap"
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { Route ,BrowserRouter as Router, Link, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <div className='d-flex flex-column h-full'>
        <header>
          <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
            <Navbar.Brand href='/'>Alimama</Navbar.Brand>
            </Container>
              <Nav className='mr-auto'>
                <Link  to ='/' className='nav-link'>cart</Link>
                <Link to ='/signin' className='nav-link'>sign in</Link>

              </Nav>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
              <Routes>
                <Route path='/' Component={HomePage} />
                <Route path='productPage:/slug' Component={ProductPage}/>
              </Routes>
          </Container>
        </main>
      </div>
      </Router>
    </>
  )
}

export default App
