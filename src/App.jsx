import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import cards from './assets/cardData';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='flex flex-row space-x-4'>
        {cards.map((card) => {
          return <Card
            img={card.img}
            rating={card.rating}
            reviewCount={card.reviewCount}
            country={card.country}
            title={card.title}
            price={card.price}
          />
        })}
      </div>
    </div>
  )
}

export default App
