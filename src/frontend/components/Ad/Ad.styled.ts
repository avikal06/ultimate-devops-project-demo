// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import RouterLink from 'next/link';

export const Ad = styled.section`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto 48px;
  padding: 0 16px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 32px;
  }
`;

export const Link = styled(RouterLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  overflow: hidden;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.gradients.hero};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: transform 0.2s ease;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 32px 40px;
  }

  &:hover {
    transform: translateY(-2px);
  }

  p {
    flex: 1;
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fonts.semiBold};

    ${({ theme }) => theme.breakpoints.desktop} {
      font-size: 22px;
    }
  }
`;

export const Label = styled.span`
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.12);
  color: #c7d2fe;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Arrow = styled.span`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;
