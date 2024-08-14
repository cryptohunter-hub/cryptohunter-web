import React, { useState } from 'react';
import styled from 'styled-components';

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FAQCardContainer>
      <QuestionContainer onClick={toggleOpen}>
        <Question>{question}</Question>
        <ToggleIcon isOpen={isOpen}>{isOpen ? '-' : '+'}</ToggleIcon>
      </QuestionContainer>
      {isOpen && <Answer>{answer}</Answer>}
    </FAQCardContainer>
  );
};

const FAQCardContainer = styled.div`
  background: linear-gradient(180deg, rgba(190, 190, 190, 0.16) 0%, rgba(55, 55, 55, 0) 100%);
  border-radius: 26px;
  color: #fff;
  padding: 32px 44px;
  margin-bottom: 20px;
  border: 2px solid rgba(255,255,255,0.1);
  @media (max-width:992px) {
    padding: 16px 24px;
    }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Question = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  @media (max-width:992px) {
        font-size: 16px;
    }

`;

const ToggleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  border-radius: 10px;
  background: ${props =>props.isOpen ?  "var(--theme-base-gradient)" :"transparent" };
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,1);
  font-size: 32px;
  font-weight: 700;
  border:${props=>props.isOpen ? "none" : "2px solid white"};
  @media (max-width:992px) {
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    font-size: 24px;
  }
`;

const Answer = styled.p`
  color: rgba(255,255,255,0.51);
  font-size: 18px;
  font-weight: 400;
  white-space: break-spaces;
  @media (max-width:992px) {
        font-size: 12px;
    }
`;

export default FAQCard;
