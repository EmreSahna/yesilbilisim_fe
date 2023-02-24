import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface IProps {
  slider: string[];
}

const Slider = ({slider} : IProps) => {
  
  return (
    <Carousel 
      showThumbs={false} 
      showStatus={false} 
      infiniteLoop={true} 
      autoPlay={true} 
      interval={4000}
      showArrows={false}
      dynamicHeight={true}
      renderIndicator={(onClickHandler, isSelected, index) => {
        if (isSelected) {
            return (
              <li className='h-[16px] w-[24px] opacity-100 bg-white mx-1 inline-block rounded-[10px]'/>
            );
        }
        return (
            <li
              className='h-[16px] w-[16px] opacity-50 bg-white rounded-full mx-1 inline-block'
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
            />
        );
      }}
    >
      {slider &&
        slider.map((item, index) => {
          return (
            <div key={index}>
              <img src={`http://localhost:8080/img/${item}`} alt="" />
            </div>
        )})
      }
    </Carousel>
  );
}

export default Slider;