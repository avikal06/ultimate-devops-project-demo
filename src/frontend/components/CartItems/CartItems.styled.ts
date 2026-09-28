// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const CartItems = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CardItemsHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 64px 96px;
  gap: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  label {
    color: ${({ theme }) => theme.colors.textLightGray};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  label:nth-child(2) {
    text-align: center;
  }

  label:last-child {
    text-align: right;
  }
`;

export const CartItemImage = styled.img`
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  background: ${({ theme }) => theme.colors.backgroundGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 80px;
    height: 80px;
  }
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 64px 96px;
  gap: 16px;
  padding: 16px 0;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  p {
    margin: 0;
  }
`;

export const CartItemDetails = styled.div`
  display: flex;
  justify-content: center;

  &:last-child {
    justify-content: flex-end;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
  }
`;

export const Quantity = styled.span`
  display: grid;
  place-items: center;
  min-width: 36px;
  height: 32px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.backgroundGray};
  font-weight: ${({ theme }) => theme.fonts.semiBold};
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  cursor: pointer;

  p {
    overflow: hidden;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    line-height: 1.35;
    transition: color 0.2s ease;
  }

  &:hover p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 16px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.backgroundGray};
`;

export const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  gap: 24px;
  color: ${({ theme }) => theme.colors.textLightGray};
`;

export const TotalRow = styled(DataRow)`
  margin-top: 6px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  color: ${({ theme }) => theme.colors.textGray};
`;

export const TotalText = styled.h3`
  margin: 0;
  font-size: 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 24px;
  }
`;
