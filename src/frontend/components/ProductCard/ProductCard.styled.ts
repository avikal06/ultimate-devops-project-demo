// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import RouterLink from 'next/link';

export const Link = styled(RouterLink)`
  display: block;
  height: 100%;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background: linear-gradient(180deg, #f8f9fd 0%, #eef0f7 100%);
`;

export const Image = styled.div<{ $src: string }>`
  position: absolute;
  inset: 0;
  background: url(${({ $src }) => $src}) no-repeat center;
  background-size: cover;
  transition: transform 0.45s ease;
`;

export const ViewBadge = styled.span`
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.92);
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: transparent;
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:hover ${Image} {
    transform: scale(1.06);
  }

  &:hover ${ViewBadge} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 14px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 18px 20px 20px;
  }
`;

export const ProductName = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  line-height: 1.35;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.sizes.dSmall};
  }
`;

export const ProductPrice = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fonts.bold};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.sizes.dMedium};
  }
`;
