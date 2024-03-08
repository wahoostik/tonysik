import styled from 'styled-components';
import logo from '@public/TonysikLogoWhite.png';

const Sidebar = () => {
    return (
        <Container>
            <div className="top__links">
                <div className="logo">
                    <img src={logo} alt="Tonysik Logo" />
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: black;
.logo {
    text-align: center;
    margin: 1rem 0;
img {
    max-inline-size: 80%;
    block-size: auto;
    }
}
`;

export default Sidebar;