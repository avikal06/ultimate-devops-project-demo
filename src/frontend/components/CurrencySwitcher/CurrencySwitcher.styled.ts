// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const CurrencySwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SelectedConcurrency = styled.span`
  position: absolute;
  left: 14px;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  pointer-events: none;
`;

export const Arrow = styled.img.attrs({
  src: '/icons/Chevron.svg',
  alt: '',
})`
  position: absolute;
  right: 14px;
  width: 10px;
  height: 10px;
  opacity: 0.55;
  pointer-events: none;
`;

export const Select = styled.select`
  height: 44px;
  width: 104px;
  padding: 0 30px 0 42px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 112px;
    padding: 0 32px 0 44px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderGray};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
  }
`;
