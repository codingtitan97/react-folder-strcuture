// // import React from 'react';
// // import Slider from 'react-slick';
// // import styled from 'styled-components';

// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// // const SliderWrapper = styled.div`
// //   position: relative;
// // `;

// // const Slide = styled.div`
// //   padding: 10px;
// // `;

// // const Image = styled.img`
// //   width: 90%;
// //   max-height: 300px;
// //   object-fit: cover;
// //   border-radius: 8px;
// // `;

// // const Arrow = styled.div`
// //   position: absolute;
// //   top: 50%;
// //   transform: translateY(-50%);
// //   cursor: pointer;
// //   font-size: 40px;
// //   color: black;
// // `;

// // const NextArrow = styled(Arrow)`
// //   right: 435px;
// // `;

// // const PrevArrow = styled(Arrow)`
// //   left: 100px;
// // `;

// // const ImageSlider = ({ images }) => {
// //   const settings = {
// //     infinite: true,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     centerMode: true,
// //     centerPadding: '0',
// //     focusOnSelect: true,
// //     nextArrow: <NextArrow>&#9654;</NextArrow>,
// //     prevArrow: <PrevArrow>&#9664;</PrevArrow>,
// //     customPaging: (i) => <div></div>
// //   };

// //   const CustomArrows = ({ currentSlide, slideCount, ...props }) => {
// //     const showLeftArrow = currentSlide !== 0;
// //     const showRightArrow = currentSlide !== slideCount - 1;

// //     return (
// //       <div {...props}>
// //         {showLeftArrow && <PrevArrow onClick={props.onClick}>&#9664;</PrevArrow>}
// //         {showRightArrow && <NextArrow onClick={props.onClick}>&#9654;</NextArrow>}
// //       </div>
// //     );
// //   };

// //   return (
// //     <SliderWrapper>
// //       <Slider {...settings} nextArrow={<CustomArrows />} prevArrow={<CustomArrows />}>
// //         {images.map((image, index) => (
// //           <Slide key={index}>
// //             <Image src={image} alt={`Slide ${index + 1}`} />
// //           </Slide>
// //         ))}
// //       </Slider>
// //     </SliderWrapper>
// //   );
// // };

// // export default ImageSlider;

// // src/components/ImageSlider.js
// import React from 'react';
// import Slider from 'react-slick';
// import styled from 'styled-components';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const SliderWrapper = styled.div`
//   position: relative;
// `;

// const Slide = styled.div`
//   padding: 10px;
// `;

// const Image = styled.img`
//   width: 90%;
//   max-height: 300px;
//   object-fit: cover;
//   border-radius: 8px;
// `;

// const Arrow = styled.div`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
//   font-size: 28px; /* Make it slightly bigger */
//   color: red; /* Arrow color */
//   transition: color 0.3s ease;

//   &:hover {
//     color: #ddd; /* Arrow color on hover */
//   }
// `;

// const NextArrow = styled(Arrow)`
//   right: -20px;
// `;

// const PrevArrow = styled(Arrow)`
//   left: -20px;
// `;

// const ImageSlider = ({ images }) => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0',
//     focusOnSelect: true,
//     nextArrow: <NextArrow>&#9654;</NextArrow>,
//     prevArrow: <PrevArrow>&#9664;</PrevArrow>,
//     customPaging: (i) => <div></div>
//   };

//   const CustomArrows = ({ currentSlide, slideCount, ...props }) => {
//     const showLeftArrow = currentSlide !== 0;
//     const showRightArrow = currentSlide !== slideCount - 1;

//     return (
//       <div {...props}>
//         {showLeftArrow && <PrevArrow onClick={props.onClick}>&#9664;</PrevArrow>}
//         {showRightArrow && <NextArrow onClick={props.onClick}>&#9654;</NextArrow>}
//       </div>
//     );
//   };

//   return (
//     <SliderWrapper>
//       <Slider {...settings} nextArrow={<CustomArrows />} prevArrow={<CustomArrows />}>
//         {images.map((image, index) => (
//           <Slide key={index}>
//             <Image src={image} alt={`Slide ${index + 1}`} />
//           </Slide>
//         ))}
//       </Slider>
//     </SliderWrapper>
//   );
// };

// export default ImageSlider;
// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
  position: relative;
`;

const Slide = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  width: 90%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 28px; /* Make it slightly bigger */
  color: red; /* Arrow color */
  transition: color 0.3s ease;

  &:hover {
    color: black; /* Arrow color on hover */
  }
`;

const CenteredArrows = styled.div`
  position: absolute;
  top: 50%;
//   right: 49%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NextArrow = styled(Arrow)`
 right:33%;
`;

const PrevArrow = styled(Arrow)`
left:31%;
`;

const ImageSlider = ({ images }) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        customPaging: (i) => <div></div>
    };

    const CustomArrows = ({ currentSlide, slideCount, ...props }) => {
        const showLeftArrow = currentSlide !== 0;
        const showRightArrow = currentSlide !== slideCount - 1;

        return (
            <CenteredArrows>
                {showLeftArrow && <PrevArrow onClick={props.onClick}>&#9664;</PrevArrow>}
                {showRightArrow && <NextArrow onClick={props.onClick}>&#9654;</NextArrow>}
            </CenteredArrows>
        );
    };

    return (
        <SliderWrapper>
            <Slider {...settings} nextArrow={<CustomArrows />} prevArrow={<CustomArrows />}>
                {images.map((image, index) => (
                    <Slide key={index}>
                        <Image src={image} alt={`Slide ${index + 1}`} />
                    </Slide>
                ))}
            </Slider>
        </SliderWrapper>
    );
};

export default ImageSlider;
