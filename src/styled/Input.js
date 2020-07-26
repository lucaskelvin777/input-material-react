import styled from 'styled-components';
const Group = styled.div`
  position: relative; margin-bottom: 2.4em;

`;
const Label = styled.label`
      color: #d2d2d2;
      font-size: 15px;
      font-weight: normal;
      font-family: sans-serif;
      position: absolute;
      pointer-events: none;
      top: 10px;
      transition: 0.2s ease all; 
      
`;
const Input = styled.input` 
      color: #909090;
      font-size: 15px;
      padding: 10px 0px 10px 0px;
      display: block;
      outline: none;
      border: none;
      width: 300px;
      border-bottom: 1px solid #d2d2d2;
      :valid ~ span::before,
      :valid ~ span::after
      {
        background: #4fc24f !important;
      }
      :focus ~ label,
      &.used ~ label {
        top: -20px;
        font-size: 13px;
        color: #5264ae;
      }

      :valid ~ label,
      :valid.used ~ label {
        color: #4fc24f;
      }
      :focus ~ span:before,
      :focus ~ span:after {
        width: 50%;
      }
`;
const Bar = styled.span`
  position: relative; display: block; width: 300px;
  ::before, ::after{
    content: "";
      height: 2px;
      width: 0;
      bottom: -1px;
      position: absolute;
      background: #5264ae;
      transition: 0.2s ease all;

  }
  ::before{
    left: 50%; 
  }

  ::after{
    right: 50%;
  }
`;
export {
  Input, Group, Label,Bar
}