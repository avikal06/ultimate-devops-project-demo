// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

const field = css`
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textLightGray};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    border-color: ${({ theme }) => theme.colors.otelRed};
  }
`;

export const Input = styled.input`
  ${field};
`;

export const InputLabel = styled.label`
  display: block;
  margin: 0 0 6px;
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
`;

export const Select = styled.select`
  ${field};
  padding-right: 36px;
  cursor: pointer;
`;

export const InputRow = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const Arrow = styled.img.attrs({
  src: '/icons/Chevron.svg',
  alt: '',
})`
  position: absolute;
  right: 14px;
  bottom: 19px;
  width: 10px;
  height: 10px;
  opacity: 0.55;
  pointer-events: none;
`;
