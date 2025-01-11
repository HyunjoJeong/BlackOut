import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';

interface CodeInputProps {
  length: number; // 입력 필드 개수
  onComplete: (code: string) => void; // 입력 완료 시 호출
}

const CodeInput: React.FC<CodeInputProps> = ({ length, onComplete }) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [inputValues, setInputValues] = useState<string[]>(Array(length).fill('')); // 각 필드의 값 관리

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    // 숫자가 아니면 입력하지 않음
    if (!/^\d*$/.test(value)) return;

    // 값 저장
    const newValues = [...inputValues];
    newValues[index] = value.slice(0, 1);
    setInputValues(newValues);

    // 마지막 입력 필드가 아니면 다음 필드로 포커스 이동
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    // 모든 입력이 완료되면 코드를 합쳐서 onComplete 호출
    const isAllFilled = newValues.every((val) => val.length === 1);
    if (isAllFilled) {
      const code = newValues.join('');
      onComplete(code);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // 백스페이스 처리: 이전 필드로 포커스 이동
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
          css={inputStyle(!!inputValues[index])} // 해당 입력 필드가 채워졌는지 확인
          ref={(el) => {
            inputsRef.current[index] = el!;
          }}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          value={inputValues[index]} // 입력값 바인딩
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
  border: 2px solid ${isFilled ? '#28C86E' : '#e0e0e0'}; /* 채워진 필드는 초록색 */
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${isFilled ? '#28C86E' : '#555'}; /* 채워진 필드는 초록색 텍스트 */
  outline: none;

  &:focus {
    border-color: ${isFilled ? '#28C86E' : '#a0a0a0'};
    box-shadow: ${isFilled ? '0 0 4px rgba(50, 205, 50, 0.5)' : '0 0 4px rgba(160, 160, 160, 0.5)'};
  }
`;
