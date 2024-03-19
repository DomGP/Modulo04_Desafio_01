import Button from 'react-bootstrap/Button';

const Footer = ({footerText, buttonColor, buttonText, footerIcon, footerTextII}) => {
    return (
        <>
            <footer className="footer mt-5 mb-5 py-3 bg-light footerBox">
                <div className="container">
                    <p className="text-muted">{footerText}</p>
                    <Button variant='info'>{buttonText}</Button>
                    {/* <img src={footerIcon} alt="" /> */}
                </div>
            </footer>
            <footer className="footer pt-3 fixed-bottom footerText">
                <div className="container">
                    <p className="text-muted">{footerTextII}</p>
                    {/* <img src={footerIcon} alt="" /> */}
                </div>
            </footer>
        </>
    )
}
export default Footer