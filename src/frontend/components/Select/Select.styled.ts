// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Select = styled.select`
  width: 110px;
  height: 52px;
  padding: 0 40px 0 18px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textLightGray};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: min-content;
`;

export const Arrow = styled.img.attrs({
  src: '/icons/Chevron.svg',
  alt: '',
})`
  position: absolute;
  top: 50%;
  right: 16px;
  width: 10px;
  height: 10px;
  opacity: 0.55;
  transform: translateY(-50%);
  pointer-events: none;
`;
