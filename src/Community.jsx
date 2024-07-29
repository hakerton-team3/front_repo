import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Community.styled'; 

// 더미 데이터
const posts = [
    // {title: '확실히 혼자 마실 때 더 많이 마시게 되는 것 같네'},
    // {title: '같이'},
    // {title: '번개'},
    // {title: '주종'}
   ];


   const HorizontalScroll = () => {
    const scrollRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const bestPosts = ['BestPost 1', 'BestPost 2', 'BestPost 3']; // Example posts
  
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const itemWidth = 270; // Assuming each item has a fixed width of 270px
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
      <S.ScrollContainer ref={scrollRef}>
        {bestPosts.map((post, index) => (
          <S.ItemContainer
            key={index}
            className={index === activeIndex ? 'active' : 'inactive'}
          >
            <S.ItemBackground>
            <S.Text>{post}</S.Text>
            <S.Content>{post}</S.Content>
          </S.ItemBackground>
        </S.ItemContainer>
      ))}
    </S.ScrollContainer>
    );
  };

function Community() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const [search, setSearch] = useState(""); // 검색어를 상태로 관리
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리 추가
  const [memo, setMemo] = useState(""); // 메모 상태 추가

  // 검색어 입력 시 상태를 업데이트하는 함수
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  // 모달 열기/닫기 함수
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

   // 메모 입력 시 상태를 업데이트하는 함수
   const onMemoChange = (e) => {
    setMemo(e.target.value);
  }

  // 검색어를 기준으로 게시글을 필터링
  const filterTitle = posts.filter((post) => {
    // 제목의 공백을 제거하고 소문자로 변환하여 검색어와 비교
    return post.title.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", ""));
  });

  return (
    <>
      <S.GlobalStyle />
      <S.CommunityContainer>
        <S.ButtonContainer>
            <S.ImageButton onClick={() => navigateTo('/community')}>
            <img src="/단체게시판.png" alt="Community Board" />
            </S.ImageButton>
            <S.ImageButton onClick={() => navigateTo('/privacy')}>
            <img src="/혼잣말게시판.png" alt="Personal Board" />
        </S.ImageButton>
        </S.ButtonContainer>
        <S.BestContainer>
            <S.Best>
                <S.Title>오늘의 흑역사 베스트</S.Title> 
                <S.Heart src="/public/베스트.png" alt="Best" />
            </S.Best>
            <S.BestSection>
                <HorizontalScroll />
            </S.BestSection>

        </S.BestContainer>
        <S.KeywordContainer>
            <S.Keyword>
                <S.Title>키워드를 검색해 주세요</S.Title>
                <S.Search src="/public/검색.png" alt="Search" />
            </S.Keyword>
            <S.InputContainer>
            <S.StyledInput 
              type="text" 
              value={search} 
              onChange={onChange} 
              placeholder="@솔로샷러 가 작성한 오늘의 게시글은?" 
            />
            <S.SearchIcon src="/public/돋보기.png" alt="Search Icon" />
            <S.WriteIcon src="/public/작성.png" alt="Write Icon" onClick={toggleModal} /> {/* 모달 열기 */}
          </S.InputContainer>
          <S.Try>@를 이용해 관심 있는 술BTI에 대해서도 찾아보아요!</S.Try>

          {/* 필터링된 게시글 제목을 표시 */}
          <div>
            {filterTitle.length > 0 ? (
              filterTitle.map((post, index) => (
                <div key={index}>
                  <span>{post.title}</span>
                </div>
              ))
            ) : (
              <p>검색 결과가 없습니다.</p>
            )}
          </div>
        </S.KeywordContainer>

        <S.PostContainer>
            <S.Text>
            <p style={{fontSize:"8px", color:"gray"}}>3시간전 · @주량마스터 님의 새로운 게시글</p>
            <h5 style={{fontSize:"13px"}}>확실히 혼자 마실 때 더 많이 마시게 되는 것 같네</h5>
            <p style={{fontSize:"9px", color:"darkgray"}}>절주챌린지 중인 분들도 많을텐데 혼자 마시면서 줄이기보다는 다같이 마시는</p>
            </S.Text>
            <S.Box>
                <S.TagGroup>
                    <S.Tag>#절주챌린지</S.Tag>
                    <S.Tag>#주량</S.Tag>
                    <S.Tag>#나만의 생각</S.Tag>
                </S.TagGroup>          
            </S.Box>
            <p style={{fontSize:"10px", color:"gray", textAlign:"left"}}>❤️ 680</p>
            
            

        </S.PostContainer>

        {isModalOpen && (
          <S.ModalOverlay onClick={toggleModal}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
               <S.P>작성하기 | <strong>주량마스터</strong></S.P>
               <S.MemoBox 
                value={memo} 
                onChange={onMemoChange} 
                placeholder=""
               />
              <S.SubmitButton>등록하기</S.SubmitButton>
              <S.CloseButton onClick={toggleModal}>X</S.CloseButton>
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </S.CommunityContainer>
    </>
  );
}

export default Community;