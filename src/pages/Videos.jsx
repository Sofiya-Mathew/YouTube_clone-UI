import React from 'react'
import styled from 'styled-components'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import Comments from '../components/Comments';
import Cards from '../components/Cards'
const Container=styled.div`
display:flex;
gap:24px;`

const Content=styled.div`
flex:5;`

const VideoWrapper=styled.div``

const Title=styled.h1`
font-size:20px;
font-weight:400;
color:${({theme})=>theme.text}
`
const Details=styled.div`
display:flex;
align-items:center;
justify-content:space-between`

const Info=styled.div`
color:${({theme})=>theme.textSoft};
margin-top: -15px;
font-size: 12px;
`
const Buttons=styled.div`
display: flex;
gap:20px;
color:${({theme})=>theme.text};
margin-top: -15px;
margin-right: 15px;
`
const Button=styled.div`
display:flex;
align-items:center;
gap:5px;
cursor: pointer;
background-color:${({theme}) =>theme.bgLighter};
border-radius:20%;
color:${({theme})=>theme.text};
padding: 5px 5px;
`
const Hr=styled.hr`
margin:10px 0px;
border:0.5px solid ${({theme})=>theme.soft}`

const Channel=styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo=styled.div`
display:flex;
gap:20px;`

const Image=styled.img`
width:40px;
height: 40px;
border-radius:50%;
`
const ChannelDetail=styled.div`
display:flex;
flex-direction:column;
color:${({theme})=>theme.text};
`
const ChannelName=styled.span`
font-weight:500`

const ChannelCounter=styled.span`
margin-top:5px;
margin-bottom: 5px;
font-size: 12px;
color:${({theme})=>theme.textSoft}
`
const Description=styled.p`
font-size:14px;`

const Subscribe=styled.button`
background-color: red;
color: white;
height: fit-content;
font-weight: 500;
border: none;
border-radius: 3px;
padding: 10px 20px;
cursor: pointer;
`
const Recommends=styled.div`
flex:2;
`

const Videos = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
          width='100%'
          height='500'
          src='https://miro.medium.com/max/1400/0*3C6CUn1FEC_raM8c'
          title="youtube player"
          frameBorder='0'
          scrolling="no"
          allow='accelerometer; autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;'
          allowFullScreen
          ></iframe>
          </VideoWrapper>
          <Title>title</Title>
          <Details>
            <Info>48,063 views</Info>
            <Buttons>
              <Button>
               <ThumbUpAltOutlinedIcon/>
              Like
              </Button>
              <Button>
              <ThumbDownOffAltOutlinedIcon/>
              dislike
              </Button>
              <Button>
              <ReplyOutlinedIcon/> Share
              </Button>
              <Button>
              <SaveAltOutlinedIcon/>Save
              </Button>
            </Buttons>
          </Details>
          <Hr/>
          <Channel>
          <ChannelInfo>
          <Image src='https://yt3.ggpht.com/UcTclRY5rATb4jiyXMLfwVsTDCLSgdETDM6Ebgsj3NKULRMlntJ7mnX43f8HixdSJhmqHSRHfg=s900-c-k-c0x00ffffff-no-rj'/>
          <ChannelDetail>
          <ChannelName>sofiya</ChannelName>
          <ChannelCounter>200K Subscribers</ChannelCounter>
          <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem voluptatem explicabo, voluptates ad suscipit praesentium amet non in officiis id corporis odio, aut consequatur vero, sequi pariatur? Harum, voluptatibus delectus?</Description>
          </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
          </Channel>
          <Hr/>
          <Comments/>
          
      </Content>
      <Recommends>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>
      <Cards type="sm"/>

      </Recommends>
    </Container>
  )
}

export default Videos