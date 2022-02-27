import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 375px;
  margin-left: 5px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 0.8rem;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 125px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 0.8rem;
`;
export const SpinnerImg = styled.img`
  height: 30px;
  display: inline-block;
  margin-left: 10px;
`;

export const MessageContainer = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  ${({ status }) =>
    status === 'success'
      ? `
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `
      : `
  color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}
`;

export const FormBottom = styled.div`
  margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;

`;

export const Button = styled.button`
border-radius: 50px;
  background: ${({primary}) => (primary ? '#43e4db' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`

// export const FormButton = styled.button`
//    display: inline-block;
//     font-weight: 400;
//     text-align: center;
//     white-space: nowrap;
//     vertical-align: middle;
//     user-select: none;
//     border: 1px solid transparent;
//     padding: .55rem 1.5rem;
//     font-size: 1.2rem;
//     line-height: 1.5;
//     border-radius: .25rem;
//     color: #fff;
//     background-color: #FD6413;
//     cursor: pointer;

//     &:disabled{
//       background-color: #777;
//   }

// `
