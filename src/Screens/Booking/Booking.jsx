import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Booking.scss';
import MapContainer from './MapContainer'; // Import the MapContainer component

const Booking = () => {
  // Define your data for different train journeys
  const trainData = [
    {
      trainName: 'GALU KUMARI',
      trainType: 'Colombo Commuter',
      trainNo: '8057',
      classes: '1st, 2nd, 3rd',
      schedule: [
        { name: 'Colombo Fort', arrival: '06:30 am', departure: '06:45 am' },
        { name: 'Mount Lavinia', arrival: '07:15 am', departure: '07:17 am' },
        { name: 'Ambalangoda', arrival: '09:15 am', departure: '09:17 am' },
        { name: 'Beliatta', arrival: '11:15 am', departure: '' },
      ],
    },
    {
      trainName: 'Rajarata Rajina',
      trainType: 'Express Train',
      trainNo: '8057',
      classes: '1st, 2nd, 3rd',
      schedule: [
        { name: 'Colombo Fort', arrival: '06:30 am', departure: '06:45 am' },
        { name: 'Mount Lavinia', arrival: '07:15 am', departure: '07:17 am' },
        { name: 'Ambalangoda', arrival: '09:15 am', departure: '09:17 am' },
        { name: 'Beliatta', arrival: '11:15 am', departure: '' },
      ],
    },
    {
      trainName: 'GALU KUMARI',
      trainType: 'Colombo Commuter',
      trainNo: '8057',
      classes: '1st, 2nd, 3rd',
      schedule: [
        { name: 'Colombo Fort', arrival: '06:30 am', departure: '06:45 am' },
        { name: 'Mount Lavinia', arrival: '07:15 am', departure: '07:17 am' },
        { name: 'Ambalangoda', arrival: '09:15 am', departure: '09:17 am' },
        { name: 'Beliatta', arrival: '11:15 am', departure: '' },
      ],
    },
    // Add more train journeys here
  ];

  return (
    <main className="booking">
    
   
      <div className="booking-background">
      <div className='glass-wrapper'>
      <div className='glass'>
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <input type="date" placeholder="Date" />
            
            <Button variant="primary" className='button-extend'>Search</Button>
         </div>
         </div>
        {trainData.map((data, index) => (
          <MapContainer key={index} {...data} />
        ))}
       <div className='intensity-container'><div className='crowd-intensity'><div className='low-crowd'><span className='low-arrow'></span>Low Crowd</div> <div className='high-crowd'><span className='high-arrow'></span>High Crowd</div></div> 
        
      </div>
      </div>
      
    </main>
  );
};

export default Booking;
