import { useState, useRef, useEffect } from 'react';
import { Container, Content, Nav } from './style';

const Carousel = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState();
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef) {
      const { width } = contentRef?.current.getBoundingClientRect();
      setPosition(-(width * active));
    }
  }, [active]);

  const handlePrev = () => active > 0 && setActive(active - 1);

  const handleNext = () =>
    active < slides.length - 1 ? setActive(active + 1) : setActive(0);
  return (
    <Container>
      <Content
        ref={contentRef}
        style={{
          transform: `translateX(${position}px)`,
          maxWidth: '333.33px',
        }}>
        {slides?.length > 0 &&
          slides.map((slide, index) => (
            <div key={index} className="item">
              <img
                className="imgSlide"
                height={500}
                src={slide?.src}
                alt={slide?.title}
              />
            </div>
          ))}
      </Content>
      {slides?.length > 1 && (
        <Nav>
          <a className="buttonSlide" onClick={handlePrev}>
            Anterior
          </a>
          <a className="buttonSlide" onClick={handleNext}>
            Próximo
          </a>
        </Nav>
      )}
    </Container>
  );
};

export default Carousel;
