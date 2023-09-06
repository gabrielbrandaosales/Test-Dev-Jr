import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
  margin: 0 2rem;

  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #555;
`;

export const Content = styled.div`
  display: flex;
  z-index: 100;
  transition: transform 0.3s ease;
  .imgSlide {
    max-width: 100%;
    border-radius: 4px;
    margin: 2rem 2rem 0 2rem;
  }
  .item {
    flex-shrink: 0;
    border-radius: 4px;
    text-align: center;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 2rem auto;
  a {
    color: white;
    border-radius: 4px;
    background: #333;
    padding: 0.5rem 2rem;
    cursor: pointer;
    transition: 0.3s;
  }
  a:hover {
    background: #111;
  }
`;
