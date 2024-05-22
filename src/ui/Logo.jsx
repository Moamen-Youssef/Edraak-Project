import { useContext } from "react"
import { FaBrain } from "react-icons/fa"
import styled from "styled-components"
import { LanguageContextAPI } from "../contexts/LanguageContext"

  const  StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;    
    color: var(--color-grey-50);
    & h1{
          color: var(--color-grey-500);
          font-size: 5rem;
        }
        & svg {
      width: 3rem;
      height: 3rem;
      color: var(--color-brand-100);
    }
    `
function Logo() {

const {appLang} = useContext(LanguageContextAPI);
    return (
        <StyledLogo>
            <FaBrain />
            <h1>{appLang === "ar"? "إدراك" : "Edraak"}</h1>
        </StyledLogo>
    )
}

export default Logo
