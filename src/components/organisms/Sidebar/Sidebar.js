import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import PropTypes from 'prop-types';
import logoIcon from 'assets/icons/logo.svg';

const StyledSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 150px;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'note')};
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ sidebarType }) => (
  <StyledSidebar activeColor={sidebarType}>
    <StyledLogoLink to="/" />
    <StyledLinksList>
      {/* as={Link} oznacza, że możemy wykorzystać komponent jako inny. w tym przypadku Link */}
      <li>
        <ButtonIcon as={Link} to="/" icon={penIcon} />
      </li>
      <li>
        <ButtonIcon as={Link} to="/twitters" icon={twitterIcon} />
      </li>
      <li>
        <ButtonIcon as={Link} to="/articles" icon={bulbIcon} />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
  </StyledSidebar>
);

Sidebar.propTypes = {
  sidebarType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Sidebar.defaultProps = {
  sidebarType: 'note',
};

export default Sidebar;
