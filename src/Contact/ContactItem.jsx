import React, { useState } from 'react';
import * as S from './Contact.styled';
import axiosInstance from '../axios/axiosInstance';
import Checkbox from './Checkbox'; // Checkbox 컴포넌트 import

const ContactItem = ({ contactId, name, number, onUpdate, onDelete }) => { 
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number); 
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false); // 체크박스 상태 관리

  const handleEditClick = () => {
    setIsEditPopupOpen(true);
  };

  const handleCloseClick = () => {
    setIsEditPopupOpen(false);
  };

  const handleSaveClick = async () => {
    if (editName && editNumber) {
      const updatedContact = { name: editName, number: editNumber, isMain: false };

      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        console.log('Using access token:', accessToken);

        const response = await axiosInstance.patch( 
          `/contacts/${contactId}`, // 요청 URL에 contactId 포함
          updatedContact, // 요청 본문
          { 
            headers: {
              Authorization: `Bearer ${accessToken}`, // 인증 헤더에 액세스 토큰 포함
              'Content-Type': 'application/json',
            }
          }
        );

        console.log('Contact updated:', response.data);

        if (response.status === 200 || response.status === 201) {
          const savedContact = response.data;
          onUpdate(contactId, savedContact); // updatedContact와 contactId 전달
          setIsEditPopupOpen(false);
          setError(null);
        } else {
          setError(`Error updating contact: ${response.statusText}`);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('Error: API endpoint not found.');
        } else {
          setError(`Error updating contact: ${error.message}`);
        }
        console.error('Error updating contact:', error);
      }
    } else {
      setError('Name and number are required.');
    }
  };

  const handleCheckboxChange = (isChecked) => {
    setChecked(isChecked); // 체크박스 상태 변경
  };

  const handleDeleteClick = async () => {
    if (checked) {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        console.log('Using access token:', accessToken);

        const response = await axiosInstance.delete(
          `/contacts/${contactId}`, // 요청 URL에 contactId 포함
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // 인증 헤더에 액세스 토큰 포함
              'Content-Type': 'application/json',
            }
          }
        );

        console.log('Contact deleted:', response.data);

        if (response.status === 200 || response.status === 204) {
          onDelete(contactId); // contactId 전달하여 부모 컴포넌트에서 연락처 목록 갱신
        } else {
          setError(`Error deleting contact: ${response.statusText}`);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('Error: API endpoint not found.');
        } else {
          setError(`Error deleting contact: ${error.message}`);
        }
        console.error('Error deleting contact:', error);
      }
    } else {
      setError('Please select the contact to delete.');
    }
  };

  return (
    <>
      <S.OuterContainer>
        <S.InnerContainer>
          <S.Background />
          <S.NameText>{name}</S.NameText>
          <S.PhoneText>{number}</S.PhoneText>

          <S.EditText onClick={handleEditClick}>수정</S.EditText>
          <S.Delete onClick={handleDeleteClick}>삭제</S.Delete>
          <Checkbox checked={checked} onChange={handleCheckboxChange}>
            선택
          </Checkbox>
        </S.InnerContainer>
      </S.OuterContainer>

      {isEditPopupOpen && (
        <S.PopupOverlay>
          <S.PopupContainer>
            <S.CloseButton onClick={handleCloseClick} />
            <S.InputContainer>
              <S.InputBox style={{ top: 0 }}>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="이름을 수정하시오."
                  style={{ width: '100%', border: 'none', outline: 'none', background: 'none' }}
                />
              </S.InputBox>
              <S.InputBox style={{ top: '77px' }}>
                <input
                  type="text"
                  value={editNumber}
                  onChange={(e) => setEditNumber(e.target.value)}
                  placeholder="전화번호를 수정하시오."
                  style={{ width: '100%', border: 'none', outline: 'none', background: 'none' }}
                />
              </S.InputBox>
              <S.SaveButton onClick={handleSaveClick}>
                <S.SaveButtonText>전화번호 수정하기</S.SaveButtonText>
              </S.SaveButton>
            </S.InputContainer>
          </S.PopupContainer>
        </S.PopupOverlay>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

export default ContactItem;
