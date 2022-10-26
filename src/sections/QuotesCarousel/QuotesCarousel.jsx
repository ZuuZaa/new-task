import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";
import { carouselItems } from "constants";
import { useEffect, useState } from "react";
import "swiper/css";

// ------- controller for slider with logos -------
const SwiperLogo = ({ active }) => {
  const swiper = useSwiper();

  return (
    <div className="logos-slider">
      {carouselItems.map((item, index) => (
        // ---- logo items to change slide -----
        <div
          className="logo-wrapper"
          key={item.id}
          onClick={() => swiper.slideTo(index)}
        >
          <img
            src={item.src}
            alt={item.id}
            id={index}
            // ------- active or muted class name to change logo style ------
            className={active === index ? "active-logo" : "muted"}
          />
        </div>
      ))}
    </div>
  );
};

// --------- Carousel --------
export const QuotesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeLogo, setActiveLogo] = useState(0);
  // ------- set active logo ------
  const clickHandler = (e) => {
    const active = parseInt(e.target.id);
    setActiveLogo(active);
  };
  // -------- active logo depends on current slide -----
  useEffect(() => {
    setActiveLogo(currentSlide);
  }, [currentSlide]);

  return (
    <div className="quotes-section">
      <div className="carousel-container">
        <Swiper
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex);
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              {/* -------- slides --------  */}
              <div className="quote-content">
                <div className="author">{item.author}</div>
                <div className="quote">{item.quote}</div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperLogo active={activeLogo} clickHandler={clickHandler} />
        </Swiper>
      </div>
    </div>
  );
};
