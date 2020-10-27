import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  li {
    &:hover {
      border-bottom: 3px solid var(--teal);
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li className="logo-item">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/design">Design</Link>
        </li>
        <li>
          <Link to="/frontend">Front-End</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
