import React,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuLabel = styled.label`
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  top: 2rem;
  right: 2rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  transition: all 0.2s;
  &:hover{
    background-color: rgba(255, 255, 255, 0.65);
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 2rem;
  height: 2px;
  display: inline-block;
  transition: all 0.3s;
  top: 50%;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  // ${MenuLabel}:hover &::before {
  //   top: ${(props) => (props.clicked ? "0" : "-1rem")};
  // }
  // ${MenuLabel}:hover &::after {
  //   top: ${(props) => (props.clicked ? "0" : "1rem")};
  // }
`;

const Menu = styled.div`
  color: white;
  width: 30%;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    border-bottom: 3px solid white;
  }
`

const Sidebar = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: ${(props) => !props.clicked ? "100%" : "0"};
  right: ${(props) => !props.clicked ? "-100%" : "0"};
  bottom: 0;
  background: rgba(239, 3, 3, 0.7);
  z-index: 100;
  transition: all 0.8s;
`;

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div>
            <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                <Icon clicked={click}>&nbsp;</Icon>
            </MenuLabel>
            <Sidebar clicked={click}>
                <Menu onClick={handleClick}>
                    <Link to={"/"} >
                        Home
                    </Link>
                </Menu>
                <Menu onClick={handleClick}>
                    <Link to={"/document"}>
                        Document
                    </Link>
                </Menu>
                <Menu onClick={handleClick}>
                  <Link to={'/point'}>
                        Point
                  </Link>
                </Menu>
                <Menu onClick={handleClick}>
                    <Link to={'/timeline'}>
                        Time Line
                    </Link>
                </Menu>
                <Menu onClick={handleClick}>
                    <Link to={"/struktur"} >
                        Struktur
                    </Link>
                </Menu>
                <Menu onClick={handleClick}>Tugas</Menu>
            </Sidebar>
        </div>
    );
}

export default Navbar;