import { ITitleProps } from "interfaces/ITitle";
import styled from "styled-components";

const StyledTitle = styled.h5<ITitleProps>`
    font-family: var(--title-font);
    font-weight: 900;
    color: var(--primary-color);
    font-size: ${({ size }) => size || '82px'};
`

const Title: React.FC<ITitleProps> = ({ size, children }) => {
    return <StyledTitle size={size}>{children}</StyledTitle>
}

export default Title