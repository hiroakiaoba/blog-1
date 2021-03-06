import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Size, Color, Style } from '../constants'
import config from '../config'

const HeaderComponent: React.FC = () => (
  <Container>
    <LogoArea>
      <StyledLink to="/">
        <Title>{config.blogTitle}</Title>
      </StyledLink>
      <Info>{config.blogDescription}</Info>
    </LogoArea>
  </Container>
)

const Container = styled.div`
  height: ${Size.header.height}px;
  background-color: ${Color.primary};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
`
const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin: 0 auto;

  ${Style.layoutWidthStyle}

  @media (max-width: ${Size.breakPoint.mobile}px) {
    align-items: center;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`
const Title = styled.h1`
  font-size: ${Size.font.ll}rem;
  color: #fff;
  letter-spacing: 2.66px;
  text-shadow: 0 1px 3px rgba(130, 200, 200, 0.5);
`
const Info = styled.p`
  font-size: ${Size.font.ss}rem;
  color: #fff;
`

export default HeaderComponent
