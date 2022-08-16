import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home';
import Add from './components/add';
import Detail from './components/detail';
import Edit from './components/edit'

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/add' element={<Add/>}/>
                <Route path='/detail/:productId' element={<Detail/>}/>
                <Route path='/edit/:productId' element={<Edit/>}/>
            </Routes>
        </div>
    );
}

export default App;
