import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Community.styled'; 


const HorizontalScroll = ({ posts }) => {
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  
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
      {posts.map((post, index) => (
        <S.ItemContainer
          key={index}
          className={index === activeIndex ? 'active' : 'inactive'}
        >
          <S.ItemBackground>
            <S.Like><S.YH src="/src/image/yellowheart.png" alt="Hot"></S.YH>7명이 공감했습니다.</S.Like>
            <S.Text2>{post.title}</S.Text2>
            <S.Content>{post.memo}</S.Content>
            <S.TagGroup2>
              <S.HotTag src="/src/image/Hot.png" alt="Hot"></S.HotTag>
              {post.tags.map((tag, tagIndex) => (
              <S.Tag2 key={tagIndex}>{tag}</S.Tag2>
          ))}
        </S.TagGroup2>
          </S.ItemBackground>
        </S.ItemContainer>
      ))}
    </S.ScrollContainer>
  );
};

function Community() {
  const navigate = useNavigate();
  const navigateTo = (path) => { navigate(path); };

  const [search, setSearch] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEntirePostModalOpen, setIsEntirePostModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [memo, setMemo] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [postList, setPostList] = useState([]); // Initialize with an empty array

  const onChange = (e) => setSearch(e.target.value);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const onMemoChange = (e) => setMemo(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);
  
  const onTagsChange = (e) => {
    const tagsArray = e.target.value.split(' ').filter(tag => tag.startsWith('#'));
    if (tagsArray.length <= 3) {
      setTags(e.target.value);
    }
  };

  const handleUpload = () => {
    const newPost = {
      title,
      memo,
      tags: tags.split(" ").filter(tag => tag.startsWith('#')),
      time: new Date()
    };
    setPostList([newPost, ...postList]);
    setTitle("");
    setMemo("");
    setTags("");
    setIsModalOpen(false);
  };

  const formatTime = (time) => {
    const now = new Date();
    const diff = Math.floor((now - time) / 60000); 

    if (diff < 60) {
      return `${diff}분 전`;
    } else {
      const hours = Math.floor(diff / 60);
      const minutes = diff % 60;
      return `${hours}시간 ${minutes}분 전`;
    }
  };

  // Filter posts by title
  const filteredPosts = postList.filter((post) => 
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const postsWithTag = postList.filter(post => post.tags.includes('#흑역사'));

  const openEntirePostModal = (post) => {
    setCurrentPost(post);
    setIsEntirePostModalOpen(true);
  };

  const closeEntirePostModal = () => {
    setCurrentPost(null);
    setIsEntirePostModalOpen(false);
  };

  const handlePostClick = (post) => {
    openEntirePostModal(post);
  };

  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <S.GlobalStyle />
      <S.CommunityContainer>
        <S.ButtonContainer>
          <S.ImageButton onClick={() => navigateTo('/community')}>
            <img src="/src/image/단체게시판.png" alt="Community Board" />
          </S.ImageButton>
          <S.ImageButton onClick={() => navigateTo('/privacy')}>
            <img src="/src/image/혼잣말게시판.png" alt="Personal Board" />
          </S.ImageButton>
        </S.ButtonContainer>
        <S.BestContainer>
          <S.Best>
            <S.Title>오늘의 흑역사 베스트</S.Title> 
            <S.Heart src="/src/image/베스트.png" alt="Best" />
          </S.Best>
          <S.BestSection>
            <HorizontalScroll posts={postsWithTag} />
          </S.BestSection>
        </S.BestContainer>
        <S.KeywordContainer>
          <S.Keyword>
            <S.Title style={{marginTop:'10px'}}>키워드를 검색해 주세요</S.Title>
            <S.Search src="/src/image/검색.png" alt="Search" />
          </S.Keyword>
          <S.InputContainer>
            <S.StyledInput 
              type="text" 
              value={search} 
              onChange={onChange} 
              placeholder="@솔로샷러 가 작성한 오늘의 게시글은?" 
            />
            <S.SearchIcon src="/src/image/돋보기.png" alt="Search Icon" />
            <S.WriteIcon src="/src/image/작성.png" alt="Write Icon" onClick={toggleModal} />
          </S.InputContainer>
          <S.Try>@를 이용해 관심 있는 술BTI에 대해서도 찾아보아요!</S.Try>
        </S.KeywordContainer>
        <S.PostListContainer>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <React.Fragment key={index}>
                <S.PostContainer onClick={() => handlePostClick(post)}>
                  <S.Text>
                    <p style={{ fontSize: "8px", color: "gray" }}>{formatTime(post.time)} · @주량마스터 님의 새로운 게시글</p>
                    <h5 style={{ fontSize: "13px" }}>{post.title}</h5>
                    <p style={{ fontSize: "9px", color: "darkgray", width: "300px", height:"10px", lineHeight:"18px"}}>{post.memo}</p>
                  </S.Text>
                  <S.Box>
                    <S.TagGroup>
                      {post.tags.map((tag, tagIndex) => (
                        <S.Tag key={tagIndex}>{tag}</S.Tag>
                      ))}
                    </S.TagGroup>
                  </S.Box>
                  <p style={{ fontSize: "10px", color: "gray", textAlign: "left" }}>❤️ </p>
                </S.PostContainer>
                <S.Underline /> {/* 세로로 구분 */}
              </React.Fragment>
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </S.PostListContainer>
        {isModalOpen && (
          <S.ModalOverlay onClick={toggleModal}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              <S.ModalTitle>커뮤니티</S.ModalTitle>
              <S.P>@주량마스터 님이 작성 중입니다.</S.P>
              <S.TitleBox
                placeholder="제목을 입력해 주세요."
                value={title}
                onChange={onTitleChange}
              />
              <S.Underline />
              <S.MemoBox
                value={memo}
                onChange={onMemoChange}
                placeholder="내용을 입력해 주세요."
              />
              <S.Underline />
              <S.ModalBottom>
                <S.TagBox
                  placeholder="키워드를 #을 포함해 작성해 주세요. (최대 3개)"
                  value={tags}
                  onChange={onTagsChange}
                />
                <S.SubmitButton onClick={handleUpload}>업로드</S.SubmitButton>
              </S.ModalBottom>
              <S.CloseButton onClick={toggleModal}>X</S.CloseButton>
            </S.ModalContent>
          </S.ModalOverlay>
        )}
        {isEntirePostModalOpen && currentPost && (
          <S.EntireModalOverlay onClick={closeEntirePostModal}>
            <S.EntireModalContent onClick={(e) => e.stopPropagation()}>
              <S.ModalTitle>커뮤니티</S.ModalTitle>
              <S.EntireTitleBox>{currentPost.title}</S.EntireTitleBox>
              <S.ModalUnderline />
              <S.EntireMemoBox>{currentPost.memo}</S.EntireMemoBox>
              <S.EntireModalBottom>
                <S.EntireTagGroup>
                  {currentPost.tags.map((tag, index) => (
                    <S.EntireTag key={index}>{tag}</S.EntireTag>
                  ))}
                  <S.LikeButton onClick={toggleLike}>
                    <S.HeartButton 
                      src={liked ? "/src/image/redheart.png" : "/src/image/whiteheart.png"} 
                      alt="HeartButton"
                    />
                  </S.LikeButton>
                </S.EntireTagGroup>
                <S.EntireCloseButton onClick={closeEntirePostModal}>X</S.EntireCloseButton>
              </S.EntireModalBottom>
            </S.EntireModalContent>
          </S.EntireModalOverlay>
        )}
      </S.CommunityContainer>
    </>
  );
}

export default Community;
