import  LoginBox  from './Components/LoginBox/LoginBox'
import Register from './Components/register/register'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginBox />}/>
      <Route path='/Register' element= {<Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
