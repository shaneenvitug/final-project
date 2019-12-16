import styled from 'styled-components';

const Activity = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.grey};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${props => props.theme.grey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.grey};
    & > * {
      background: white;
      border: 0;
      font-family: 'segoe-ui';
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
`;

export default Activity;