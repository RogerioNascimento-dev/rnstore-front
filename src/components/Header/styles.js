import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {darken} from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin: 50px 0;  
`;
export const Logo = styled(Link)`
  text-decoration: none;
  color:#FFF;
  font-size:20px;
  div{
    padding: 10px 15px;
    border-radius: 0 10px;
    background-color:#0057a0;
    transition: all 0.2s;
    &:hover{
        border-radius: 10px 0;
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
