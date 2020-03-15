import styled from 'styled-components';
import {darken} from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;  

  li{
    display: flex;
    flex-direction: column;
    background-color:#fff;
    border-radius: 0 5px;
    padding:20px;

    > strong{      
      font-size:16px;
      text-align:left;
      > span{
        display:block;
        font-size:12px;        
        color:#ccc;
      }    
    }
    > span{
      font-size: 21px;
      font-weight: bold;
    }
    button{
      background-color: #0057a0;
      color:#FFF;
      border:0;
      border-radius:0 10px;
      margin-top:auto;

      display: flex;
      align-items: center;
      transition: all 0.2s;
      &:hover{
        border-radius: 10px 0;
        background-color: ${darken(0.04,'#0057a0')};
        div{
          border-radius: 10px 0 0 0;
        }
      }
      div{
        display: flex;
        align-items: center;
        padding: 10px;
        background:rgba(0,0,0,0.1);
        border-radius: 0 0 0 10px;
      }
      span{
        flex:1;
        align-items: center;
        font-weight: bold;
      }
    }
  }

`;
