import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
width:${(props)=>props.type!=='sm'&& '272px'};
margin-bottom:${(props)=>props.type==='sm' ? "6px" :"44px"};
display: ${(props)=>props.type==='sm' && 'flex'};
`

const Image=styled.img`
width:100%;
height: ${(props)=>props.type==='sm'? "120px" :"202px" };
background-color:#999;
flex: ${(props)=>props.type==='sm' &&"1" } ;
border-radius: ${(props)=>props.type==='sm' &&"7px" };
`

const Details=styled.div`
display:flex;
margin-top:9px;
gap:12px;
flex: ${(props)=>props.type==='sm' &&"1" } ;
margin-left: ${(props)=>props.type==='sm' &&"5px" };
`

const ChannelImage=styled.img`
width:36px;
height: 36px;
border-radius:50%;
background-color:#999;
display:${(props)=>props.type==='sm' && 'none'}`

const Texts=styled.div`
`

const Title=styled.h1`
font-size:16px;
font-weight:500;
margin-top: -.5px;
color:${({theme})=>theme.text}`

const ChannelName=styled.h2`
font-size:14px;
color:${({theme})=>theme.textSoft};
margin:9px 0;
margin-top: -.5px;
`

const Info=styled.div`
font-size:14px;
margin-top: -.5px;
color:${({theme})=>theme.textSoft};
 `



const Cards = ({type}) => {
  return (
    <Link to='/video/test' style={{textDecoration:'none'}}>
    <Container type={type}>
        <Image type={type} src="https://miro.medium.com/max/1400/0*3C6CUn1FEC_raM8c" />
        <Details type={type}>
          <ChannelImage type={type} src='https://yt3.ggpht.com/UcTclRY5rATb4jiyXMLfwVsTDCLSgdETDM6Ebgsj3NKULRMlntJ7mnX43f8HixdSJhmqHSRHfg=s900-c-k-c0x00ffffff-no-rj'/>
          <Texts>
            <Title>test title</Title>
              <ChannelName>sofiya</ChannelName>
              <Info>some info</Info>
            
          </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Cards