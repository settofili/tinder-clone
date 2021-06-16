import React from 'react';
import TinderCard from "react-tinder-card";
import { useState } from 'react';
import './TinderCards.css';

function TinderCards () {
    const [people, setPeople] = useState([
        {
            name: 'Marriage Counselling',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg'
        },
        {
             name: 'Hormonal Replacement Therapy',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        }
    ]);

    // BAD
    //  const people = [];
   // people.push('sonny', 'qazi')
   
   // GOOD  (Push to an array in REACT)
   // setPeople([...people, 'sonny', 'qazi'])

    return (
        <div>
            <h1>Tinder cards</h1>
        <div className= "tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        style={{ backgroundImage: `url(${person.url})`}}
                        className="card"
                        >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            )) }
            </div> 
        </div>
    );
}

export default TinderCards
