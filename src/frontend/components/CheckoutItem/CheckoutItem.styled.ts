// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Image from 'next/image';
import styled from 'styled-components';

export const CheckoutItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) auto;
    align-items: center;
    padding: 24px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 24px 0 0;
    border-bottom: none;
    border-right: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textLightGray};
    font-size: 14px;
  }
`;

export const ItemName = styled.h5`
  margin: 0 0 2px;
  font-size: 17px;
`;

export const ShippingData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textLightGray};
    font-size: 14px;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 24px;
    border-bottom: none;
  }
`;

export const Status = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: start;
  gap: 8px;
  margin-top: 20px;
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.successSoft};

  span {
    color: #047857;
    font-size: 13px;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    justify-self: end;
    margin-top: 0;
  }
`;

export const ItemImage = styled(Image).attrs({
  width: '72',
  height: '72',
})`
  flex-shrink: 0;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const SeeMore = styled.a`
  align-self: flex-start;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;
