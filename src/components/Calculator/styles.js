import styled from 'styled-components';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  align-items: center;
  background-color: ${(props) => (props.theme === 'light' ? '#f1f1f1' : '#22252d')};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: space-between;
  margin: 50px;
  transition: background-color 1s;
  width: 280px;
`;

const ResultContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  letter-spacing: 2px;
  margin-right: 10%;
  margin-top: 54px;
  width: 90%;
`;

const Button = styled.button`
  background-color: ${(props) => (props.theme === 'light' ? '#f5f3f3' : '#22252d')};
  border-radius: 12px;
  border: none;
  color: ${(props) =>
    props.isGreen
      ? '#26ddbd'
      : props.isRed
      ? '#ec6666'
      : props.theme === 'light'
      ? '#353941'
      : '#fff'};
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 12px;
  padding: 12px;
  transition: background-color 1s;
  width: 38px;
`;

const Math = styled.div`
  color: ${(props) => (props.theme === 'light' ? '#22252d' : '#fff')};
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  height: 20px;
  transition: color 1s;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 12px;
`;

const Result = styled.div`
  color: ${(props) => (props.theme === 'light' ? '#22252d' : '#fff')};
  font-family: 'Lato', sans-serif;
  font-size: 32px;
  font-weight: bold;
  height: 40px;
  transition: color 1s;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Sheet = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#f9f9f9' : '#292d36')};
  border-radius: 20px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 16px;
  transition: background-color 1s;
  width: 100%;
`;

const ThemeContainer = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#f9f9f9' : '#292d36')};
  border-radius: 16px;
  margin: 16px;
  padding: 6px 12px;
  transition: background-color 1s;
`;

export { Button, Container, Sheet, ResultContainer, Math, Result, ThemeContainer };
