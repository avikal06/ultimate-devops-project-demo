// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../components/Button';

export const ProductDetail = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 20px 16px 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 48px 32px 0;
  }
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 14px;

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  span:last-child {
    overflow: hidden;
    color: ${({ theme }) => theme.colors.textGray};
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 56px;
    align-items: start;
  }
`;

export const Image = styled.div<{ $src: string }>`
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: url(${({ $src }) => $src}) no-repeat center / cover, linear-gradient(180deg, #f8f9fd 0%, #eef0f7 100%);
  box-shadow: ${({ theme }) => theme.shadows.md};

  ${({ theme }) => theme.breakpoints.desktop} {
    position: sticky;
    top: 100px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding-top: 8px;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Category = styled.span`
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  letter-spacing: 0.04em;
  text-transform: capitalize;
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 28px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 42px;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: 16px;
  line-height: 1.7;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 17px;
  }
`;

export const ProductPrice = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textGray};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fonts.bold};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 36px;
  }
`;

export const PurchaseCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const PurchaseRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 14px;
`;

export const QuantityField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${Text} {
    color: ${({ theme }) => theme.colors.textLightGray};
    font-size: 13px;
  }
`;

export const AddToCart = styled(Button)`
  flex: 1;
  min-width: 200px;
`;
