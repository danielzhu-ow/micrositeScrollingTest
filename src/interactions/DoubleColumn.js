import styled from "styled-components"
import { sizes } from "../constants/devices"
export { DoubleColumn }

const Container = styled.div`
    display: grid;
    grid-template-columns: 27% 58%;
    column-gap: 15%;
    max-width: 110rem;
    margin: auto;
    text-align: center;
    position: relative;

    @media only screen and (max-width: ${sizes.tablet}) {
        grid-template-columns: 100%;
    }
`

function DoubleColumn({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}