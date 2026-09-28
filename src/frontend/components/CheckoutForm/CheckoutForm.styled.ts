// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../Button';

export const CheckoutForm = styled.form``;

export const Section = styled.fieldset`
  margin: 0 0 12px;
  padding: 0;
  border: none;

  & + & {
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.lightBorderGray};
  }
`;

export const StateRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
  gap: 12px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 18px;
  font-size: 20px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 22px;
  }
`;

export const Step = styled.span`
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 0.8fr);
  gap: 12px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: 12px;

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 24px;
  }

  a {
    display: block;
  }
`;

export const CartButton = styled(Button)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: auto;
  }
`;

export const EmptyCartButton = styled(Button)`
  color: ${({ theme }) => theme.colors.otelRed};
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: auto;
  }
`;
