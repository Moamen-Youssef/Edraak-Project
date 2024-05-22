import { useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import '../styles/App.css';
import FlexBox from '../ui/FlexBox';
import Description from '../ui/Description';
import styled, { css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { appContent } from '../content/appContent';
import { LanguageContextAPI } from '../contexts/LanguageContext';
import { useProjectsNav } from '../hooks/useProjectsNav';

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
  const { projectsContent } = appContent();
  const { projects, title, description } = projectsContent;
  const swiperRef = useRef(null);
  const { appLang } = useContext(LanguageContextAPI);

  const { handleClickLeftArrow, handleClickRightArrow, currentActiveProject } =
    useProjectsNav({
      arrayOfProjects: projects,
      ref: swiperRef,
      url: BASE_URL,
    });

  return (
    <FlexBox>
      <Description className='lg:flex' lang={appLang}>
        <h1>{title[appLang]}</h1>
        <h4>{description.title[appLang]}</h4>
        <p>{description.text[appLang]}</p>
      </Description>
      <div className='w-[32.2rem] md:w-[51rem] sm:w-[50.3rem] lg:w-[51rem] flex flex-col gap-[2rem] justify-center items-center'>
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
          {projects.map((product) => (
            <SwiperSlide key={product.id}>
              <img src={product.imgSrc} alt='project' />
            </SwiperSlide>
          ))}
        </Swiper>
        <NavigationBox>
          <FaChevronRight onClick={handleClickRightArrow} />
          <h1>{currentActiveProject?.title[appLang]}</h1>
          <FaChevronLeft onClick={handleClickLeftArrow} />
        </NavigationBox>
      </div>
    </FlexBox>
  );
}

export default Projects;
