import styled from 'styled-components';

const TickSvg = styled.svg`
width: 60px;
  height: 60px;
  border-radius: 50%;
  display: block;
  stroke-width: 10;
  stroke: red;
  stroke-miterlimit: 10;
  stroke-dashoffset: 0;
  margin: 10% auto;
`;

function Tick() {
    return (
        <div>
            <TickSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </TickSvg >
        </div>
    )
}

export default Tick
