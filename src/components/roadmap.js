import React,{useState,useRef} from "react";
import styled from "styled-components";
import { ReactComponent as RoadmapSVG } from '../assets/img/roadmap.svg';
import { RoadmapData } from "../constants";
import "@lottiefiles/lottie-player";
const RoadMap = () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: {} });
    const svgref = useRef(null)
    const [showRings, setShowRings] = useState(false);
    const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

    const handleTooltipPosition = (event, step) => {
      const target = event.target;
      const rect = target.getBoundingClientRect();
      const parent = svgref.current.getBoundingClientRect()
      let x = rect.left - parent.left + 38; 
      let y = rect.top - parent.top - 80; 
      if(target.id ===  "step5" && window.innerWidth < 992){
        x = 20
        y = 5
      }
      if(target.id ===  "step4" && window.innerWidth < 992){
        x = 20
        y = 5
      }
      if(target.id ===  "step6" && window.innerWidth < 992){
        x = 20
        y = y - 5
      }
      if(target.id ===  "step2" && window.innerWidth < 992){
        x = 20
        y = 10
      }

      setTooltip({ visible: true, x, y, step });
      
    };
  
    const handleMouseOut = () => {

      setTooltip({ visible: false, x: 0, y: 0, step: {} });
      setShowRings(false);
    };
    const handleMouseOver = (e) => {
           let id = e.target.id
           let name = e.target.name
           
           if(!id) return


           let step = RoadmapData.find(i=>`step${i.step}` === id || `step${i.step}` === name)
           if(step){
            handleTooltipPosition(e,step)
            e.target.setAttribute('fill', '#b9bc9f')
            e.target.setAttribute('stroke','white')
            e.target.nextElementSibling.setAttribute('fill','#2d2e37')

            const rect = e.target.getBoundingClientRect();
            const parent = svgref.current.getBoundingClientRect();
            const x = rect.left - parent.left + rect.width / 2;
            const y = rect.top - parent.top + rect.height / 2;
      
            setRingPosition({ x, y });
            setShowRings(true);
           }
    }   
    const checkMouseOut = (e) =>{
        let id = e.target.id
        let name = e.target.name
        if(!id) return

        let step = RoadmapData.find(i=>`step${i.step}` === id || `step${i.step}` === name)
        if(step) {
          e.target.setAttribute('fill', '#2d2e37')
          e.target.setAttribute('stroke','#b9bc9f')
          e.target.nextElementSibling.setAttribute('fill','#b9bc9f')
          handleMouseOut()
        }
    }
    return(
        <RoadmapContainer id="roadmap">
            <Title>Road Map</Title>
          <SvgContainer ref={svgref}>
              <RoadmapSVG
              style={{width:"100%",height:"auto"}}
                   onMouseOver={handleMouseOver}
                   onMouseOut={checkMouseOut}
                  onClick={handleMouseOver}
              >
              </RoadmapSVG>
              <Tooltip visible={tooltip.visible} style={{ top: `${tooltip.y}px`, left: `${tooltip.x}px` }}>

                {tooltip.step?.data &&
                <>
                            <ListTitle>{tooltip.step.title}</ListTitle>
                             {tooltip.step.subtitle && 
                             <ListItem circle={true}>{tooltip.step.subtitle}</ListItem>
                             }
                              <ListContainer>
                                {React.Children.toArray(
                                  tooltip.step.data.map(i=>
                                    <ListItem>{i}</ListItem>
                                  )
                                )}
                              </ListContainer>
                </>
                }
              </Tooltip>
              {showRings && (
          <>
            <LottieContainer style={{ top: `${ringPosition.y}px`, left: `${ringPosition.x}px` }}>
            <lottie-player
              autoplay
              loop
              src="https://lottie.host/3f33aa08-6ce8-4940-a3b6-140913bc12e0/P4BO01tM12.json"
              style={{ height: '100%', width: '100%', pointerEvents: 'none'}}
            >
            </lottie-player>
          </LottieContainer>
          </>
        )}
        </SvgContainer>
        </RoadmapContainer>
    )

}
const RoadmapContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 9px;
    background: var(--theme-base-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 36px;
    font-weight: 500;
`
const SvgContainer = styled.div`
   position: relative;
   width: 100%;

`
const Tooltip = styled.div`
  position: absolute;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0%, rgba(55, 55, 55, 0.6) 100%);
  border: 2px solid rgba(255,255,255,0.1);
  padding: 24px 32px;
  border-radius: 55px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  color: #898989;
  z-index: 10;
  font-size: 14px;
  backdrop-filter: blur(13px);
  max-width:420px;
  pointer-events: none;
  @media (max-width:992px) {
    font-size: 10px;
    padding: 12px 18px;
    border-radius: 28px;
  }

`;
const LottieContainer = styled.div`
  position: absolute;
  width: 250px;
  pointer-events: none;
 transform: translate(-50%, -50%); 
 
`;
const ListContainer = styled.ul`
  width: 100%;
  padding-inline-start: 8px;
`
const ListItem = styled.li`
  list-style: ${props => props.circle ?  "circle" : "none"};
  font-weight:  ${props => props.circle ?  "bold" : "normal"};;
`
const ListTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin-left: 8px;
`
export default RoadMap;