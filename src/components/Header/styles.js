import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {darken} from 'polished';

export const Container = styled.header`
  
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom: 10px;  
  background-color: #0057a0;  
 > div{
    flex:1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div.containerHeader{
    max-width: 1020px !important;
    padding 10px 20px;
    margin: 0 auto;
    > div{
      flex:1;
      display: flex;
      flex-direction:row;      
    }
  }
`;
export const Menu = styled(Link)`
  text-decoration: none;
  color:#FFF;
  font-size:20px;
  :first-child{
    border-right: solid 2px #FFF;
  }
  div{
    padding: 10px 15px;    
    background-color:#0057a0;
    transition: all 0.2s;
    &:hover{        
        background-color: ${darken(0.04,'#0057a0')};
      }
  }  
`;
export const Cart =  styled(Link)`
  display: flex;
  align-items:center;
  text-decoration: none;
  color:#fff;
  transition: opacity .2s;
  &:hover{
    opacity: 0.7;
  }
  div{
    text-align: right;
    margin-right: 10px;
    strong{
      display:block;      
    }
    span{
      font-size: 12px;
      color:#04ff01; 
    }
  }
`;
