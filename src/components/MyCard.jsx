import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const MyCard = ({cardImg, cardTitle, cardText, badgeColor, badgeText}) => {
    return (
        <>
            <Card className='cardStyle' style={{ width: '20rem' }}>
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