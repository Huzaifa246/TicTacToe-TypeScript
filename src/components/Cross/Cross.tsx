import styled from "styled-components";

const CrossSvg = styled.svg`
    stroke: #23880a;
`;


const Cross = () => {
    return (
        <CrossSvg width="70" height="70" viewBox="-50 -50 100 100">
            <line x1="-40" y1="-40" x2="40" y2="40" />
            <line x1="-40" y1="40" x2="40" y2="-40" />
        </CrossSvg>
    );
};

export default Cross;
