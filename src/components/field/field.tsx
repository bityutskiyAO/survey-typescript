import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { Title } from '@styled-icons/material'

import { TitleH5 } from '../../styled-components'

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  
  &:checked{
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.primary};
  }
`

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
`

const rotate = keyframes`
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`
const popIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5) ;
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) ;
  }
`

const IndicatorRadio = styled.div`
  border: ${(props) => `1px solid  ${props.theme.colors.primary}`};
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 0;
  left: -2.5rem;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    border: ${(props) => `solid  ${props.theme.colors.primary}`};
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    width: 0.5rem;
    height: 0.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  
`

const IndicatorCheckbox = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 0;
  left: -2.5rem;
  border: ${(props) => `solid  ${props.theme.colors.primary}`};
  border-radius: 0.2rem;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: ${(props) => `solid  ${props.theme.colors.primary}`};
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

interface ICheckBoxProps {
    id: string,
    name: string,
    value: string | number,
    checked: boolean,
    disabled?: boolean,
    type: string,
    label: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Field: FC<ICheckBoxProps> = ({
    label, id, disabled = false, name, value, checked, onChange, type
}) => (
    <Label htmlFor={id}>
        <TitleH5
            color="black"
        >
            {label}
        </TitleH5>
        <Input
            id={id}
            type={type}
            name={name}
            value={value}
            role={type}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
        />
        {type === 'radio' ? <IndicatorRadio /> : <IndicatorCheckbox />}
    </Label>
)

export default Field
