import React from 'react'
import BgImgOne from "../../Assets/Images/sliderA_01.7f16b740.jpg"
import BGImgTwo from "../../Assets/Images/sliderA_02.5936693f.jpg"
import BgImgThree from "../../Assets/Images/sliderA_01.7f16b740.jpg"
import BGImgFour from "../../Assets/Images/sliderA_02.5936693f.jpg"

function SliderComp() {
    const SliderImages = [BgImgOne , BGImgTwo , BgImgThree , BGImgFour]
    return SliderImages.map((data , index) =>{
      return (
          <img src={data} alt="nothing-just-a-slider-image" />
        );
    });
}

export default SliderComp