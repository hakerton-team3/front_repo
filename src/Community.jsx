import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Community.styled';
import axiosInstance from './axios/axiosInstance';
import ImageButton from './image/단체게시판.png';
import ImageButton2 from './image/혼잣말게시판.png';
import Heart from './image/베스트.png';
import Search from './image/검색.png';
import SearchIcon from './image/돋보기.png';
import WriteIcon from './image/작성.png';
import RedHeart from './image/redheart.png';
import WhiteHeart from './image/whiteheart.png';
import HorizontalScroll from './HorizontalScroll';

function Community() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEntirePostModalOpen, setIsEntirePostModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [memo, setMemo] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [postList, setPostList] = useState([]);
  const [bestPostList, setBestPostList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const onMemoChange = (e) => setMemo(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onTagsChange = (e) => setTags(String(e.target.value));
  const onSearchChange = (e) => setSearch(e.target.value);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) throw new Error('Access token not found');

      const response = await axiosInstance.get('/group-posts', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      console.log('All posts response:', response);

      const posts = response.data.map(post => ({
        id: post.id,
        title: post.title,
        memo: post.contents,
        tags: post.hashtag,
        userName: post.userName,
        likeCount: post.likes,
        liked: post.liked,
        time: new Date(post.postDate)
      }));

      posts.sort((a, b) => b.time - a.time);

      setPostList(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      alert('게시글을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('Access token not found');

      await axiosInstance.post('/group-posts', {
        title,
        contents: memo,
        hashtag: tags
      }, { headers: { Authorization: `Bearer ${accessToken}` } });

      alert('데이터가 성공적으로 전송되었습니다.');
      fetchPosts();
      toggleModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error:', error);
      alert('데이터 전송에 실패했습니다.');
    }
  };

  const handleLikes = async (postId) => {
    setPostList((prevPostList) =>
      prevPostList.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1
            }
          : post
      )
    );

    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('Access token not found');

      await axiosInstance.post(`/likes/${postId}`, {}, { headers: { Authorization: `Bearer ${accessToken}` } });
    } catch (error) {
      console.error('Error:', error);
      alert('좋아요 처리에 실패했습니다.');
    }
  };

  const viewBest = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('Access token not found');

      const response = await axiosInstance.get('/group-posts/best/흑역사', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      console.log('Best posts response:', response);

      const bestPosts = response.data.map(post => ({
        id: post.id,
        title: post.title,
        memo: post.contents,
        tags: post.hashtag,
        userName: post.userName,
        likeCount: post.likes,
        liked: post.liked,
        time: new Date(post.postDate)
      }));

      setBestPostList(bestPosts);
    } catch (error) {
      console.error('Error fetching best posts:', error);
      alert('베스트 게시글을 불러오는데 실패했습니다.');
      setBestPostList([]);
    }
  };

  const handlePostClick = (post) => {
    setCurrentPost(post);
    setIsEntirePostModalOpen(true);
  };

  const closeEntirePostModal = () => {
    setCurrentPost(null);
    setIsEntirePostModalOpen(false);
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

  const searchByKeyword = async (keyword) => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('Access token not found');

      const response = await axiosInstance.get(`/group-posts/keyword/${keyword}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const posts = response.data.map(post => ({
        id: post.id,
        title: post.title,
        memo: post.contents,
        tags: post.hashtag,
        userName: post.userName,
        likeCount: post.likes,
        liked: post.liked,
        time: new Date(post.postDate)
      }));

      setPostList(posts);
    } catch (error) {
      console.error('Error:', error);
      alert('키워드 게시글을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const searchByHashtag = async (hashtag) => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('Access token not found');

      const response = await axiosInstance.get(`/group-posts/hashtag/${hashtag}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const posts = response.data.map(post => ({
        id: post.id,
        title: post.title,
        memo: post.contents,
        tags: post.hashtag,
        userName: post.userName,
        likeCount: post.likes,
        liked: post.liked,
        time: new Date(post.postDate)
      }));

      setPostList(posts);
    } catch (error) {
      console.error('Error:', error);
      alert('해시태그 게시글을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = () => {
    if (search.startsWith('#')) {
      searchByHashtag(search.slice(1));
    } else {
      searchByKeyword(search);
    }
  };

  useEffect(() => {
    fetchPosts();
    viewBest(); // Fetch the best posts with the appropriate tag
  }, []);

  return (
    <>
      <S.GlobalStyle />
      <S.CommunityContainer>
        <S.ButtonContainer>
          <S.ImageButton onClick={fetchPosts}>
            <img src={ImageButton} alt="Community Board" />
          </S.ImageButton>
          <S.ImageButton onClick={() => navigate('/privacy')}>
            <img src={ImageButton2} alt="Personal Board" />
          </S.ImageButton>
        </S.ButtonContainer>
        <S.BestContainer>
          <S.Best>
            <S.Title>오늘의 흑역사 베스트</S.Title>
            <S.Heart src={Heart} alt="Best" />
          </S.Best>
          <S.BestSection>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <HorizontalScroll posts={bestPostList} viewBest={viewBest} />
            )}
          </S.BestSection>
        </S.BestContainer>
        <S.KeywordContainer>
          <S.Keyword>
            <S.Title style={{ marginTop: '10px' }}>
              키워드를 검색해 주세요
              <S.Search src={Search} alt="Search" />
            </S.Title>
          </S.Keyword>
          <S.InputContainer>
            <S.StyledInput
              type="text"
              value={search}
              onChange={onSearchChange}
              placeholder={`${postList.length > 0 ? postList[0].userName : ''}님이 작성한 오늘의 게시글은?`}
            />
            <S.SearchIcon src={SearchIcon} alt="Search Icon" onClick={handleSearchSubmit} />
            <S.WriteIcon src={WriteIcon} alt="Write Icon" onClick={toggleModal} />
          </S.InputContainer>
          <S.Try>#를 이용해 관심 있는 술BTI에 대해서도 찾아보아요!</S.Try>
        </S.KeywordContainer>
        <S.PostListContainer>
          {loading ? (
            <p>Loading...</p>
          ) : postList.length > 0 ? (
            postList.map((post, index) => (
              <React.Fragment key={index}>
                <S.PostContainer onClick={() => handlePostClick(post)}>
                  <S.Text>
                    <p style={{ fontSize: "8px", color: "gray" }}>
                      {formatTime(post.time)} · @{post.userName} 님의 새로운 게시글
                    </p>
                    <h5 style={{ fontSize: "13px" }}>{post.title}</h5>
                    <p style={{ fontSize: "9px", color: "darkgray", width: "300px", height: "10px", lineHeight: "18px" }}>
                      {post.memo}
                    </p>
                  </S.Text>
                  <S.Box>
                    <S.TagGroup>
                      <S.Tag>{post.tags}</S.Tag> {/* Display tags as a string */}
                    </S.TagGroup>
                  </S.Box>
                  <p style={{ fontSize: "10px", color: "gray", textAlign: "left" }}>
                    ❤️ <S.LikeCount>{post.likeCount}</S.LikeCount>
                  </p>
                </S.PostContainer>
                <S.Underline />
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
                  placeholder="키워드를 #을 포함해 작성해 주세요.     (최대 3개)"
                  value={tags}
                  onChange={onTagsChange}
                />
                <S.SubmitButton onClick={handleSubmit}>업로드</S.SubmitButton>
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
                  <S.EntireTag>{currentPost.tags}</S.EntireTag> {/* Display tags as a string */}
                </S.EntireTagGroup>
                <S.LikeButton>
                  <S.HeartButton
                    src={currentPost.liked ? RedHeart : WhiteHeart}
                    alt="HeartButton"
                    onClick={() => {
                      handleLikes(currentPost.id);
                      setCurrentPost((prevPost) => ({
                        ...prevPost,
                        liked: !prevPost.liked,
                        likeCount: prevPost.liked ? prevPost.likeCount - 1 : prevPost.likeCount + 1
                      }));
                    }}
                  />
                  <S.LikeCount>{currentPost.likeCount}</S.LikeCount>
                </S.LikeButton>
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
