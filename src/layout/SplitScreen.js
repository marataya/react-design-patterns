import styledComponents from "styled-components"

const Container = styledComponents.div`
  display: flex;
  justify-content: center;
`

const Pane = styledComponents.div`
  flex: ${props => props.weight};
  border: 1px solid green;
  margin: 0 15px;
`

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  )
}