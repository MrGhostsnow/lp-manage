import styled from "styled-components";


export const ContainerFirstContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const SectionText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    @media screen and (max-width: 1024px) {
        margin-left: 1.5rem;
    }
    @media screen and (max-width: 768px) {
        text-align: center;
        margin-bottom: 2rem;
    }
`;

export const Text = styled.div`
    width: 500px;
    @media screen and (max-width: 542px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 542px) {
        width: 300px;
    }
`;

export const Title = styled.h2`
    font-size: 64px;
    font-weight: 700;
    width: 600px;
    text-align: left;
    color: hsl(228, 39%, 23%);
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
        width: 500px;
    }
    @media screen and (max-width: 768px) {
        text-align: center;
    }
    @media screen and (max-width: 542px) {
        width: 300px;
    }

`;

export const Subtitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    width: 300px;
    text-align: left;
    color: hsl(227, 12%, 61%);
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        text-align: center;
        width: 500px;
    }
    @media screen and (max-width: 542px) {
        width: 300px;
        margin-right: 0;
    }
`;

export const SectionImages = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1024px) {
        width: 50%;
        align-items: left;
        justify-content: left;
    }
`;

export const Images = styled.img`
@media screen and (max-width: 1024px) {
    width: 500px;
}
@media screen and (max-width: 542px) {
    width: 300px;
}
`