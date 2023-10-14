import BgImgOne from "../../Assets/Images/sliderA_01.7f16b740.jpg";
import BgImgTwo from "../../Assets/Images/sliderA_02.5936693f.jpg";
import BgImgThree from "../../Assets/Images/sliderA_01.7f16b740.jpg";
import BgImgFour from "../../Assets/Images/sliderA_02.5936693f.jpg";
import { useState ,useEffect} from "react";
import './SliderComp.css'

function SliderComp() {
  const [Image, setImage] = useState({});
  const sliderData = [
    {
      id: 0,
      receipeName: "Mexican grilled Corn Recipe",
      recipeDescription:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      card_img: BgImgOne,
      rating: "3",
      duration: "1 Hr",
      Ingredients: [
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
      ],
      Directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",

        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
      ],
    },
    {
      id: 1,
      receipeName: "Roast Chicken With Lemon Gravy",
      recipeDescription:
        "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
      card_img: BgImgTwo,
      rating: "4",
      duration: "10 min",
      Ingredients: [
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
        {
          name: "pounds cubed beef stew meat",
          quantity: "1",
        },
      ],
      Directions: [
        "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",

        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
        "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
        ,
      ],
    },
  ];

  // setImage(sliderData[0])
  useEffect(() => {
    setImage(sliderData[0])
  }, []);
  // console.log(Image);
  // const SliderImages = [BgImgOne, BgImgTwo, BgImgThree, BgImgFour];
  // return SliderImages.map((data, index) => {
  //   return <img src={data} alt="nothing-just-a-slider-image" />;
  // });

  return (
    <div className="container">
      <div className="Image-contianer">
        {Image.receipeName}
      </div>
      <div className="button-container">
        <div className="imagechanger">m</div>
        <div className="imagechanger">r</div>
        <div className="imagechanger">a</div>
        <div className="imagechanger">c</div>
      </div>
    </div>
  )
}

export default SliderComp;
