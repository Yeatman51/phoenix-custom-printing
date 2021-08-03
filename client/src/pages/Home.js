import React from "react";
import HomeCard from "../components/HomeCard"




function Home() {

  const homeCardInfo = [
    {
      key: 1,
      imgSrc:"/",
      alt:"pic",
      title:"GRAPHIC DESIGN",
      description:"Phoenix Custom Printing has a team of designers on board who have spent time in the field and enjoy wowing our customers. Our designers will work with you until you are satisfied with any artwork and ready to print on all garments."
    },
    {
      key: 2,
      imgSrc:"/",
      alt:"pic",
      title:"SCREEN PRINTING",
      description:"Screen Printing is the most common method of decorating apparel, it is simple and yet affordable and is usually best suited for large production orders. Screen printing generally uses plastisol inks and works on almost all types of fabrics. These prints can vary from simple one and two colors all the up to full color designs."
    },
    {
      key: 3,
      imgSrc:"/",
      alt:"pic",
      title:"EMBROIDERY",
      description:"Embroidery is another very common decoration method and is one of the oldest. This method is great for displaying your logo on a high end apparel and can be used on polos, jackets, hats and bags."
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