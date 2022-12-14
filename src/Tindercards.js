import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from './firebase';
import './TinderCards.css'

function TinderCards(){
    const [people, setPeople] = useState([]);
    
    //Piece of code runs based on the condition
    useEffect(() => {
        //this is where code runs..

        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
           setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            //this is cleanup
            unsubscribe();
        }
        //this code will run, once when the component loads, and never run again

    }, []);


    //Bad
    //const people = [];
    //people.push('sonny','kiddu')

    //setPeople(['kiddu', 'JB', 'hillary'])

    return(
        <div>
            <h1>Tinder cards</h1>
            <div className="tinderCards_cardContainer">
            {people.map(person => (
                <TinderCard className="swipe" 
                key={person.name} 
                preventSwipe={['up','down']}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }} 
                    className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
    );
}

export default TinderCards