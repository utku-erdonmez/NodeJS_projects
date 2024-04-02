import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';


const Container=styled.div`
    
    
 
    position: absolute;
    right: 5rem;
    top:5rem;
    background-color: #3d3d3df0;
    border-radius: 2rem   ;
   
    min-width: 35rem;

    padding: 1rem;
    padding-right: 2rem;
    
    
`;

const TopDiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const InputField=styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  appearance: none;
  border: none;
  height:2rem;
  font-size: 2rem;
  margin-top: 1rem;
  
  padding: 0.5rem;
  background-color: grey;
  margin-right: 0;
`
const H2=styled.h2`
  font-size: 2rem;
  margin:1rem 0rem;
`

const UploadButton=styled.button`
margin: 1rem;
  font-size: 3rem;
  background-color: grey;
  border: none;
  padding:1rem;
  border-radius: 2rem;
  font-weight: 500;
  
`
export const Upload = ({setOpen}) => {
  
 
  return (
    <Container>
        
        <TopDiv>
          <div style={{fontSize:"3rem",fontWeight:600}}>UPLOAD A VİDEO </div>
            <CloseIcon onClick={(e)=>{setOpen(false)}} style={{display:"flex" , justifyContent:"right",fontSize:"4rem",fontWeight:800}}/>
        </TopDiv>
        <H2 >Title: </H2>
        <InputField placeholder='video title'/>
        <H2 >Upload video: </H2>(pls dont try to upload anything else)
        <InputField style={{ backgroundColor:"#3d3d3df0"}}type='file'></InputField>
        <H2 >Upload video image: </H2>
        <InputField style={{ backgroundColor:"#3d3d3df0"}}type='file'></InputField>
        <H2 >video desc:</H2>
        <InputField placeholder='What is this video about?'/>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><UploadButton>UPLOAD</UploadButton></div>
        </Container> 
  )
}
