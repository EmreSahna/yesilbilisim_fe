import React, { CSSProperties, Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
  render() {
      return (
          <Carousel 
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop={true} 
            autoPlay={true} 
            interval={6000}
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} className='top-[calc(50%_-_84px)] z-10 absolute right-1'>
                  <i className="font-arrow not-italic rotate-90 inline-block opacity-50 text-[84px] ">¦</i>
                </button>
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} className='top-[calc(50%_-_84px)] z-10 absolute left-1'>
                  <i className="font-arrow not-italic -rotate-90 inline-block opacity-50 text-[84px] ">¦</i>
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index) => {
              if (isSelected) {
                  return (
                    <li className='h-[16px] w-[24px] opacity-100 bg-black mx-1 inline-block rounded-[10px]'/>
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
            <div>
              <img src="http://localhost:8080/img/carousel/yilbasi_indirim.jpg" alt="" />
            </div>
            <div>
              <img src="http://localhost:8080/img/carousel/yilbasi_indirim.jpg" alt="" />
            </div>
          </Carousel>
      );
  }
}