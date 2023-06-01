import styled from "styled-components";

export const ContainerSecondContent = styled.div`
    display: flex;
    margin-top: 5rem;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const SectionFirstText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    @media screen and (max-width: 1024px) {
        margin-left: 1.5rem;
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
    width: 400px;
    text-align: left;
    color: hsl(227, 12%, 61%);
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        text-align: center;
        width: 500px;
    }
    @media screen and (max-width: 542px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
    }
`;

export const SectionSecondText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`;

export const ListOption = styled.div`
    display: flex;
    width: 900px;
    @media screen and (max-width: 1440px) {
        width: 700px;
    }
    @media screen and (max-width: 1024px) {
        width: 500px;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 542px) {
        width: 300px;
    }
`;

export const Label = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const TitleSection = styled.p`
    color: hsl(228, 39%, 23%);
    font-weight: 700;
    margin-bottom: 0.5rem;
`;

export const Number = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.7rem;
    margin-right: 2rem;
    border: 1px solid red;
    height: 30px;
    min-width: 70px;
    background-color: hsl(12, 88%, 59%);
    border-radius: 15px;
    color: #fff;
    font-weight: 500;
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
    width: 400px;
    text-align: left;
    color: hsl(227, 12%, 61%);
    @media screen and (max-width: 1024px) {
        width: 300px;
    }
    @media screen and (max-width: 542px) {
        width: 200px;
    }
`;

export const ContainerText = styled.div`
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