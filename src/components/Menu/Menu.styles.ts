import styled from "styled-components";

export const Header = styled.header`
    padding: 8px 74px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Logo = styled.div`
    img {
        height: 44px;
    }
`

export const Nav = styled.nav`
    display: flex;
    gap: 12px;
    margin-top: 16px;

    a {
        font-family: var(--text-font);
        font-weight: 600;
        font-size: 16px;
        color: var(--primary-text-color);
        line-height: 19.5px;
    }
`