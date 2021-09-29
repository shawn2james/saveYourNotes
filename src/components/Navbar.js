import StyledNavbar from './styles/Navbar.styled';
import StyledButton from './styles/Button.styled';

const Navbar = () => (
    <StyledNavbar>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Log in</a>
        <StyledButton size="lg">Sign up</StyledButton>
    </StyledNavbar>
);

export default Navbar;