import styled from "styled-components";

export const ContainerBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(12, 88%, 59%);
    height: 200px;
    margin-top: 5rem;
`;

export const Text = styled.h2`
    font-size: 34px;
    font-weight: 700;
    color: #fff;
    width: 25%;
    text-align: left;
    margin-left: 8rem;
`;

export const Button = styled.button`
    background-color:  #fff;
    border: none;
    border-radius: 15px;
    height: 35px;
    width: 130px;
    color: hsl(12, 88%, 59%);
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    margin-right: 8rem;

    &:hover{
        opacity: 0.6;
    }

`;