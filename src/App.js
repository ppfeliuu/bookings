import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookingList from './components/BookingList';

function App() {    

  const bookingList = [
        {
            key:'1',
            fecha : '01/10/2019',
            referencia: 'R-0001',
            cliente: 'Pedro Feliu',
            adultos: 2,                     
            estado: 'No pagado'
        },
        {
            key: '2',
            fecha : '15/10/2019',
            referencia: 'R-0002',
            cliente: 'Juan Perez',
            adultos: 2,
            
            estado: 'Pagado' 
        },
        {
            key: '3',
            fecha : '20/10/2019',
            referencia: 'R-0003',
            cliente: 'Sofia Carmona',
            adultos: 2,            
            estado: 'No pagado' 
        }        
      ];
  
  
  return (
    <div className="App">   
      <Navbar />            
      <BookingList data={bookingList}/>      
    </div>
  );
}

export default App;
