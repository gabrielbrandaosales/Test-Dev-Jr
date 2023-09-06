import { styled } from 'styled-components';

export const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 1rem;
  .inputFilter {
    grid-column: 1 / -1;
  }

  input {
    padding: 0.75rem;
    border: 2px solid #555;
    border-radius: 8px;
    margin: 1rem;
    font-size: 1.5rem;
  }
  .error {
    grid-column: 1 / -1;
  }
`;
