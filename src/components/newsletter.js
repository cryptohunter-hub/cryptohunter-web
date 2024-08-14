import React, { useState } from "react";
import styled from "styled-components";
import NewsletterLogo from "../assets/img/newsletterLogo.png";



const Newsletter = () => {

  const [email, setEmail] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreement) {
      setMessage('You must agree to the terms.');
      return;
    }
    try {
      const response = await fetch('https://emailcollector.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage('Email address collected!');
      }else if(response.status === 400){
        setMessage('Email already registered');
      } 
      else {
        setMessage('Error collecting email address.');
      }
    } catch (error) {

      setMessage('Error collecting email address.');
    }
  };
    return (
        <Container>
          <LeftSide>
            <Logo src={NewsletterLogo} alt="Crypto Hunter World" />
          </LeftSide>
          <RightSide>
            <Title>Register your interest in our beta testing</Title>
            <Form onSubmit={handleSubmit}>
              <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email" placeholder="Email" />
              <StyledButton>Subscribe</StyledButton>
            </Form>
            <CheckboxContainer>
              <Checkbox 
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
              type="checkbox" id="agreement" />
              <Label htmlFor="agreement">
                I agree to the processing of my personal data and sensitive personal data in the context of the data protection statement here.
              </Label>
            </CheckboxContainer>
            {message && <Message>{message}</Message>}
          </RightSide>
        </Container>
      );
    };
    
    const Container = styled.div`
      display: flex;
      width: 100%;
      height: 405px;
      border: 2px solid #FFFFFF1A;
      background: linear-gradient(180deg, rgba(190, 190, 190, 0.16) 0%, rgba(55, 55, 55, 0) 100%);
      margin-bottom: 83px;
      border-radius: 32px;
      @media (max-width:992px) {
        height: 184px;
      }
    `;
    
    const LeftSide = styled.div`
      flex: 1;
      clip-path: polygon(0 0, 76% 0, 100% 100%, 0% 100%);
      background: linear-gradient(180deg, rgba(190, 190, 190, 0.16) 0%, rgba(55, 55, 55, 0) 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-left-radius: 32px;
    `;
    
    const Logo = styled.img`
      max-width: 100%;
      height: auto;
      @media (max-width:992px) {
        width: 42px;
      }
    `;
    
    const RightSide = styled.div`
      flex: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      @media (max-width: 992px) {
        flex:2.5;
        padding: 8px;
      }
    `;
    
    const Title = styled.h2`
      margin-bottom: 37px;
      font-size: 24px;
      font-weight: 700;
      @media (max-width:992px) {
        font-size: 12px;
        font-weight: 600;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-bottom: 8px;
      }
    `;
    
    const Form = styled.form`
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    
    `;
    
    const Input = styled.input`
      flex: 1;
      padding: 0 23px;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
      background-color: rgba(42, 42, 42, 0.7);
      color: #fff;
      border-radius: 27.5px;
      height: 55px;
      width: 100%;
      max-width: 736px;
      @media (max-width:992px) {
        height: 28px;
        font-size: 12px;
      }

    `;    
    const CheckboxContainer = styled.div`
      display: flex;
      align-items: center;
    `;
    
    const Checkbox = styled.input`
      margin-right: 10px;
      border-radius: 9px;
    `;
    
    const Label = styled.label`
      font-size: 16px;
      font-weight: 600;
      color:#878787;
      @media (max-width:992px) {
        font-size :6px;
      }
    `;
    const StyledButton = styled.button`
        background: var(--button-bg), var(--theme-base-gradient);
        background-clip: padding-box, border-box;
        border:1px solid transparent ;
        height: 55px;
        color: var(--white);
        border-radius: 27.5px;
        display: flex;
        align-items: center;
        padding:0 32px;
        max-height:55px;
        font-size: 16px;
        font-weight: 800;
        cursor: pointer;
        @media (max-width:992px) {
          height:28px;
          font-size: 12px;
          border-radius: 13px;
          padding: 0 8px;
        }
  `;
  const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #fff;
  @media (max-width:992px) {
    font-size: 12px;
  }
`;
    

export default Newsletter;