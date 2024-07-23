import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO of Example',
    content: 'This is an amazing product!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO of Example',
    content: 'I love using this every day!',
  },
  {
    id: 3,
    name: 'Samuel Green',
    role: 'Developer at Example',
    content: 'Fantastic experience with this tool!',
  },
];

const Carousel = () => {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 5,
    speed: 500
  };

  return (
    <div className="bg-[#1F1F1F]">
      <div className="max-w-[1440px] mx-auto">
        <div className="slider-container w-full">
          <Slider {...settings}>
         
              <img className="rounded-full text-center" src="https://picsum.photos/200" />
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdasd asdasda asdsa</h3>
       
           
              <img className="rounded-full text-center" src="https://picsum.photos/200" />
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdasd asdasda asdsa</h3>
       
           
              <img className="rounded-full text-center" src="https://picsum.photos/200" />
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdasd asdasda asdsa</h3>
       
           
              <img className="rounded-full text-center" src="https://picsum.photos/200" />
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdasd asdasda asdsa</h3>
       
           
              <img className="rounded-full text-center " src="https://picsum.photos/200" />
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdsa</h3>
              <h3 className="text-white text-center">Cebrailas asdasd asdasda asdsa</h3>
       
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
