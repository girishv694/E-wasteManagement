import styled from "styled-components";

export const Formstyle=styled.form`

width:90%;
margin: auto;


& input{
    width:100%;
    padding:15px;
    border:none;
    background:white;
    border-radius:6px;

    font-family: 'Avenir_Next';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    outline:none;
}
& input[type=submit]:hover{
    background:#41C8B7;
}


`

export const Forms=({children,funct})=>{
    return <>

<Formstyle onSubmit={(e)=>{
    funct(e)
}}>
{children}


</Formstyle>
        

    </>
}
