import React, { useRef, useEffect, useState } from 'react';
import * as S from './HorizontalScroll.styled';
 

const HorizontalScroll = () => {
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'src/images/1.png',
    'src/images/2.png',
    'src/images/3.png',
    'src/images/5.png',
    'src/images/4.png',
  ]; // Replace with your image paths

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.offsetWidth;
    const itemWidth = 200; // Assuming each item has a fixed width of 200px
    const center = scrollLeft + containerWidth / 2;

    const newIndex = Math.round(center / itemWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.OuterContainer>
      <S.WhiteContainer>
        <S.ScrollContainer ref={scrollRef}>
          {images.map((image, index) => (
            <S.ItemContainer
              key={index}
              className={index === activeIndex ? 'active' : 'inactive'}
            >
              <S.Image src={image} alt={`Item ${index + 1}`} />
            </S.ItemContainer>
          ))}
        </S.ScrollContainer>
        <S.FadingOverlay />
        <S.FadingOverlay right />
      </S.WhiteContainer>
    </S.OuterContainer>
  );
};

export default HorizontalScroll;
