// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavBar = styled.nav`
  height: 68px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 76px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 32px;
  }
`;

export const NavBarBrand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

export const BrandMark = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.gradients.primary};
  box-shadow: ${({ theme }) => theme.shadows.glow};

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const BrandText = styled.span`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  line-height: 1.1;
  white-space: nowrap;
`;

export const BrandName = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  overflow: hidden;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  letter-spacing: -0.02em;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.textGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 18px;
  }
`;

export const BrandTagline = styled.span`
  display: none;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLightGray};

  ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.desktop} {
    gap: 10px;
  }
`;
