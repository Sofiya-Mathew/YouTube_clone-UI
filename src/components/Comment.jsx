import styled from 'styled-components'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';


const Container=styled.div`
display:flex;
gap: 10px;
margin: 30px 0px;
`
const Avatar=styled.img`
width:40px;
height: 40px;
border-radius:50%;
`
const Details=styled.div`
display:flex;
flex-direction:column;
gap:10px;
color:${({theme})=>theme.text};
`

const Name=styled.span`
font-size: 13px;
font-weight: 500;
`

const Date=styled.span`
color:${({theme})=>theme.textSoft};
font-size: 12px;
font-weight: 500;
margin-left:5px;
`

const Text=styled.span`
font-size:14px;

`
const Buttons=styled.div`
display: flex;
gap:20px;
color:${({theme})=>theme.text};
`
const Button=styled.div`
display:flex;
align-items:center;
gap:5px;
cursor: pointer;
border-radius:20%;
color:${({theme})=>theme.text};
font-size: 12px;
`


const Comment = () => {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/UcTclRY5rATb4jiyXMLfwVsTDCLSgdETDM6Ebgsj3NKULRMlntJ7mnX43f8HixdSJhmqHSRHfg=s900-c-k-c0x00ffffff-no-rj'/>
      <Details>
        <Name>sofiya<Date>4 months ago</Date></Name>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt quibusdam a quos obcaecati voluptatum, modi consequuntur nisi quisquam quas, aliquam impedit molestiae, at corrupti ut suscipit itaque nulla enim.</Text>
        <Buttons>
          <Button>
            <ThumbUpAltOutlinedIcon style={{ fontSize: 22 }}/>10
          </Button>
          <Button>
          <ThumbDownOffAltOutlinedIcon style={{ fontSize: 22 }}/>
          </Button>
          <Button>
          Reply
          </Button>

        </Buttons>
      </Details>
    </Container>
  )
}

export default Comment