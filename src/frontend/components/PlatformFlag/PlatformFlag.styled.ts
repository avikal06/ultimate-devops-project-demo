// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

export const Block = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.35);
  color: #fcd34d;
  font-size: ${({ theme }) => theme.sizes.mSmall};
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fbbf24;
    box-shadow: 0 0 8px #fbbf24;
  }
`;
