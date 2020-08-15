import css from 'styled-jsx/css'
import colors from './colors'
const width = "175px";

const { back }=colors;
const navbarStyle= (props)=>{
  return css`  
  .navbar {
      z-index:111;
      position: fixed;
      top:0;
      width: calc(100vw - ${width});
      margin-left: ${width};
      padding: 1rem;
      background-color: ${back};
      color: #fff;
      text-align: left;
      display: flex
    }
  .full{
      width: 100vw;
      margin-left: 0;
  }
  .navbar header {
      flex-grow: 1; 
      align-self: center;     
    }
  
  .navbar i{
      margin: 0rem 1rem;
      align-self: center;
      cursor: pointer;
    }
  .navbar span{
      margin-right: 1rem;
    }
  
    @media (max-width: 576px) { 
      .navbar{
        width: 100vw;
        margin-left:  0;
      }
      .full{
        width: 100vw;
        margin-left: 85vw;
      }
    }
  `
} 

export default navbarStyle;