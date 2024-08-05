import styled from "styled-components";

export const Container = styled.div`
    width: 585px;
    height: 462px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
        font-size: 16px;
        opacity: 50%;
        line-height: 28px;
        margin-right: 90px;
        padding: 8px;
    }

`

export const NewsletterSubmit = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const Input = styled.input`
    height: 75px;
    border-color: #FFFFFF;
    border: none;
    width: 100%;
    padding: 24px;
    padding-left: 48px;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    background-image: url("/imgs/mail.png");
    background-repeat: no-repeat;
    background-position: 12px center; 
`

export const Button = styled.button`
    flex-grow: 1;
    height: 75px;
    width: auto;
    background-color: var(--secundary-text-color);
    box-shadow: 10px 10px 30px 0px rgba(255, 203, 71, 0.3);
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`
