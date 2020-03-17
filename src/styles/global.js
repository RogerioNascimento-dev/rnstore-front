import {createGlobalStyle} from 'styled-components';
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #f3f3f3;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  #root{
    /*max-width: 1020px;*/
    margin: 0 auto;
    padding: 0px 0px;
  }
  .rootContainer{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  button{
    cursor: pointer;
  }
  @media (max-width: 800px) {
    .products-list{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 500px) {
  .products-list{
    grid-template-columns: repeat(1, 1fr);
  }
}
`;