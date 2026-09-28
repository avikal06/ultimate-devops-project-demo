// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 16px;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 32px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 40px;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-top: 72px;
  }
`;

export const HotProducts = styled.section`
  margin-bottom: 56px;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 96px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 24px;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 36px;
  }
`;

export const SectionEyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const HotProductsTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.sizes.mxLarge};
  font-weight: ${({ theme }) => theme.fonts.bold};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 40px;
  }
`;

export const SectionSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textLightGray};
`;

export const Home = styled.div`
  @media (max-width: 992px) {
    ${Content} {
      width: 100%;
    }
  }
`;
