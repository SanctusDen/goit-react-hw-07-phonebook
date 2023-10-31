import styled from '@emotion/styled';

export const FormContainer = styled.div`
  width: 420px;
  margin-left: auto;
  margin-right: auto;

  backdrop-filter: blur(16px);
  background: transparent;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: 4px;
`;
