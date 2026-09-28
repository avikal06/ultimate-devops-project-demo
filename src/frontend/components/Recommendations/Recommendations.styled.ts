// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Recommendations = styled.section`
  margin: 56px 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    margin: 80px 0;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 24px;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
`;

export const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 24px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 32px;
  }
`;
