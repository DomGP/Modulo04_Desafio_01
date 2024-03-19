const Footer = ({footerText, footerIcon}) => {
    return (
        <>
            <footer className="footer mt-3 py-3 bg-light">
                <div className="container">
                    <p className="text-muted">{footerText}</p>
                    <img src={footerIcon} alt="" />
                </div>
            </footer>
        </>
    )
}
export default Footer