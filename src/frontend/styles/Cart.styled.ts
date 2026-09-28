// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../components/Button';

export const Cart = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 24px 16px 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 48px 32px 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
    gap: 32px;
    align-items: start;
  }

  & > * {
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
    border-radius: ${({ theme }) => theme.radii.lg};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.sm};

    ${({ theme }) => theme.breakpoints.desktop} {
      padding: 32px;
    }
  }
`;

export const CarTitle = styled.h1`
  margin: 0;
  font-size: 26px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 32px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 26px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.sizes.dLarge};
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  max-width: 420px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLightGray};
  font-size: ${({ theme }) => theme.sizes.dSmall};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.sizes.dMedium};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const EmptyCartIcon = styled.div`
  display: grid;
  place-items: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.primary};
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 56px 20px;
  border: 1px dashed ${({ theme }) => theme.colors.borderGray};
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.surface};

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 80px 20px;
  }
`;

export const EmptyCartButton = styled(Button)`
  color: ${({ theme }) => theme.colors.otelRed};
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.otelRed};
  }
`;
