import { ITitleProps } from 'interfaces/ITitle';
import styled from 'styled-components';

const StyledSmallTitle = styled.h4<ITitleProps>`
    font-size: ${({ size }) => size || '22px'};
    font-weight: 400;
    color: var(--primary-color);
    opacity: 50%;
`;

const SmallTitle: React.FC<ITitleProps> = ({ size, children }) => {
    return <StyledSmallTitle size={size}>{children}</StyledSmallTitle>;
};

export default SmallTitle;
