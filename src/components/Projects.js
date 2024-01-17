import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import portProjImg from "../assets/imgs/portProj-SS.avif";
import projImg2 from "../assets/imgs/project-img2.png";
import projImg3 from "../assets/imgs/project-img3.png";
import colorSharp2 from "../assets/imgs/color-sharp2.png";

export const Projects = () => {

  const firstProjTab = [
    {
      title: "My Own Portfolio",
      description: "UI/UX Design & Development",
      imgUrl: portProjImg,
    },
  ]
  const secondProjTab = [
    {
      title: "Business Startup",
      description: "Brand Identity & E-Commerce",
      imgUrl: projImg2,
    }
  ]
  const thirdProjTab = [
    {
      title: "Business Startup",
      description: "SEO & Social Media Management",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                <p>Explore clients whose visions I brought to life by seamlessly addressing their digital needs. Additionally, find personal projects showcasing my skill practice and utility.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          firstProjTab.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      {
                          secondProjTab.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      {
                          thirdProjTab.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Color"></img>
    </section>
  )
}