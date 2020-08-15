import css from 'styled-jsx/css';
import colors, { primary } from 'components/styles/colors'
const { dark, light } = colors;
export default css`
    .Notification{
        position: relative;
    }
    .notList{
        display: none;
        position: absolute;
        left:-220px;
        margin-top: .3rem;
        background-color: #fff;
        color: ${primary};
        width: 250px;
        border-radius: 5px;
        border: 1px solid ${dark};
    }
    .notList header{
        padding:    1rem;
        border-bottom: 2px solid ${dark};
    }
    .badge{
        position: absolute;
        cursor: pointer;
        top: -5px;
        right: -5px;
        font-size: .8rem;
        background-color: green;
        border-radius: 50px;
      }
    ul{
        list-style: none;

    }
    ul li{
        cursor: pointer;
        padding: 1rem;
        border-bottom: 1px solid ${dark};
    }
    ul li:hover{
        background-color: ${light};
    }
    ul li:last-child{
        border-bottom: 0px solid ${dark};
    }
    .btn{
        font-size: 1.5rem;
        background-color: transparent;
        border-color:  transparent;
        color: #fff;
        outline: none;
        cursor: pointer;
    }
    .btn::focus{
        border: 0 solid #fff;
    }
    .btn:hover{
        color: ${dark};
    }
`