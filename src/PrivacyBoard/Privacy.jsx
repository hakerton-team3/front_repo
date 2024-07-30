import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Privacy.styled';

const Privacy = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
      };

    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리 추가
    const [memo, setMemo] = useState(""); // Add this line to define the memo state
    const [memos, setMemos] = useState([]);
    const [search, setSearch] = useState(""); // 검색어를 상태로 관리

      // 모달 열기/닫기 함수
    const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    };

    const onMemoChange = (e) => {
      setMemo(e.target.value);
    };

    const handleSubmit = () => {
      const newMemo = {
          id: Date.now(),
          text: memo,
          date: new Date().toLocaleString()
      };
      setMemos([...memos, newMemo]);
      setMemo("");
      toggleModal();
  };

  const handleDelete = (id) => {
      setMemos(memos.filter(memo => memo.id !== id));
  };

  // 검색어 입력 시 상태를 업데이트하는 함수
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // 검색어를 기준으로 메모를 필터링
  const filteredMemos = memos.filter((memo) => {
    return memo.text.toLowerCase().includes(search.toLowerCase());
  });

    return (
      <>
      <S.GlobalStyle />
      <S.CommunityContainer>
        <S.BackgroundImage />
        <S.ForegroundImage />
        <S.ButtonContainer>
          <S.ImageButton onClick={() => navigateTo('/community')}>
            <img src="/단체게시판1.png" alt="Community Board" />
          </S.ImageButton>
          <S.ImageButton onClick={() => navigateTo('/privacy')}>
            <img src="/혼잣말게시판1.png" alt="Personal Board" />
          </S.ImageButton>
        </S.ButtonContainer>
        <S.Content>
          <p style={{ textAlign: 'left', fontSize: '19px', fontWeight: 'bold', margin: '0' }}>김서경 님, 나만의 게시판입니다.</p>
          <hr />
          <p>
            누군가에게 말하기 망설여지거나 말 못할 고민들로 인해 한 음주.<br />
            이젠 주달이에게 털어놓는 건 어떨까요?<br />
            생각의 정리를 도와드릴 수 있게 최선을 다할게요.
          </p>
        </S.Content>

        <S.MainText>
          <S.Title>나를 되돌아보는 것도 중요해</S.Title>
          <S.SearchImg src="/public/검색.png" />
          </S.MainText>
        <S.Search>
          <S.SearchContainer>
            <S.SearchInput 
            type="text" 
            placeholder="'약속'에 관련된 혼잣말"
            value={search}
            onChange={onSearchChange} 
            />
            <S.SearchIcon src="/public/돋보기.png" alt="돋보기" />
          </S.SearchContainer>
            <S.WriteIcon src="/public/작성.png" alt="Write Icon" onClick={toggleModal} /> {/* 모달 열기 */}

        </S.Search>
        <S.Underline />
        <S.MemoContainer>
          {filteredMemos.length > 0 ? (
            filteredMemos.map(memo => (
              <S.BorderedText key={memo.id}>
                {memo.text}
                <S.SmallText>{memo.date}</S.SmallText>
                <S.CloseImg onClick={() => handleDelete(memo.id)}>X</S.CloseImg>
              </S.BorderedText>
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </S.MemoContainer>

        {isModalOpen && (
          <S.ModalOverlay onClick={toggleModal}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              <S.P>작성하기 | <strong>주량마스터</strong></S.P>
              <S.MemoBox
                value={memo}
                onChange={onMemoChange}
                placeholder=""
              />
              <S.SubmitButton onClick={handleSubmit}>등록하기</S.SubmitButton>
              <S.CloseButton onClick={toggleModal}>X</S.CloseButton>
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </S.CommunityContainer>
    </>
  );
};

export default Privacy;