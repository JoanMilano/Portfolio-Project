import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';
import SEOImg from '../assets/imgs/SEO-Img.avif'; 
import brandIdentityImg from '../assets/imgs/BrandIdentityImg.avif'; 
import solMedManImg from '../assets/imgs/SolMedManImg.avif'; 
import uiUxImg from '../assets/imgs/UI_UXImg.avif'; 
import eComImg from '../assets/imgs/EComImg.avif'; 
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
          breakpoint: { max: 1024, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
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
               <p>Starting out primarily as a UI/UX designer and developer aimed at building, customizing, and optimizing my clients online stores with a creative and comprehensive touch. I found interest in the skills surrounding digital marketing enabling me to give my client a round scope of the services they need for their business. Listed below are the skills I've become proficient in, and would be honored to gain experience with, while working on your masterpiece.</p>
               <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                <div className='item'>
                    <img src={SEOImg} alt='Image' />
                    <h5>SEO</h5>
                </div>
                <div className='item'>
                    <img src={brandIdentityImg} alt='Image' />
                    <h5>Brand identity</h5>
                </div>
                <div className='item'>
                    <img src={solMedManImg} alt='Image' />
                    <h5>Social Media Managment</h5>
                </div>
                <div className='item'>
                    <img src={uiUxImg} alt='Image' />
                    <h5>UI/UX Design & Development</h5>
                </div>
                <div className='item'>
                    <img src={eComImg} alt='Image' />
                    <h5>E-Commerce</h5>
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