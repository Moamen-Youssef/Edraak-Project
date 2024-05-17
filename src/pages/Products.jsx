import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import '../styles/App.css';
import FlexBox from '../ui/FlexBox';
import Description from '../ui/Description';
import {
  FaBuildingFlag,
  FaChevronLeft,
  FaChevronRight,
  FaDiagramNext,
  FaDiagramPredecessor,
  FaDiagramProject,
} from 'react-icons/fa6';
import { NavigationBox } from './Projects';
import { FaDigitalTachograph } from 'react-icons/fa';

function Products() {
  const productsFile = [
    {
      projectIcon: <FaDiagramProject />,
      title: 'نطام اللجان',
      description:
        'النص الاول تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات  نا تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات',
      id: '1',
    },
    {
      projectIcon: <FaDiagramPredecessor />,
      title: 'المكتب السري',
      description:
        'النص الثاني تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات  نا تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات',
      id: '2',
    },
    {
      projectIcon: <FaDiagramNext />,
      title: 'نظام ال pos',
      description:
        'النص الثالث تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات  نا تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات',
      id: '3',
    },
    {
      projectIcon: <FaBuildingFlag />,
      title: 'نظام تواصل الاتصالات والأرشفة الالكترونية',
      description:
        'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات  نا تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات',
      id: '4',
    },
    {
      projectIcon: <FaDigitalTachograph />,
      title: 'نظام ERP',
      description:
        'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات  نا تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات',
      id: '5',
    },
  ];

  const [currentActiveProduct, setCurrentActiveProduct] = useState(
    productsFile[1]
  );

  const swiperRef = useRef(null);

  function setActiveProduct(id) {
    const activeElement = productsFile.filter((product) => product.id === id);
    setCurrentActiveProduct(...activeElement);
  }

  function handleProjectClick(arrow) {
    const clickedProduct = swiperRef?.current?.swiper?.clickedSlide;
    const isLeftCardClikced = clickedProduct?.className.includes(
      'swiper-slide-active'
    );
    const isRightCardClicked =
      !clickedProduct?.className.includes('swiper-slide-next') &&
      !clickedProduct?.className.includes('swiper-slide-active');

    const activeProductLeft = swiperRef?.current?.swiper?.visibleSlides.filter(
      (p) => p.className.includes('swiper-slide-active')
    )[0];
    const activeProductRight = swiperRef?.current?.swiper?.visibleSlides.filter(
      (p) =>
        !p.className.includes('swiper-slide-active') &&
        !p?.className.includes('swiper-slide-next')
    )[0];

    if (isLeftCardClikced || arrow === 'left') {
      swiperRef.current.swiper.slidePrev();
    }
    if (isRightCardClicked || arrow === 'right') {
      swiperRef.current.swiper.slideNext();
    }

    if (arrow === 'left' || arrow === 'right') {
      arrow === 'left' && setActiveProduct(activeProductLeft.id);
      arrow === 'right' && setActiveProduct(activeProductRight.id);
    } else {
      setActiveProduct(clickedProduct.id);
    }
  }

  return (
    <FlexBox>
      <Description className='lg:flex'>
        <h1>منتجاتنا</h1>
        <h4>{currentActiveProduct.title}</h4>
        <p>{currentActiveProduct.description}</p>
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
          {productsFile.map((product) => (
            <SwiperSlide
              key={product.id}
              id={product.id}
              className='swiper-slide-card'
              onClick={handleProjectClick}
            >
              {product.projectIcon}
            </SwiperSlide>
          ))}
        </Swiper>
        <NavigationBox hide={true}>
          <FaChevronRight onClick={() => handleProjectClick('right')} />
          <h1>{currentActiveProduct?.title}</h1>
          <FaChevronLeft onClick={() => handleProjectClick('left')} />
        </NavigationBox>
      </div>
    </FlexBox>
  );
}

export default Products;
