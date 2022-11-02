import styled from 'styled-components'
import React from 'react'
import Comment from '../components/Comment';

const Container=styled.div``

const NewComment=styled.div`
display:flex;
align-items: center;
gap:10px;`

const Avatar=styled.img`
width:40px;
height: 40px;
border-radius:50%;
`

const Input=styled.input`
border:none;
border-bottom: 1px solid ${({theme})=>theme.soft};
background-color: transparent;
outline: none;
width: 100%;
`

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="https://yt3.ggpht.com/UcTclRY5rATb4jiyXMLfwVsTDCLSgdETDM6Ebgsj3NKULRMlntJ7mnX43f8HixdSJhmqHSRHfg=s900-c-k-c0x00ffffff-no-rj"/>
            <Input placeholder='Add a comment..'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>

    </Container>
  )
}

export default Comments