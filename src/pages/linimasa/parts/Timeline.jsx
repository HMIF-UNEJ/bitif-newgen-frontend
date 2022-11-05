import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import styled, { keyframes } from "styled-components"

const TopBottom = keyframes`
  0%{
    height: 0;
  }
  100%{
    height: 100%;
  }
`

const moveDown = keyframes`
  0%{
    opacity: 0;
    transform: scale(95%);
  }
  100%{
    opacity: 1;
    transform: scale(100%);
  }
`

const TimeLine = styled.div`
  margin: 20px auto;
  height: 100%;
  overflow: hidden;
  max-width: 1200px;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    height: 100%;
    width: 6px;
    background: #fff;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: ${TopBottom} 6s linear forwards;
    //margin-left: -30px;
  }
`

const Container = styled.div`
  position: relative;
  //background: #23d5ab;
  opacity: 0;
  padding: 0 50px;
  width: 50%;
  left: ${(props) => (props.isRight) ? "50%" : "0"};
  animation: ${moveDown} 1s linear forwards;
  animation-delay: ${(props) => (props.delay) ? props.delay+"s" : "1s"};
`

const ChildContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    top: 22%;
    //left: -15px;
    ${(props) => (props.isRight) ? "left: -15px;" : "right: -15px;"}
    
    //background: white;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    ${(props) => (props.isRight) ? "border-right: 15px solid white;": "border-left: 15px solid white;"}
    
    
  }
`

const Circle = styled.div`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background: white;
  position: absolute;
  top: 20%;
  ${(props) => props.isRight ? "left: 0;" : "right: 0;"}
  ${(props) => props.isRight ? "transform: translateX(-50%);" : "transform: translateX(50%);"}
`



export default function PartTimeline(){
    const [timelines, setTimelines] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await axios({
                method: "get",
                url: "https://api-developer-bitif.hmifunej.id/api/get-timeline"
            })
            setTimelines(response.data.timelines)
        }
        
        getData()
    }, [])

    return (
        <div className={"relative py-20 px-5"}>
            <TimeLine>
                {/* container */}
                {
                    timelines.map((item, index) => (
                        <Container key={index} isRight={(index+1) % 2 !== 0} delay={index+1}>
                            <Circle isRight={(index+1) % 2 !== 0} />
                            <ChildContainer isRight={(index+1) % 2 !== 0}>
                                <h2 className={"font-bold text-xl"}>{ item.name }</h2>
                                <p className="mt-3">{item.time + ", " + item.date}</p>
                                <p className={"text-gray-500 text-sm"}>Di <b>{item.location}</b></p>
                            </ChildContainer>
                        </Container>
                    ))
                }
{/* 
                <Container isRight={false} delay={2}>
                    <Circle isRight={false} />
                    <ChildContainer isRight={false}>
                        <h2 className={"font-bold text-xl"}>Pertemuan pertama</h2>
                        <small className={"text-gray-500"}>12 - November - 2022</small>
                    </ChildContainer>
                </Container> */}


                {/* <Container isRight={true} delay={3}>
                    <Circle isRight={true} />
                    <ChildContainer isRight={true}>
                        <h2 className={"font-bold text-xl"}>Pertemuan kedua</h2>
                        <small className={"text-gray-500"}>19 - November - 2022</small>
                    </ChildContainer>
                </Container> */}
            </TimeLine>
        </div>
    )
}