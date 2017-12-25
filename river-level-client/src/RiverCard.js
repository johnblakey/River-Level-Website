/**
 * Created by jb on 12/20/17.
 */
import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const RiverCard = props => {
    return (
        <Card>
            <CardBody>
                <div></div>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.level}</CardSubtitle>
                <CardText>{props.time}</CardText>
            </CardBody>
        </Card>
    );
};

export default RiverCard;
