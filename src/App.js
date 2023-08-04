// import libery
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
// import components
import Layout from './layout/Layout'

// import pages

import HomePage from './pages/HomePage';
import About from './pages/About';
import ShowRoom from './pages/ShowRoom';
import Contact from './pages/Contact';
import  {SignUp}  from './pages/SignUp';
import Signin from './pages/Signin';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route element={<Layout/>}>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/showroom' element={<ShowRoom/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/register' element={<SignUp/>}/>
                <Route exact path='/login' element={<Signin/>}/>
                <Route exact path='/profile/:id' element={<ProfilePage/>}/>


              </Route>
            </Routes>
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
