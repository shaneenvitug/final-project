import styled from 'styled-components';

const Activity = styled.div`
  width: 320px;
  background: white;
  border: 1px solid ${props => props.theme.grey};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  :hover {
    position: relative;
    top: -2px;
    transition: ease-in-out;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
  p {
    font-size: 1.4rem;
    text-align: justify;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
  }
`;

export default Activity;