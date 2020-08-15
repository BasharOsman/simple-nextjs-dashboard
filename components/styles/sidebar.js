import css from 'styled-jsx/css'
import colors from './colors'
const width= "175px";
const { primary, back, dark, darkLight, secondary }=colors
const sidebarStyle = (props) =>{ 
  return  css`  
  :global(.sidebar) {
        z-index:111;
        position: fixed;
        top:0;
        left:0;
        height: 100vh;
        width: ${width};
        background-color: ${back};
        color: #fff;
        text-align: center;
        overflow-x: auto;
      }

    header{
      padding: 2rem;
      border-bottom: 2px solid;
      font-size: 2rem;
    }

    ul{
      list-style: none;
      padding: 0rem;
      text-align: left;
    }

    :global(ul li){
      margin: 0rem 0rem;
      padding: 1.5rem 1rem;
      cursor: pointer;
      border-bottom: 2px solid ${primary};
      transition: 0s;

    }
    :global(ul li.dropdownList){
      display: flex;
      align-items: center;
    }
    :global(ul li.dropdownList>a){
      flex-grow: 1;
      padding-left: .3rem;
    }
    :global(ul li.dropdown-item){
      padding:  1.5rem 1.75rem;
      background-color: ${darkLight};
    }
    :global(ul li:hover){
      background-color: ${secondary};
    }
    :global(ul li:hover > a){
      padding-left: 1rem;
    }
    .ml-150{
      margin-left: -${width};
    }

    #scroll::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
    }
    
    #scroll::-webkit-scrollbar {
      width: 6px;
      background-color: #F5F5F5;
    }
    
    #scroll::-webkit-scrollbar-thumb {
      background-color: #000000;
    }
    @media (max-width: 576px) { 
      .sidebar{
        margin-left: ${props.display ? `${width}`  : `-${width}`};
      }
      .sidebar.mobile {
        margin-left: 0;
        width:  85vw;
      }

      
    
    `}

    export default sidebarStyle;