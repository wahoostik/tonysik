import styled from 'styled-components';
import logo from '@public/TonysikLogoWhite.png';
import smallLogo from '@public/TonysikLogoIconeWhite.png';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import Playlists from '@components/Playlists';

const Sidebar = () => {
    return (
        <Container>
            <div className="top__links">
                <div className="logo">
                    <img src={logo} alt="Tonysik Logo" />
                </div>
                <ul>
                    <li>
                        <Home />
                        <span>Accueil</span>
                    </li>
                    <li>
                        <Search />
                        <span>Rechercher</span>
                    </li>
                    <div>
                        <li>
                            <Library />
                            <span>Mes Librairies</span>
                        </li>
                        <Playlists />
                    </div>
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
    font-weight: 500;
    // min-width: 8rem;
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

    @media (max-width: 1000px) {
        li span {
                display: none; /* Masquer les spans lorsque l'écran est trop petit */
        }
        li {
            justify-content: center; /* Alignement horizontal au centre */
        }
        .logo img {
            content: url(${smallLogo}); // Utilisez le nouveau logo lorsque l'écran est trop petit
            max-inline-size: 50%;
            min-inline-size: 45%;
            block-size: auto;
        }
    }
}
`;

const Library = styled(IoLibrary)`
    font-size: 1rem;

    @media (max-width: 1000px) {
            font-size: 1.5rem;
    }
`;

const Search = styled(MdSearch)`
    font-size: 1rem;

    @media (max-width: 1000px) {
            font-size: 1.5rem;
    }
`;

const Home = styled(MdHomeFilled)`
    font-size: 1rem;

    @media (max-width: 1000px) {
            font-size: 1.5rem;
    }
`;

export default Sidebar;