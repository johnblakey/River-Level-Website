/**
 * Created by jb on 12/20/17.
 */
import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const RiverCard = (props) => {
    return (
        <Row>
            <Col sm="6">
                <Card>
                    <CardImg top width="sm" class="img-fluid" src="./waterPicture.jpg" alt="Flowing River" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="6">
                <Card>
                    <CardImg top width="sm" class="img-fluid" src="./waterPicture.jpg" alt="Flowing River" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default RiverCard;
