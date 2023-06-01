import styled from "styled-components";


export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const SectionLogo = styled.div`
    width: 30%;
`;

export const Logo = styled.img``;

export const SectionPaths = styled.div``;

export const ListPaths = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    width: 600px;
`;

export const Path = styled.li`
    font-size: 15px;
    font-weight: 500;
    color:hsl(228, 39%, 23%);
    cursor: pointer;

    &:hover{
        color: hsl(227, 12%, 61%);
    }
`;

export const SectionButton = styled.div`
    width: 30%;
`;

export const Button = styled.button`
    background-color:  hsl(12, 88%, 59%);
    border: none;
    border-radius: 15px;
    height: 35px;
    width: 130px;
    color: white;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;

    &:hover{
        
        opacity: 0.6;
    }
`;