import styled from "styled-components";


export const ContainerComments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    height: 400px;
    @media screen and (max-width: 768px) {
        height: 450px;
    }
    @media screen and (max-width: 542px) {
        height: 500px;
    }
`;

export const Title = styled.h2`
    font-size: 34px;
    font-weight: 700;
    color: hsl(228, 39%, 23%);
    margin-bottom: 4rem;
`;

export const SectionComments = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 2rem;
    @media screen and (max-width: 768px) {
        width: 60%;
        justify-content: center;
        align-items: center;
    }
`;

export const Card = styled.div`
    background-color: hsl(2, 30%, 98%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    
    @media screen and (max-width: 1440px) {
        width: 420px;
    }
    @media screen and (max-width: 1024px) {
        width: 300px;
    }
    @media screen and (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
`;

export const Picture = styled.img`
    width: 60px;
    margin-top: -2rem;
    @media screen and (max-width: 768px) {
        margin-top: 0rem;
       
    }
`;

export const Name = styled.p`
    color: hsl(228, 39%, 23%);
    font-weight: 700;
`;

export const Comment = styled.p`
    color: hsl(227, 12%, 61%);
    font-weight: 500;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

