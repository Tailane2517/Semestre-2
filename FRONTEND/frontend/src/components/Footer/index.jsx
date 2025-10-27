import '.styles.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy;{new Date().getFullYear()}
                <br /> Desenvolvido por SENAI.
                </p> 
        </footer>)
}

export default Footer;