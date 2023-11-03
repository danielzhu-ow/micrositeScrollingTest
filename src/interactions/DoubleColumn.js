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

    @media only screen and (max-width: ${sizes.mobileL}) {
        grid-template-columns: auto;
    }
`

function DoubleColumn({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}