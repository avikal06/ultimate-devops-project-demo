// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Image from 'next/image';
import styled from 'styled-components';

export const CartIcon = styled.a`
  position: relative;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-1px);
  }
`;

export const Icon = styled(Image).attrs({
  width: '20',
  height: '20',
})``;

export const ItemsCount = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  display: grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 2px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.nano};
  font-weight: ${({ theme }) => theme.fonts.bold};
  line-height: 1;
`;
