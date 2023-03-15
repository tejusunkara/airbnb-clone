import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import cards from './assets/cardData';

function App() {

  const cardItem = cards.map((card) => {
    return <Card
      key={card.id}
      {...card}
    // card = {card}
    />
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='flex flex-nowrap gap-5 overflow-x-auto p-5'>
        {cardItem}
      </section>
    </div>
  )
}

export default App
