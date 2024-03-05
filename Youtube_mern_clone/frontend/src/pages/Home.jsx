import React from "react"
import {Card} from '../components/Card'
import styled from "styled-components"

const Container=styled.div`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:1rem;
`
export const Home=()=>{
    return(<Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> <Card/>
        <Card/>
        <Card/>

        <Card/>
        <Card/><Card/>

        
        
         </Container>)
}