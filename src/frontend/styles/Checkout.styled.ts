// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Checkout = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 32px 16px 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 64px 32px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
`;

export const SuccessIcon = styled.div`
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  box-shadow: 0 0 0 10px ${({ theme }) => theme.colors.successSoft}, 0 12px 30px -8px rgba(16, 185, 129, 0.6);

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const DataRow = styled.div`
  display: grid;
  width: 100%;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  padding: 24px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};

  span:last-of-type {
    text-align: right;
  }
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 960px;
  margin: 24px 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin: 40px 0;
  }
`;

export const Title = styled.h1`
  margin: 12px 0 0;
  text-align: center;
  font-size: 28px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 44px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
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
`;
