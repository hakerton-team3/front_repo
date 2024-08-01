import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%; /* 전체 너비 사용 */
  height: 100vh;
  flex-direction: column; /* 세로 정렬 */
  display: flex;
`;

export const Containeryellow = styled.div`
  width: 100%;
  height: 37px;
  position: relative;
  display: flex;
`;

export const GradientBackground = styled.div`
  width: 437px;
  height: 37px;
  background: linear-gradient(90deg, #ffce4f, #ffbb57);
 
  top: 0;
  left: 0;
`;

export const Text = styled.div`
  position: absolute;
  left: 177px;
  top: 7px;
  width: 83px;
  height: 22px;
  text-align: center;
  color: white;
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 22px;
`;

export const Triangle = styled.div`
  position: absolute;
 
  top: 40%;
  left: 5%; 
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 9px solid white;
  transform: rotate(-90deg);
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 25%;
  background-image: url('src/image/backphon2.png');
  background-size: cover;
  background-position: center;
  margin-top: 10%;
  color: #333;
  font-family: 'Pretendard', sans-serif;
`;

export const BackgroundText = styled.div`
 
  margin-top: 25%;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  margin-left: 10%;
`;

export const BackgroundboldText = styled.div`
   font-weight: bold;
   font-weight:14px;
`;

export const NotificationContainer = styled.div`
  display: flex;
 justify-content:start;
margin-top: 10%;  
width: 100%;
 margin-bottom: 5%;
  flex-direction: row;  
 
`;

export const NotificationTextRegular = styled.span`
  color: #818181;
  font-size: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  margin-left: 10%;
`;

export const NotificationTextBold = styled.span`
  color: #818181;
  font-size: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  margin-left:1%;
`;

export const ButtonContainer = styled.div`
  width: 10%;
  height:auto;
  position: relative;
    margin-left:20%;
`;

export const GradientBackground2 = styled.div`
  width: 78px;
  height: 32px;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, #FFCE4F 0%, #FFA337 100%);
  border-radius: 30px;
`;

export const ButtonText = styled.div`
  width: 54px;
  height: 19px;
  position: absolute;
  left: 12px;
  top: 6px;
  text-align: center;
  color: white;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 800;
  word-wrap: break-word;
`;

export const OuterContainer = styled.div`
  width: 80%;
  height: 56px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 5%;
  margin-top: 5%;
  display: inline-flex;

  
`;

export const InnerContainer = styled.div`
  width: 80%;
  height: 56px;
  position: relative;
`;

export const Background = styled.div`
  width: 383px;
  height: 56px;
  left: 0;
  top: 0;
  position: absolute;
  background: #FAFAFA;
`;

export const NameText = styled.div`
  width: 36px;
  height: 15.3px;
  left: 15px;
  top: 12px;
  position: absolute;
  color: #666666;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
    margin-left:3%;
`;

export const PhoneText = styled.div`
  width: 112px;
  height: 15px;
  left: 15px;
  top: 28px;
  position: absolute;
  color: #222222;
  font-size: 13px;
  font-family: 'SUIT', sans-serif;
  font-weight: 800;
  word-wrap: break-word;

`;

export const EditDeleteText = styled.div`
  width: 64px;
  height: 15px;
  left: 284px;
  top: 20px;
  position: absolute;
  text-align: center;
  color: black;
  font-size: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
`;

export const CheckBox = styled.div`
  width: 14px;
  height: 14px;
  left: 354px;
  top: 21px;
  position: absolute;
  background: #E7E7E7;
`;




export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  width: 402px;
  height: 270px;
  position: relative;
  background: #F8F8F8;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const CloseButton = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url('src/image/close.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const InputContainer = styled.div`
  width: 283px;
  height: 205px;
  margin: 0 auto;
  position: relative;
`;

export const InputBox = styled.div`
  width: 283px;
  height: 67px;
  position: absolute;
  background: white;
  border-radius: 20px;
  border: 1px #FFCE4F solid;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

export const InputText = styled.div`
   width: 242px;
  height: 32px;
  position: absolute;
  left: 21px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 200;
  color: black;
 
 
`;

export const SaveButton = styled.div`
  width: 283px;
  height: 49px;
  position: absolute;
  top: 156px;
  background: #FFCE4F;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SaveButtonText = styled.div`
  color: #3A3A3A;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  text-align: center;
`;