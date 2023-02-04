import React from 'react';
import { Button, Container, Math, Result, ResultContainer, Sheet, ThemeContainer } from './styles';
import { BiMoon } from 'react-icons/bi';
import { MdOutlineLightMode } from 'react-icons/md';

export default function Calculator() {
  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState('0');
  const [theme, setTheme] = React.useState('dark');

  //here as well, all functions could be one with different cases.
  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const handleEqual = () => {
    setResult(eval(input).toString());
  };

  const handleClear = () => {
    setInput('');
    setResult('0');
  };

  return (
    <Container theme={theme}>
      {/* also, possible to use ThemeProvider from styled-components to create other mode */}
      <ThemeContainer theme={theme}>
        <BiMoon
          onClick={() => setTheme('dark')}
          style={{ cursor: 'pointer' }}
          color={theme === 'dark' ? '#fff' : '#dfdfdf'}
          size='24px'
        />
        <MdOutlineLightMode
          onClick={() => setTheme('light')}
          style={{ marginLeft: '16px', cursor: 'pointer' }}
          color={theme === 'dark' ? '#33373f' : '#64676d'}
          size='24px'
        />
      </ThemeContainer>
      <ResultContainer>
        <Math theme={theme}>{input}</Math>
        <Result theme={theme}>{result}</Result>
      </ResultContainer>
      <Sheet theme={theme}>
        {/* after ChatGPT, refactor this code in a loop to avoid useless code. */}
        <Button theme={theme} isGreen value='(' onClick={handleClick}>
          (
        </Button>
        <Button theme={theme} isGreen value=')' onClick={handleClick}>
          )
        </Button>
        <Button theme={theme} isGreen value='%' onClick={handleClick}>
          %
        </Button>
        <Button theme={theme} isRed value='/' onClick={handleClick}>
          /
        </Button>
        <Button theme={theme} value='7' onClick={handleClick}>
          7
        </Button>
        <Button theme={theme} value='8' onClick={handleClick}>
          8
        </Button>
        <Button theme={theme} value='9' onClick={handleClick}>
          9
        </Button>
        <Button theme={theme} isRed value='*' onClick={handleClick}>
          x
        </Button>
        <Button theme={theme} value='4' onClick={handleClick}>
          4
        </Button>
        <Button theme={theme} value='5' onClick={handleClick}>
          5
        </Button>
        <Button theme={theme} value='6' onClick={handleClick}>
          6
        </Button>
        <Button theme={theme} isRed value='-' onClick={handleClick}>
          -
        </Button>
        <Button theme={theme} value='1' onClick={handleClick}>
          1
        </Button>
        <Button theme={theme} value='2' onClick={handleClick}>
          2
        </Button>
        <Button theme={theme} value='3' onClick={handleClick}>
          3
        </Button>
        <Button theme={theme} isRed value='+' onClick={handleClick}>
          +
        </Button>
        <Button theme={theme} value='C' onClick={handleClear}>
          C
        </Button>
        <Button theme={theme} value='0' onClick={handleClick}>
          0
        </Button>
        <Button theme={theme} value='.' onClick={handleClick}>
          .
        </Button>
        <Button theme={theme} isRed value='=' onClick={handleEqual}>
          =
        </Button>
      </Sheet>
    </Container>
  );
}
