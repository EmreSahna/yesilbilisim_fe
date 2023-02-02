import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { IImage } from "../types";

interface IProps {
  slider: IImage[];
}

const ProductCarousel = ({slider} : IProps) => {
  
  return (
    <Carousel 
      showThumbs={false} 
      showStatus={false} 
      infiniteLoop={false}
      autoPlay={false}
      showArrows={false}
      dynamicHeight={false}
      renderIndicator={(onClickHandler, isSelected, index) => {
        if (isSelected) {
            return (
              <li className='h-[16px] w-[16px] opacity-100 bg-black mx-1 inline-block rounded-[10px]'/>
            );
        }
        return (
            <li
              className='h-[16px] w-[16px] opacity-50 bg-black rounded-full mx-1 inline-block'
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
            <div className="flex justify-center items-center rounded-md overflow-hidden h-full bg-white">
              <img src={`http://192.168.1.169:8080/img/${item.folder}/${item.filename}`} className="w-full" alt="" />
            </div>
        )})
      }
    </Carousel>
  );
}

export default ProductCarousel;