import { useState } from 'react';

export function useProductsNav({ arrayOfProducts }) {
  const [currentActiveProduct, setCurrentActiveProduct] = useState(
    arrayOfProducts[1]
  );

  const [productsArr] = useState(arrayOfProducts);

  function setActiveProduct(id) {
    const activeElement = productsArr.filter((product) => product.id === id);
    setCurrentActiveProduct(...activeElement);
  }

  function handleProductClick({ arrow, ref }) {
    const clickedProduct = ref?.current?.swiper?.clickedSlide;
    const isLeftCardClikced = clickedProduct?.className.includes(
      'swiper-slide-active'
    );
    const isRightCardClicked =
      !clickedProduct?.className.includes('swiper-slide-next') &&
      !clickedProduct?.className.includes('swiper-slide-active');

    const activeProductLeft = ref?.current?.swiper?.visibleSlides.filter((p) =>
      p.className.includes('swiper-slide-active')
    )[0];
    const activeProductRight = ref?.current?.swiper?.visibleSlides.filter(
      (p) =>
        !p.className.includes('swiper-slide-active') &&
        !p.className.includes('swiper-slide-next')
    )[0];

    if (isLeftCardClikced || arrow === 'left') {
      ref.current.swiper.slidePrev();
    }
    if (isRightCardClicked || arrow === 'right') {
      ref.current.swiper.slideNext();
    }

    if (arrow === 'left' || arrow === 'right') {
      arrow === 'left' && setActiveProduct(activeProductLeft.id);
      arrow === 'right' && setActiveProduct(activeProductRight.id);
    } else {
      setActiveProduct(clickedProduct.id);
    }
  }

  return {
    handleProductClick,
    setActiveProduct,
    currentActiveProduct,
  };
}
