import styled from "styled-components";


export const ContainerComments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    height: 400px;
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
`;

export const Card = styled.div`
    background-color: hsl(2, 30%, 98%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 500px;

`;

export const Picture = styled.img`
    width: 60px;
    margin-top: -2rem;
`;

export const Name = styled.p`
    color: hsl(228, 39%, 23%);
    font-weight: 700;
`;

export const Comment = styled.p`
    color: hsl(227, 12%, 61%);
    font-weight: 500;
`;

