import { useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import '../styles/App.css';
import FlexBox from '../ui/FlexBox';
import Description from '../ui/Description';

import { NavigationBox } from './Projects';
import { LanguageContextAPI } from '../contexts/LanguageContext';
import { appContent } from '../content/appContent';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useProductsNav } from '../hooks/useProductsNav';

function Products() {
  const swiperRef = useRef(null);

  const { productsContent } = appContent();

  const { appLang } = useContext(LanguageContextAPI);

  const { handleProductClick, currentActiveProduct } = useProductsNav({
    arrayOfProducts: productsContent.products,
  });

  function productClick(arrow = '') {
    handleProductClick({ arrow, ref: swiperRef });
  }

  return (
    <FlexBox>
      <Description className='lg:flex' lang={appLang}>
        <h1>{productsContent.title[appLang]}</h1>
        <h4>{currentActiveProduct.title[appLang]}</h4>
        <p>{currentActiveProduct.description[appLang]}</p>
      </Description>

      <div className='cont w-[32rem] md:w-[49rem]  sm:w-[49rem] lg:w-[49rem] flex flex-col gap-[2rem] justify-center items-center'>
        <Swiper
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 0,
            depth: 100,
            modifier: 4,
            stretch: 102,
          }}
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          modules={[Navigation, EffectCoverflow]}
          className='mySwiper'
        >
          {productsContent.products.map((product) => (
            <SwiperSlide
              key={product.id}
              id={product.id}
              className='swiper-slide-card'
              onClick={productClick}
            >
              <product.productIcon />
            </SwiperSlide>
          ))}
        </Swiper>

        <NavigationBox hide={true}>
          <FaChevronRight onClick={() => productClick('right')} />
          <h1>{currentActiveProduct.title[appLang]}</h1>
          <FaChevronLeft onClick={() => productClick('left')} />
        </NavigationBox>
      </div>
    </FlexBox>
  );
}

export default Products;
