import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import './calender.css'

const quotes = [
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
  "An investment in knowledge pays the best interest. - Benjamin Franklin",
  "The roots of education are bitter, but the fruit is sweet. - Aristotle",
  "Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats",
];

const featureCards = [
  "Track your attendance easily and accurately.",
  "Access your timetable anytime, anywhere.",
  "Get notifications for upcoming classes.",
  "View detailed reports of your attendance history.",
  "Stay organized with our intuitive interface.",
];

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    
   

    return () => {
      clearInterval(quoteInterval);
      
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
     
      <h1 className="text-5xl font-bold mb-8 text-black">Welcome to MarkMe!</h1>

      
      <div className="flex w-full space-x-4">
        
        <div className="w-1/3 flex flex-col items-start">
          <div className="bg-white shadow-lg rounded-lg p-4 h-full flex-grow flex">
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="rounded-lg"
              style={{ height: '200%' }} 
            />
          </div>
         
        </div>

       
        <div className="w-1/3 flex flex-col items-center">
          <div className="bg-white shadow-xl rounded-lg p-4 w-full flex-grow ">
            <p className="text-xl italic text-gray-800 text-center">{quotes[currentQuoteIndex]}</p>
          </div>
          
          <img
            src="https://ucarecdn.com/f9cd1272-121d-4f9e-9d83-97bdafaab3f9/-/preview/203x214/"
            alt="Attendance and Timetable"
            className="mt-4 rounded-lg shadow-xl w-full"
          />
        </div>

        
        <div className="w-1/3 flex flex-col space-y-4">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="h-24 bg-gradient-to-r from-gray-600 to-black text-white rounded-lg p-4 shadow-lg transform transition-transform duration-500 hover:scale-105"
            >
              <p className="text-center">{card}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
