import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className="cards">
            <h1>Take a look at this</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore la cascada escondida en lo profundo de la selva amazónica'
                            label='Adventura'
                            path='/services'
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        text='Viaja por las islas de Bali en un crucero privado'
                        label='Lujo'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img-3.jpg'
                        text='Zarpe en el Océano Atlántico visitando Uncharted Waters'
                        label='Misterio'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-4.jpg'
                        text='Experimenta el fútbol en la cima de las montañas Himilayan'
                        label='Adventura'
                        path='/products'
                        />
                        <CardItem
                        src='images/img-8.jpg'
                        text='Paseo por el desierto del Sahara en un tour guiado en camello'
                        label='Adrenalina'
                        path='/sign-up'
                        />
                    </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
