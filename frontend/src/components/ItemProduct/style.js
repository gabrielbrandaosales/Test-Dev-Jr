import { styled } from 'styled-components';
const COLLOR_MAPING = {
  laticínios: '#281713',
  padaria: '#7EE75A',
  frutas: '#00C486',
  carnes: '#007084',
  utensílios: '#006100',
  peixes: '#EE005F',
  legumes: '#B62A8F',
  camisetas: '#6D4B9A',
  calças: '#325082',
  grãos: '#BEA6A0',
};
export const Item = styled.div`
  background: white;

  padding: 1rem;
  margin: 1rem;
  border: 2px solid #555;
  border-radius: 8px;

  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: center;

  position: relative;
  img {
    display: inline-block;
    border-radius: 4px;
    grid-column: 1 / -1;
    margin: 2rem;
    z-index: 3;
  }
  h1 {
    font-size: 20px;
  }
  .background-image {
    background: #333;
    position: absolute;
    z-index: 0;
    top: 105px;
    width: 180px;
    height: 120px;
    transform: skew(-20deg);
  }
  .title {
    grid-column: 1 / -1;
    justify-self: start;
    margin-bottom: 0.5rem;
  }
  .type {
    font-size: 25px;
    font-weight: 600;
    color: white;
    background: ${({ tipo }) => COLLOR_MAPING[tipo] || '#2F4858'};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;

    position: absolute;
    top: -18px;
    left: 12px;
  }
  .contact {
    display: flex;
    align-items: center;
    grid-area: 5;
    grid-column: 1 / -1;
    padding: 12px 4px;
    margin-top: 8px;
    border-radius: 4px;
    background: #24cc63;
    color: white;
    width: 100%;
    transition: 0.3s;
    justify-content: center;
    p {
      margin-left: 8px;
    }
    &:hover {
      background: #1a994a;
    }
  }
`;
