import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as RoadmapSVG } from '../assets/img/roadmap.svg';

const Tooltip = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  z-index: 10;
`;



const RoadmapComponent = () => {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });

  const handleMouseOver = (event, text) => {
    const { clientX: x, clientY: y } = event;
    setTooltip({ visible: true, x, y, text });
  };

  const handleMouseOut = () => {
    setTooltip({ visible: false, x: 0, y: 0, text: '' });
  };

  return (
    <div style={{ position: 'relative' }}>
      <RoadmapSVG
        onMouseOver={(e) => {
            if (e.target.id === 'step1') {
              handleMouseOver(e, 'Aşama 1');
            }
          }}
          onMouseOut={(e) => {
            if (e.target.id === 'step1') {
              handleMouseOut();
            }
          }}
      >
      </RoadmapSVG>
      <Tooltip visible={tooltip.visible} style={{ top: tooltip.y, left: tooltip.x }}>
        {tooltip.text}
      </Tooltip>
    </div>
  );
};

export default RoadmapComponent;