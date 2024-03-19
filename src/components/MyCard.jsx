import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const MyCard = ({cardImg, cardTitle, cardText, badgeColor, badgeText}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cardImg} />
                    <Card.Body>
                        <Card.Title>{cardTitle}</Card.Title>
                        <Card.Text>{cardText}</Card.Text>
                        <Tags badgeColor= {badgeColor} badgeText = {badgeText} />
                    </Card.Body>
            </Card>
        </>
    )
}

export default MyCard