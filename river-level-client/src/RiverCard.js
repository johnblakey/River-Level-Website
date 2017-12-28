/**
 * Created by jb on 12/20/17.
 */
import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const RiverCard = prop => {
    let name = prop.prop.siteName;
    let level = prop.prop.levelValue;
    let time = prop.prop.dateTime;
    let classRiver = prop.prop.class;
    console.log("prop:", prop.prop);
    return (
        <Card>
            <CardBody>
                <div></div>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{level}</CardSubtitle>
                <CardText>{time}</CardText>
                <CardText>Class {classRiver}</CardText>
            </CardBody>
        </Card>
    );
};

export default RiverCard;
