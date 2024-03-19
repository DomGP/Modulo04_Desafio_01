import Badge from 'react-bootstrap/Badge';

const Tags = ({badgeColor,badgeText}) => {
    return (
        <>
            <Badge bg={badgeColor}>{badgeText}</Badge>
        </>
    )
}

export default Tags