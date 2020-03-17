import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  padding:30px;
  background:#fff;
  border-radius: 4px; 

  > select{
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    background-color:#FFF;
    margin-bottom: 5px;
    font-size:18px;
    option{
      text-align:center;
    }
  }
  > div{
    background-color:#FFF;
    padding:10px;
    border-radius:5px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.5);
    margin-bottom: 10px;
    p{
      text-align: center;
    }
  }
  footer{
    margin-top:30px;
    display: flex;
    justify-content:space-between;
    align-items: center;

    button{
      background:#0057a0;
      color: #FFF;
      border-radius: 0px 10px;
      border: 0px;
      padding: 12px 10px;
      font-weight: bold;
      text-transform: uppercase;
      transition: all .2s;
      &:hover{
        border-radius: 10px 0px;
        background-color: ${darken(0.04,'#0057a0')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width:100%;
  thead th{
    color:#999;
    text-align: left;
    padding: 12px;
  }
  tbody td{
    padding: 12px;
    border-bottom: solid #EEE;
  }
  strong{
    color:#333;
    display:block;
  }
  span{
    display:block;
    margin-top:5px;
    font-size:18px;
    font-weight:bold;
  }
  div{
    display: flex;
    align-items:center; 
    input{
      border:solid 1px #ddd;
      border-radius: 4px;
      color:#666;
      padding:6px;
      width:50px;
    }
  }
  button{
    background: none;
    border: 0;
    padding:5px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span{
    color: #999;
    font-weight: bold;
  }
  strong{
    font-size: 28px;
    margin-left: 5px;
  }
`;