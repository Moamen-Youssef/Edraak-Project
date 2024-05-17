import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import '../styles/App.css';
import FlexBox from '../ui/FlexBox';
import Description from '../ui/Description';
import styled, { css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BASE_URL = window.location.origin;

export const NavigationBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  width: 60%;
  color: var(--color-brand-200);

  ${(props) =>
    props.hide &&
    css`
      @media (min-width: 640px) {
        display: none;
      }
    `}

  & h1 {
    color: var(--color-brand-100);
    width: 80%;
    text-align: center;
    font-size: 1.7rem;
    font-weight: 400;
  }
  & svg {
    width: 2.6rem;
    height: 2.6rem;
    cursor: pointer;
    & :hover {
      color: var(--color-brand-100);
    }
  }
`;
function Projects() {
  const ProjectsFile = [
    { imgSrc: '/Edraak-Project/project-1.jpg', title: 'منصة ديما للصدقة اليومية', id: '1' },
    { imgSrc: '/Edraak-Project/project-2.jpg', title: 'إمارة منطقة الرياض', id: '2' },
    { imgSrc: '/Edraak-Project/project-3.jpg', title: 'منصة التصديق الرقمي', id: '3' },
    {
      imgSrc: '/Edraak-Project/project-4.jpg',
      title: 'تحليل وإخراج بيانات الأسر المنتجة',
      id: '4',
    },
    { imgSrc: '/Edraak-Project/project-5.jpg', title: 'تطبيق جامعة أم القرى', id: '5' },
  ];

  const [currentActiveProduct, setCurrentActiveProduct] = useState(
    ProjectsFile[1]
  );

  const swiperRef = useRef(null);

  function getActiveProduct() {
    // get the active img
    const activeImgSrc = swiperRef?.current?.swiper?.visibleSlides
      .filter((p) => p.className.includes('next'))[0]
      .firstChild.currentSrc.replace(BASE_URL, '');

    // search for it in the ProjectsFile
    const activeProduct = ProjectsFile.filter(
      (product) => product.imgSrc === activeImgSrc
    );
    setCurrentActiveProduct(...activeProduct);
  }

  const handleClickLeftArrow = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      getActiveProduct();
    }
  };

  const handleClickRightArrow = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      getActiveProduct();
    }
  };

  return (
    <FlexBox>
      <Description className='lg:flex'>
        <h1>أعمالنا</h1>
        <h4>نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا</h4>
        <p>
          نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص
          تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص
          تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص
          تخيلي للبيانات هنا
        </p>
      </Description>
      <div className='w-[33rem] md:w-[51rem] sm:w-[51.3rem] lg:w-[51rem] flex flex-col gap-[2rem] justify-center items-center'>
        <Swiper
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 0,
            depth: 100,
            modifier: 4,
            stretch: 105,
            // slideShadows: true,
          }}
          ref={swiperRef}
          spaceBetween={5}
          slidesPerView={3}
          loop={true}
          modules={[Navigation, EffectCoverflow]}
          className='mySwiper'
        >
          {ProjectsFile.map((product) => (
            <SwiperSlide key={product.id}>
              <img src={product.imgSrc} alt='project' />
            </SwiperSlide>
          ))}
        </Swiper>
        <NavigationBox>
          <FaChevronRight onClick={handleClickRightArrow} />
          <h1>{currentActiveProduct?.title}</h1>
          <FaChevronLeft onClick={handleClickLeftArrow} />
        </NavigationBox>
      </div>
    </FlexBox>
  );
}

export default Projects;
