import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
align-items:center;
justify-content: center;
height:calc(100vh-10px);
color:${({theme})=>theme.text};
flex-direction: column;
margin-top: 10px;
`

const Wrapper=styled.div`
display:flex;
align-items:center;
flex-direction: column;
height:calc(100vh-56px);
background-color:${({theme})=>theme.bgLighter};
padding:5px 60px;
border: 1px solid ${({theme})=>theme.soft};
gap:10px;`

const Title= styled.h2`
font-size:20px;
margin-bottom: -12px;
`

const SubTitle=styled.h4`
font-size:15px;
font-weight: 300;
`

const Input=styled.input`
border:1px solid ${({theme})=>theme.soft};
border-radius:5px;
padding: 10px;
background-color: transparent;
width: 100%;
caret-color: ${({theme})=>theme.text};
`

const Button=styled.button`
border-radius: 5px;
border: none;
padding: 10px 20px;
cursor: pointer;
font-weight: 500;
background-color:${({theme})=>theme.soft} ;
color: ${({theme})=>theme.textSoft};
`


const More=styled.div`
display:flex;
font-size: 10px;
color:${({theme})=>theme.tesxtsoft} ;
`

const Links=styled.div`
margin-left: 50px;
`

const Link=styled.span`
margin-left:30px;`



const Signin = () => {
  return (
    <Container>
    <Wrapper>
    <Title>Sign In</Title>
    <SubTitle>To continue to YouTube</SubTitle>
    <Input placeholder='Username'/>
    <Input placeholder='Password'/>
    <Input type='password' placeholder='Username'/>
   <Button>Sign in</Button>
   <Title>or</Title>
    <Input placeholder='Username'/>
    <Input placeholder='Email'/>
    <Input placeholder='Password'/>
   <Button>Sign up</Button>

    </Wrapper>
    <More>
    English(USA)
    <Links>
    <Link>Help</Link>
    <Link>Privacy</Link>
    <Link>Terms</Link>
    </Links>
    </More>
    </Container>
  )
}

export default Signin