import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios/axiosInstance'; // axios 인스턴스 import
import * as S from './Privacy.styled';
import ImageButton3 from '../image/단체게시판1.png';
import ImageButton4 from '../image/혼잣말게시판1.png';
import SearchImg from '../image/검색.png';
import SearchIcon from '../image/돋보기.png';
import WriteIcon from '../image/작성.png';

const Privacy = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [memo, setMemo] = useState("");
    const [memos, setMemos] = useState([]);
    const [search, setSearch] = useState("");

    // 페이지 이동 함수
    const navigateTo = (path) => {
        navigate(path);
    };

    // 모달 열기/닫기 함수
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // 메모 입력 변경 함수
    const onMemoChange = (e) => {
        setMemo(e.target.value);
    };

    // 메모 삭제 함수
    const handleDelete = (id) => {
        axiosInstance.delete(`/private-posts/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
        .then(() => {
            // 삭제 후 메모 목록 새로고침
            fetchPosts();
        })
        .catch(error => {
            console.error('Error deleting post:', error);
            alert('삭제에 실패했습니다.');
        });
    };

    // 검색어 입력 함수
    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // 검색어로 메모 필터링
    const filteredMemos = memos.filter((memo) => {
        return memo.contents.toLowerCase().includes(search.toLowerCase());
    });

    // 메모 목록 조회 함수
    const fetchPosts = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) throw new Error('Access token not found');

            const response = await axiosInstance.get('/private-posts', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            const sortedPosts = response.data.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));

            setMemos(response.data); // 서버에서 받은 메모로 상태 업데이트
        } catch (error) {
            console.error('Error:', error);
            alert('데이터 조회에 실패했습니다.');
        }
    };

    // 메모 작성 함수
    const handleSubmit = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) throw new Error('Access token not found');

            const response = await axiosInstance.post('/private-posts', {
                contents: memo
            }, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            // 새로운 메모 추가 후 메모 목록 새로고침
            fetchPosts();
            setMemo(""); // 입력 필드 초기화
            toggleModal(); // 모달 닫기
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert('생성에 실패했습니다.');
            } else {
                console.error('Error submitting post:', error.message || error);
                alert('생성에 실패했습니다.');
            }
        }
    };

    // 컴포넌트 마운트 시 메모 목록 불러오기
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <S.CommunityContainer>
                <S.BackgroundImage />
                <S.ForegroundImage />
                <S.ButtonContainer>
                    <S.ImageButton onClick={() => navigateTo('/community')}>
                        <img src={ImageButton3} alt="Community Board" />
                    </S.ImageButton>
                    <S.ImageButton onClick={() => navigateTo('/privacy')}>
                        <img src={ImageButton4} alt="Personal Board" />
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
                    <S.SearchImg src={SearchImg} />
                </S.MainText>
                <S.Search>
                    <S.SearchContainer>
                        <S.SearchInput 
                            type="text" 
                            placeholder="'약속'에 관련된 혼잣말"
                            value={search}
                            onChange={onSearchChange} 
                        />
                        <S.SearchIcon src={SearchIcon} />
                    </S.SearchContainer>
                    <S.WriteIcon src={WriteIcon} alt="Write Icon" onClick={toggleModal} />
                </S.Search>
                <S.Underline />
                <S.MemoContainer>
                    {filteredMemos.length > 0 ? (
                        filteredMemos.map(memo => (
                            <S.BorderedText key={memo.id}>
                                {memo.contents} {/* contents를 표시 */}
                                <S.SmallText>{new Date(memo.postDate).toLocaleString()}</S.SmallText> {/* postDate를 포맷하여 표시 */}
                                <S.CloseImg onClick={() => handleDelete(memo.id)}>X</S.CloseImg>
                            </S.BorderedText>
                        ))
                    ) : (
                        <p></p>
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
