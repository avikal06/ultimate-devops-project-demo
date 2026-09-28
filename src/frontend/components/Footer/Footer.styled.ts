// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Footer = styled.footer`
  position: relative;
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.night};
  color: #a5b0d6;
  font-size: 14px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 48px 16px 32px;

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 64px 32px 40px;
  }

  p {
    margin: 0;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 420px;
`;

export const BrandName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.desktop} {
    align-items: flex-end;
    text-align: right;
  }
`;

export const Session = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #c7d2fe;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  word-break: break-all;
`;

export const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  p {
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin: 0 auto;
    padding: 20px 16px;
    font-size: 13px;

    ${({ theme }) => theme.breakpoints.desktop} {
      padding: 20px 32px;
    }
  }

  a {
    color: #c7d2fe;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
