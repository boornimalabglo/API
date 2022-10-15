import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Userdetails from './components/userdetails';
// import Showdetails from './components/showdetails';
import Student1 from './component1/student1';
// import Student4 from './component1/student4';

// export const Context = createContext()
function App() {
  //let name = "Boorni"
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route exact path='/' element={<Userdetails />} />
          <Route exact path='/:id' element={<Showdetails />} />
        </Routes>
      </Router>  */}
       {/* <Context.Provider value={name}>
        <Context1/>
    </Context.Provider>*/}
      <Student1/> 

    </div>
  );
}

export default App;
