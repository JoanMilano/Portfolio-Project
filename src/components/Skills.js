import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/imgs/meter1.svg'; 
import meter2 from '../assets/imgs/meter2.svg'; 
import meter3 from '../assets/imgs/meter3.svg'; 
import colorSharp from '../assets/imgs/color-sharp.png'


export const Skills =  () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
         <Container>
          <Row> 
           <Col>
            <div className='skill-bx'>
              <h2>Capabilities</h2>
               <p>
Mastering SEO for heightened online visibility, I excel in crafting impactful brand identities. Proficient in strategic social media management, I bring a creative touch to UI/UX design, and possess extensive experience in seamless e-commerce development. A versatile professional, I drive comprehensive digital strategies for business growth across diverse domains.</p>
               <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                <div className='item'>
                    <img src={meter1} alt='Image' />
                    <h5>SEO</h5>
                </div>
                <div className='item'>
                    <img src={meter2} alt='Image' />
                    <h5>Brand identity</h5>
                </div>
                <div className='item'>
                    <img src={meter3} alt='Image' />
                    <h5>Social Media Managment</h5>
                </div>
                <div className='item'>
                    <img src={meter2} alt='Image' />
                    <h5>UI/UX Design & Development</h5>
                </div>
                <div className='item'>
                    <img src={meter1} alt='Image' />
                    <h5>e-commerce</h5>
                </div>
               </Carousel>
               </div>
             </Col>
            </Row> 
          </Container>
          <img className='background-image-left' src={colorSharp} alt="Background Color" />
        </section>
      )

}