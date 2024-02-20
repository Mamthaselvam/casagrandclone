import React from 'react'
import { ourteam } from "../../data/data"; 
import {Container,Row,Col} from 'react-bootstrap';
import './team.scss'
const Team = () => {
  return (
    <div>
<Container>
          <div className="galaery-h1">
            MEET OUR TEAM <div className="galaery-h1-line"></div>
          </div>

          <Row className="galleryg">
            {ourteam.map((item) => (
              <>
                <Col xl={3} lg={12} key={item.id}>
                  <article className="cardg">
                    <figure>
                      <img src={item.imgSrc} alt={item.title} />
                      <figcaption>
                        <h3>{item.title}</h3>
                        <p>{item.para}</p>
                      </figcaption>
                    </figure>
                  </article>
                </Col>
              </>
            ))}
          </Row>
        </Container>

    </div>
  )
}

export default Team