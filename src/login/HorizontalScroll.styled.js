import styled from 'styled-components';

export const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const WhiteContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  position: relative;
  padding: 20px;
  
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const FadingOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    to ${props => (props.right ? 'left' : 'right')}, 
    rgba(255, 255, 255, 1), 
    rgba(255, 255, 255, 0)
  );
  ${props => (props.right ? 'right: 0' : 'left: 0')};
`;

export const ItemContainer = styled.div`
  display: inline-block;
  min-width: 30%;
  height: 30%;
  margin: 0 10px;
  background: white; /* Set background to white */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, opacity 0.3s; /* Transition for scaling and opacity */
  &.active {
    transform: scale(1.2); /* Scale up the active item */
    opacity: 1; /* Make the active item fully visible */
  }
  &.inactive {
    transform: scale(0.8); /* Scale down the inactive items */
    opacity: 0.5; /* Make the inactive items semi-transparent */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
