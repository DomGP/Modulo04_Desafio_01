import Button from 'react-bootstrap/Button';

const Footer = ({footerText, buttonColor, buttonText, footerIcon, footerTextDos}) => {
    return (
        <>
            <footer className="footer mt-5 mb-5 py-3 bg-light footerBox">
                <div className="container">
                    <p className="text-muted">{footerText}</p>
                    <Button className='buttonStyle' variant={buttonColor}>{buttonText}</Button>
                    {/* <img src={footerIcon} alt="" /> */}
                </div>
            </footer>
            <footer className="footer pt-3 fixed-bottom footerText">
                <div className="container">
                    <p className="text-muted">{footerTextDos}</p>
                    {/* <img src={footerIcon} alt="" /> */}
                </div>
            </footer>
        </>
    )
}
export default Footer