/**
 * Created by jb on 12/20/17.
 */
import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const RiverCard = props => {
    return (
        <Card>
            <CardBody>
                <div></div>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    );
};

export default RiverCard;
