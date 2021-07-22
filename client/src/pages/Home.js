import React from "react";
import HomeCard from "../components/HomeCard"




function Home() {

  const homeCardInfo = [
    {
      key: 1,
      imgSrc:"/",
      alt:"pic",
      title:"afk",
      description:"hjl ksd fhuoi wef"
    },
  ]

  return (
    <div className="home-container">
        
        
      <div className="home-title-text">
          <p>
          With our production facility and design office located in Milford Michigan we’ve been proudly serving the greater Detroit area for years.
          <br /><br />
          However with our shipping connections and distribution skills we are able to provide a superior product and service to both people and companies across the country
          <br /><br />
          No matter the state or the Time Zone that you call home we will gladly provide superior quality care and apparel to you
          </p>
      </div>
    
      
        {homeCardInfo.map(card => (
          <HomeCard 
            key={card.key}
            title={card.title}
            imgSrc={card.imgSrc}
            alt={card.alt}
            description={card.description}
          /> 
        ))}
     

    </div>
  
  );
}

export default Home;