import { GET_PRODUCT } from './api';
import Search from './components/Search';
import useFetch from './hooks/useFetch';
import Carousel from './components/Carousel';

function App() {
  const slides = [
    {
      id: 1,
      titulo: 'cenouras',
      src: 'https://www.infoescola.com/wp-content/uploads/2010/08/cenoura_250834906.jpg',
    },
    {
      id: 2,
      titulo: 'maçãs',
      src: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3168151:1638891065/Ma%C3%A7%C3%A3.jpg?f=16x9&$p$f=bb4c7f9',
    },
    {
      id: 3,
      titulo: 'notebook-2',
      src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg',
    },
    {
      id: 4,
      titulo: 'smartphone',
      src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartphone.jpg',
    },
    {
      id: 5,
      titulo: 'notebook-2',
      src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg',
    },
    {
      id: 6,
      titulo: 'smartphone',
      src: 'https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartphone.jpg',
    },
  ];
  return (
    <>
      <main>
        <section>
          <Carousel slides={slides} aria-label="Carrossel" />
          <Search aria-label="Pesquisa" />
        </section>
      </main>
      <footer>
        Desenvolvido por{' '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gabrielbrandaosales">
          Gabriel Brandão
        </a>
        .
      </footer>
    </>
  );
}

export default App;
