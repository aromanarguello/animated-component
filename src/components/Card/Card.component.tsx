import * as React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
  width: ${(props: any) => props.width}px;
  height: ${(props: any) => props.height}px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  text-align: center;
`

interface ICardProps {
  children?: React.ReactNode
  width?: number
  height?: number
}

const Card: React.FC<ICardProps> = ({ width, height, children }) => {
  return (
    <StyledCard width={width} height={height}>
      {children}
    </StyledCard>
  )
}

export default Card
