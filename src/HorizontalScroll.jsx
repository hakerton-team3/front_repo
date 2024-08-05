import React, { useState, useRef, useEffect } from 'react';
import * as S from './Community.styled';
import HotTag from './image/Hot.png';
import YellowHeart from './image/yellowheart.png';

const HorizontalScroll = ({ posts, viewBest }) => {
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const itemWidth = 270; // Fixed width
      const center = scrollLeft + containerWidth / 2;

      const newIndex = Math.round(center / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);

      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
    viewBest(); // Fetch the best posts when the component mounts
  }, [viewBest]);

  return (
    <S.ScrollContainer ref={scrollRef}>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <S.ItemContainer
            key={post.id || index} // Use a unique key if available
            className={index === activeIndex ? 'active' : 'inactive'}
          >
            <S.ItemBackground>
              <S.Like><S.YH src={YellowHeart} alt="YellowHeart" />{post.likeCount}명이 공감했습니다.</S.Like>
              <S.Text2>{post.title}</S.Text2>
              <S.Content>{post.memo}</S.Content>
              <S.TagGroup2>
                <S.HotTag src={HotTag} alt="Hot" />
                <S.Tag2>{post.tags}</S.Tag2> {/* Display tags as a string */}
              </S.TagGroup2>
            </S.ItemBackground>
          </S.ItemContainer>
        ))
      ) : (
        <p>No best posts available.</p>
      )}
    </S.ScrollContainer>
  );
};

export default HorizontalScroll;
