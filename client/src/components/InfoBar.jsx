import styled from "styled-components"
import { poolLength, workOutDistance, setTimerLength } from "../lib/workoutCalc"

export default function InfoBar({ lengthOfWod, switchOne }) {
    return (
        <InfoBarStyled>
            <Infos>
                <SVGDiv>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20.306 20.306">
                        <path d="M7.816 10.297c1.197.148 2.314.529 3.35 1.008.503.235 1.04.542 1.461.782.422.248.85.473 1.282.691l-2.624-5.195-.555-.975-1.959-3.431c-.276-.484-.892-.653-1.377-.377-.486.28-.654.895-.376 1.38l2.166 3.797-.555.492-3.31 1.888-.077.042c.855-.18 1.736-.207 2.574-.102z" />
                        <circle cx="14.955" cy="8.194" r="2.179" />
                        <path d="M20.161 12.613c-.309 1.027-.797 1.98-1.492 2.473-.677.492-1.448.523-2.298.352-.848-.176-1.726-.541-2.586-.975-.436-.219-.864-.443-1.288-.693-.42-.24-.959-.547-1.461-.781-1.035-.479-2.152-.861-3.351-1.01-1.189-.148-2.469-.051-3.623.408-1.158.451-2.138 1.242-2.817 2.174C.578 15.502.116 16.547 0 17.639c1.297-1.719 2.953-2.951 4.67-3.238 1.712-.314 3.495.201 5.224 1.014.451.205.83.412 1.326.678.5.25 1.01.494 1.535.699 1.054.406 2.188.74 3.438.748.62.002 1.278-.084 1.901-.342.625-.25 1.185-.695 1.55-1.227.714-1.092.787-2.307.517-3.358z" />
                    </svg>
                </SVGDiv>
                <InfoText>{workOutDistance(lengthOfWod)}</InfoText>
            </Infos>
            <Infos>
                <SVGDiv>
                    <svg xmlSpace="preserve" width="100%" viewBox="0 0 512 512">
                        <path d="m392.09 122.767 15.446-24.272c6.858-10.778 3.681-25.076-7.097-31.935-10.777-6.86-25.076-3.681-31.935 7.099l-15.409 24.215c-22.708-11.316-47.642-18.798-73.962-21.58V46.265h1.448c12.775 0 23.133-10.357 23.133-23.133S293.356 0 280.581 0h-49.163c-12.775 0-23.133 10.357-23.133 23.133s10.357 23.133 23.133 23.133h1.45v30.029C123.239 87.885 37.535 180.886 37.535 293.535 37.535 413.997 135.538 512 256 512s218.465-98.003 218.465-218.465c0-69.048-32.206-130.705-82.375-170.768zM256 465.735c-94.951 0-172.2-77.249-172.2-172.2s77.249-172.2 172.2-172.2 172.2 77.249 172.2 172.2-77.249 172.2-172.2 172.2z" />
                        <path d="M333.172 205.084c-9.623-8.397-24.238-7.407-32.638 2.222l-61.964 71.02c-8.399 9.626-7.404 24.24 2.222 32.638 9.626 8.399 24.24 7.404 32.638-2.222l61.964-71.02c8.4-9.626 7.404-24.238-2.222-32.638z" />
                    </svg>
                </SVGDiv>
                <InfoText>{setTimerLength(lengthOfWod)}</InfoText>
            </Infos>
            <Infos>
                <SVGDiv>
                    <svg xmlSpace="preserve" width="100%" viewBox="0 0 179.006 179.006">
                        <path fill="#010002" d="m52.258 67.769.006-30.545L0 89.506l52.264 52.276-.006-30.545 74.478.012v30.533l52.27-52.276-52.27-52.282v30.545z" />
                    </svg>
                </SVGDiv>
                <InfoText>{poolLength(switchOne)}</InfoText>
            </Infos>
        </InfoBarStyled>
    )
}

const InfoBarStyled = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0px 16px 16px 16px;
    gap: 15px;
`

const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    padding: 0px 16px 0px 16px;
`

const InfoText = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    font-weight: bold;
`
const SVGDiv = styled.div`
    width: 42px;
`
