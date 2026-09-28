// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';

const cartIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CartDropdown = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 24px;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 30px 60px -12px rgba(15, 23, 42, 0.35);
  animation: ${cartIn} 0.2s ease-out;

  ${({ theme }) => theme.breakpoints.desktop} {
    position: absolute;
    top: 84px;
    right: 24px;
    width: 400px;
    height: auto;
    max-height: 640px;
    border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;

export const Title = styled.h5`
  margin: 0;
  font-size: 22px;
`;

export const ItemList = styled.div`
  overflow-y: auto;

  ${({ theme }) => theme.breakpoints.desktop} {
    max-height: 420px;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemImage = styled(Image).attrs({
  width: '64',
  height: '64',
})`
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const ItemName = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  line-height: 1.35;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fonts.semiBold};
  }
`;

export const ItemQuantity = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 13px;
`;

export const CartButton = styled(Button)`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  span {
    color: ${({ theme }) => theme.colors.textLightGray};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.textGray};
    }
  }
`;

export const EmptyCart = styled.p`
  margin: 24px 0 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 15px;
`;
