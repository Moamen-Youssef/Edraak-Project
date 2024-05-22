import { useState } from 'react';

export function useProjectsNav({arrayOfProjects, ref,url }) {

  const [currentActiveProject, setcurrentActiveProject] = useState(arrayOfProjects[1]);
  const [projectsArr] = useState(arrayOfProjects);
  const swiperRef = ref;
  const BASE_URL = url;

  function getActiveProject() {
    // get the active img
    const activeImgSrc = swiperRef?.current?.swiper?.visibleSlides
      .filter((p) => p.className.includes('next'))[0]
      .firstChild.currentSrc.replace(BASE_URL, '');

    // search for it in the ProjectsFile
    const activeProduct = projectsArr.filter(
      (product) => product.imgSrc === activeImgSrc
    );
    setcurrentActiveProject(...activeProduct);
  }

  const handleClickLeftArrow = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      getActiveProject();
    }
  };

  const handleClickRightArrow = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      getActiveProject();
    }
  };


  return {currentActiveProject, handleClickLeftArrow, handleClickRightArrow}
}
