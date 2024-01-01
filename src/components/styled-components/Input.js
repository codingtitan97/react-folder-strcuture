import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.hasValue || props.error ? '-10px' : '50%')};
  left: 2%;
  transform: translateY(${(props) => (props.hasValue || props.error ? '0' : '-50%')});
  font-size: ${(props) => (props.hasValue || props.error ? '12px' : '16px')};
  color: ${(props) => (props.error ? '#ff3b30' : props.hasValue ? 'rgb(240, 145, 51)' : 'rgba(0, 0, 0, 0.54)')};
  transition: top 0.3s, transform 0.3s, font-size 0.3s, color 0.3s;
  pointer-events: none;
  z-index: 10;
  background: #fff;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  border: 1.5px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  position: relative;
  z-index: 0;

  &:focus {
    outline: none;
    border-color: rgb(240, 145, 51);
  }
`;

const Input = React.forwardRef(({ label, value, onChange, type, isRequired, onError, ...props }) => {
    const [error, setError] = useState('');

    const validateInput = (inputValue) => {
        if (isRequired && !inputValue) {
            setError('This field is required');
        }
        else {
            switch (type) {
                case 'email':
                    if (!isValidEmail(inputValue)) {
                        setError('Please enter a valid email address');
                    } else {
                        setError('');
                    }
                    break;
                case 'password':
                    // Add password validation logic if needed
                    break;
                case 'percentage':
                    // Add percentage validation logic if needed
                    break;
                case 'location':
                    // Add location validation logic if needed
                    break;
                default:
                    // Default case for other input types or no type specified
                    setError('');
                    break;
            }
        }
        onError && onError(error);

    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e) => {
        onChange(e);
        validateInput(e.target.value);
    };

    const hasValue = value && value.length > 0;

    return (
        <InputContainer>
            <Label hasValue={hasValue} error={error}>
                {error || label}
            </Label>
            <StyledInput value={value} onChange={handleInputChange} type={type} isRequired={isRequired} {...props} />
        </InputContainer>
    );
});

export default Input;
