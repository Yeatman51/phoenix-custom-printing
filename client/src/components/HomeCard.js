import React from 'react'

function HomeCard(props) {
 
    return (

        <div className="home-card-container">
            <img src={process.env.PUBLIC_URL + props.imgSrc} alt={props.alt} />
            <h1 className="home-card-title">{props.title}</h1>
            <p className="home-card-desc">{props.description}</p>
        </div>
    )
}

export default HomeCard;
