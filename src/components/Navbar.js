import StyledNavbar from './styles/Navbar.styled';

const Navbar = () => (
    <StyledNavbar>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Log in</a>
        <button className="button-lg-light nav-item" id="sign-up-tab">
            <span>Sign up</span>
        </button>
    </StyledNavbar>
);

export default Navbar;