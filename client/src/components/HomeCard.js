import React from 'react'

function HomeCard(props) {
 
    return (

        <div className="home-card-container">
            <img src={process.env.PUBLIC_URL + props.imgSrc} alt={props.alt} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            
        </div>
    )
}

export default HomeCard;
