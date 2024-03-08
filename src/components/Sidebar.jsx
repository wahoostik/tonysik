import styled from 'styled-components';
import logo from '@public/TonysikLogoWhite.png';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';

const Sidebar = () => {
    return (
        <Container>
            <div className="top__links">
                <div className="logo">
                    <img src={logo} alt="Tonysik Logo" />
                </div>
                <ul>
                    <li>
                        <MdHomeFilled />
                        <span>Accueil</span>
                    </li>
                    <li>
                        <MdSearch />
                        <span>Rechercher</span>
                    </li>
                    <li>
                        <IoLibrary />
                        <span>Ma Librairie</span>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
.top__links {
    display: flex;
    flex-direction: column;
.logo {
    text-align: center;
    margin: 1rem 0;
img {
    max-inline-size: 80%;
    block-size: auto;
    }
}
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    li {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
            color: #a5c5ff;
            }
        }
    }
}
`;

export default Sidebar;