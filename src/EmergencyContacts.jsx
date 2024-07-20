import React from 'react';
import * as S from './EmergencyContacts.styled';
 import Bubble from './Bubble';
 import MyComponent from './MyComponent';
 

const EmergencyContacts = () => {
    return (
        <div>
             <S.Divider /> {/* 구분선 추가 */}
            <h2>김서경 님의 비상연락망 📞</h2>
            
            
            <Bubble text="위급 시,상단에 띄울 번호를 선택해주세요." />
            <S.StyledContainer>
                    <div>번호 추가하기</div>
            </S.StyledContainer>
            <S.Divider /> {/* 구분선 추가 */}
            <MyComponent />
            <MyComponent />
            <MyComponent />
            <MyComponent />
            <MyComponent />
            <MyComponent />
            <MyComponent />
            <S.Divider /> {/* 구분선 추가 */}
        </div>
    );
}

export default EmergencyContacts;
