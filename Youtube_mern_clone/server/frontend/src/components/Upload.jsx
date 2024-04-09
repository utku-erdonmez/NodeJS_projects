import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import app from '../firebase';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchStart, fetchSuccess } from '../redux/VideoSlice.js';
import axios from 'axios'

const RealContainer=styled.div`
    box-sizing: border-box;//şunu düzelt
      position: absolute;
    //right: 5rem;
    left:0;
    top:0;
    height: 100%;
    width:100%;
    background-color: #0a0a0a97;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Container=styled.div`  
    background-color: ${({theme}) => theme.mainBg};
    border:0.4rem solid black;
    border-radius: 2rem   ;
    //min-width: 35rem;
    width: 45rem;
    padding: 1rem;
    padding-right: 2rem;
`;

const TopDiv=styled.div`
  color: ${({theme}) => theme.text}; 
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
`;
const InputField2=styled.input`
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
  background-color: ${({theme}) => theme.mainBg};

  margin-right: 0;
`;
const H2=styled.h2`
  color: ${({theme}) => theme.text};  
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
  
  const [img,setImg]=useState("")//string bccause it will be url
  const [video,setVideo]=useState("");
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [about,setState]=useState({
    videoName:"",
    videoDesc:"",
    videoImg:"",
    videoVideo:""
  });

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setState(prevState => {return{ ...prevState, [name]: value }});

  }
  const  handleUpload=async (e)=>{
      try{    
        /*if(!about.videoImg){
          const  captureFrame=(videoElement)=> {
            const canvas = document.createElement('canvas');
            canvas.width = "15rem"
            canvas.height = "10rem";
            canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            setImg (canvas.toDataURL()); // Returns a data URL representing the image
        }*/
        
      dispatch(fetchStart())
      e.preventDefault();
      console.log(about)
      const res=await axios("http://localhost:8002/api/video/add",{method:"post",
      data:{
        videoTitle:about.videoName,
        videoDescription:about.videoDesc,
        videoImg:about.videoImg,
        videoVideo:about.videoVideo
      },
      withCredentials:true

      });
      setOpen(false);
     
      dispatch(fetchSuccess(res.data))
      navigate(`/video/${res.data._id}`)
    }
    catch(err){
      console.log(err)
     }
   }

  const uploadFile=async (file,urlType)=>{
    const storage = getStorage(app);
    const fileName=(new Date).getTime().toString()+file.name;
    //console.log(fileName)
    const storageRef=ref(storage,fileName);
    
    const uploadTask = uploadBytesResumable(storageRef, file); 

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        urlType === "videoImg" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          
          setState((prev)=>{return {...prev,[urlType]:downloadURL}})
          console.log('File available at', downloadURL);
        });
      }
    );

  

 }
 useEffect(()=>{video&&uploadFile(video,"videoVideo")},[video])
 useEffect(()=>{img&&uploadFile(img,"videoImg")},[img])
 
  return (
    <RealContainer>
    <Container>
        
        <TopDiv>
          <div style={{fontSize:"3rem",fontWeight:600}}>UPLOAD A VİDEO<div style={{fontSize:"0.8rem",color:"red"}}>(all fields required)</div></div>
            <CloseIcon onClick={(e)=>{setOpen(false)}} style={{color:"#fc0000" ,display:"flex" , justifyContent:"right",fontSize:"4rem",fontWeight:800}}/>
        </TopDiv>
        <H2 >Title: </H2>
        <InputField onChange={handleChange} name="videoName" placeholder='video title'/>
        <H2 >Upload video:{videoPerc>0?videoPerc+"%":""}<div style={{fontSize:"0.8rem"}}>(pls dont try to upload anything else) </div></H2>
        <InputField2 onChange={(e)=>{setVideo(e.target.files[0])}}style={{}} type='file'></InputField2>
        <H2 >Upload video image: </H2>
        <InputField2 onChange={(e)=>{setImg(e.target.files[0])}} style={{ }}type='file'></InputField2>
        <H2 >video desc:{imgPerc>0?imgPerc+"%":""}</H2>
        <InputField onChange={handleChange} name="videoDesc" placeholder='What is this video about?'/>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <UploadButton onClick={handleUpload}>UPLOAD</UploadButton>
        </div>
        </Container> 
        </RealContainer>
  )
}
