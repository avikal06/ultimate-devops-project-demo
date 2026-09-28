// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

const Button = styled.button<{ $type?: 'primary' | 'secondary' | 'link' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 52px;
  padding: 0 28px;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  letter-spacing: 0.01em;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.glow};
  transition: transform 0.15s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 34px -8px rgba(79, 70, 229, 0.65);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  ${({ $type = 'primary' }) =>
    $type === 'secondary' &&
    css`
      background: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.textGray};
      border-color: ${({ theme }) => theme.colors.borderGray};
      box-shadow: none;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        box-shadow: ${({ theme }) => theme.shadows.sm};
      }
    `};

  ${({ $type = 'primary' }) =>
    $type === 'link' &&
    css`
      height: auto;
      padding: 6px 4px;
      background: none;
      color: ${({ theme }) => theme.colors.primary};
      border: none;
      box-shadow: none;

      &:hover {
        transform: none;
        box-shadow: none;
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    `};
`;

export default Button;
