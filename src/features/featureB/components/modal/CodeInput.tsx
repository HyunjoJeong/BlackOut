import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';

interface CodeInputProps {
  length: number;
  onComplete: (code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ length, onComplete }) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [inputValues, setInputValues] = useState<string[]>(Array(length).fill(''));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    if (!/^\d*$/.test(value)) return;

    const newValues = [...inputValues];
    newValues[index] = value.slice(0, 1);
    setInputValues(newValues);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    const isAllFilled = newValues.every((val) => val.length === 1);
    if (isAllFilled) {
      const code = newValues.join('');
      onComplete(code);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !inputValues[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div css={containerStyle}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          css={inputStyle(!!inputValues[index])}
          ref={(el) => {
            inputsRef.current[index] = el!;
          }}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          value={inputValues[index]}
        />
      ))}
    </div>
  );
};

export default CodeInput;

const containerStyle = css`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const inputStyle = (isFilled: boolean) => css`
  width: 48px;
  height: 48px;
  border: 2px solid ${isFilled ? '#28C86E' : '#e0e0e0'};
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${isFilled ? '#28C86E' : '#555'};
  outline: none;

  &:focus {
    border-color: ${isFilled ? '#28C86E' : '#a0a0a0'};
    box-shadow: ${isFilled ? '0 0 4px rgba(50, 205, 50, 0.5)' : '0 0 4px rgba(160, 160, 160, 0.5)'};
  }
`;
