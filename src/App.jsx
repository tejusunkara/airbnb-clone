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
      <section className='flex flex-nowrap gap-5 overflow-x-auto p-5'>
        {cards.map((card) => {
          return <Card
            key={card.id}
            img={card.img}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}
          />
        })}
      </section>
    </div>
  )
}

export default App
