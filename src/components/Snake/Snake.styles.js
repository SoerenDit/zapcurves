import styled from 'styled-components'



export const StyledSnake = styled.div`
    background-color: red;
    border-radius: 10px;
    height: 20px;
    width: 20px;
    position: absolute;
    top: ${({top})=> top + 'px'};
    left: ${({left})=> left + 'px'};
`  