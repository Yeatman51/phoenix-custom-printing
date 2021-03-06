import React from 'react'

function ScreenPrinting() {
    return (
        <div className="screenprinting-container">
            <div className="screen-primary-text-container">
                <p className="screen-primary-text">
                    Screen printing is the most common way to decorate custom apparel.
                    <br />
                    It is perfect for larger orders 
                    <br />
                    If you want your design on 25 or 500 shirts this is going to be the best option for you
                </p>
            </div>

            <div className="screen-img-container">
                <img 
                src="" 
                alt="screen printing" 
                className="screen-img"
                />
                <img 
                src="" 
                alt="screen printing" 
                className="screen-img"
                />
                <img 
                src="" 
                alt="screen printing" 
                className="screen-img"
                />
            </div>

            <div className="screen-secondary-text-container">
                <p className="screen-secondary-text"> 
                For best results we commonly use what is referred to in the industry as a 
                spot color process of printing. This means that each color is separated onto an 
                individual screen before printing. Through this process it is very common for 
                screen printing jobs to have one through four colors in a design. 
            <br /><br />
                There is an additional charge for every screen that is set up 
                (Color that is used in the design) this is why it is very common to see 2 or 3 
                colored logos for screen printing apparel.
                </p>
            </div>

            <div className="screen-colorchart-container">
                <img 
                src="/images/phoenix-screenprinting-colorchart.png" 
                alt="screen printing color chart" 
                className="screen-colorchart-img"
                />
            </div>
        </div>
    )
}

export default ScreenPrinting
