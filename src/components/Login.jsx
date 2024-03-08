import styled from 'styled-components';
import logo from '@public/TonysikLogoWhite.png';

const Login = () => {
    return (
        <Container>
            <LogoContainer>
                <img src={logo} alt="Tonysik Logo" />
            </LogoContainer>
            <Button>Connexion</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: #00d4ff;
    background: linear-gradient(160deg, rgba(6,9,61,1) 0%, rgba(15,15,142,1) 35%, rgba(0,212,255,1) 100%);
    gap: 5rem;
img {
    width: auto; /* Garde la largeur de l'image proportionnelle lors du rétrécissement */
    height: auto; /* Garde la hauteur de l'image proportionnelle lors du rétrécissement */
    max-width: 100%; /* Empêche l'image de dépasser la largeur de son conteneur */
    max-height: 20vh; /* Empêche l'image de dépasser la hauteur de son conteneur */
}
`;

const LogoContainer = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
`;

const Button = styled.button`
    padding: 1rem 5rem;
    border-radius: 5rem;
    background: black;
    color: white;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    transition: box-shadow 0.5s ease;
    
    &:hover {
        box-shadow: 0 0 0.8rem white;
        transition: box-shadow 0.5s ease;
    }
`;

export default Login;