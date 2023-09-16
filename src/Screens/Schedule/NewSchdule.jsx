import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NewSchedule.scss";

const NewSchdule = () => {

  const crowdColors = ['#e6f360', '#a7b047', '#e9621e', '#b1605b', '#b05927', '#e9621e', '#ff9800' ]
  return (
    <Container fluid="true" className="schedule-container">
      <div>NewSchdule</div>

      <Container fluid="true" className="train-container">
        <Row>
          <Col md="3" sm="12">
            <Row>
              <Col md="11" className="train-details">
                <h4 className="train-name">Galu Kumari</h4>
                <div>Colombo Commuter</div>
                <div>Train No: 8067</div>
                <div>Daily</div>
                <div>Classes: 1st 2nd 3rd</div>
              </Col>
              <Col md="1" className="vertical-bar-container">
                <div className="vertical-bar"></div>
              </Col>
              <Row className="horizontal-bar-container">
                <div className="horizontal-bar" />
              </Row>
            </Row>
          </Col>
          <Col md="9" sm="12" className="right-side-train">
            <Row>
              <Col xs="1" className="train-right-label">
                Station
              </Col>
              <Col xs="2" className="start-station">
                Colombo
              </Col>
              <Col xs="2" className="source-station">
                Mount Lavinia
              </Col>
              <Col xs="3" />
              <Col xs="2" className="dest-station">
                Ambalangoda
              </Col>
              <Col xs="2" className="end-station">
                Beliatta
              </Col>
            </Row>

            {/* Dotted Line Map */}
            <Row className="map-container-lines">
              <Col xs="1" />
              <Col xs="11">
                <div className="dotted-line" />
                <Col xs="1" className="circle-position" />
                <Col xs="1" className="circle-position c-p-source" />
                <Col xs="1" className="circle-position c-p-dest" />
                <Col xs="1" className="circle-position c-p-end" />
              </Col>
            </Row>


            {/* Arrival Times */}
            <Row className="arrival-time-row">
              <Col xs="1" className="train-right-label">
                Arrival
              </Col>
              <Col xs="2" className="start-station">
                06:40
              </Col>
              <Col xs="2" className="source-station">
                07:30
              </Col>
              <Col xs="3" />
              <Col xs="2" className="dest-station">
                12:20
              </Col>
              <Col xs="2" className="end-station">
                16:00
              </Col>
            </Row>

            {/* Dest times */}
            <Row>
              <Col xs="1" className="train-right-label">
                Departure
              </Col>
              <Col xs="2" className="start-station">
                06:40
              </Col>
              <Col xs="2" className="source-station">
                07:30
              </Col>
              <Col xs="3" />
              <Col xs="2" className="dest-station">
                12:20
              </Col>
              <Col xs="2" className="end-station">
                16:00
              </Col>
            </Row>

            {/* Crowd row */}
            <Row>
              <Col xs="1" className="train-right-label">
                Crowd
              </Col>

              <Col xs='11'>
                <Row>
                { crowdColors.map((index) => (
                <Col className="crowd-boxes" style={{backgroundColor: `${index}`}}/>
              ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NewSchdule;
