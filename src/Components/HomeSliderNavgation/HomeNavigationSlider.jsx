import React from 'react'

function HomeNavigationSlider() {
    const SliderContent = ["Mexican grilled Corn Recipe" , "Roast Chicken With Lemon Gravy" , "American grilled Corn Recipe" , "Chunky Beef stew"]
  return SliderContent.map((data , index) => {
    return(
        <div>
            <div className="slider-nav-items">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
        </div>
    );
  })
}

export default HomeNavigationSlider