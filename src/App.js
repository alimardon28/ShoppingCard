import './App.css';
import { Route , Routes } from 'react-router-dom';

// PAGES IMPORT
import Card from './Pages/Card/Card';
import Contacts from './Pages/Contacts/Contacts';
import Ordered from './Pages/Ordered/Ordered';
import Ordering from './Pages/Ordering/Ordering';
import Products from './Pages/Products/Products';
import Selected from './Pages/Selected/Selected';
import ServiceRequirements from './Pages/ServiceRequirements/ServiceRequirements';
import SingleProducts from './Pages/SingleProducts/SingleProducts';



function App() {
  return (
    <div className="App">
         <Routes>
            <Route path='/' element={ <Products /> } />
            <Route element={ <Card/> } />
            <Route element={ <Contacts/> } />
            <Route element={ <Ordered /> } />
            <Route element={ <Ordering /> } />
            <Route element={ <Selected /> } />
            <Route element={ <ServiceRequirements /> } />
            <Route element={ <SingleProducts /> } />
         </Routes>
    </div>
  );
}

export default App;
