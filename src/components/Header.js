import StyledContainer from './styles/Container.styled';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => (
    <StyledContainer>
        <Logo />
        <Navbar />
    </StyledContainer>
);

export default Header;