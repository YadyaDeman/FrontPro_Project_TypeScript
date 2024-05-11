import styled from "@emotion/styled";
interface ResultsBlockStyledProps{
  isShowResult: boolean
}

export const Homework09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 400px;
  padding: 40px;
`;

export const ResultsBlock = styled.div<ResultsBlockStyledProps> `
  display: ${({isShowResult})=>isShowResult?'flex':'none'};
  gap: 20px;
  padding: 30px;
`;

export const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #E695DD;
  font-size: 30px;
`;


