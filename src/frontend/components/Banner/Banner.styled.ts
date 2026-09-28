// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import Button from '../Button';

export const Banner = styled.section`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.gradients.hero};

  /* star field */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(1.5px 1.5px at 20% 30%, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(1px 1px at 70% 15%, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(1.5px 1.5px at 40% 80%, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(1px 1px at 85% 60%, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(1px 1px at 10% 70%, rgba(255, 255, 255, 0.5), transparent),
      radial-gradient(1.5px 1.5px at 60% 45%, rgba(255, 255, 255, 0.5), transparent);
    background-size: 480px 480px;
    opacity: 0.7;
    pointer-events: none;
  }
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 40px 16px 48px;

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    align-items: center;
    gap: 56px;
    padding: 88px 32px 96px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1 1 50%;

  &::after {
    content: '';
    position: absolute;
    inset: 12% 8%;
    z-index: 0;
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.45);
    filter: blur(60px);
  }
`;

export const BannerImg = styled.img.attrs({
  src: '/images/Banner.png',
  alt: 'Telescope pointed at the night sky',
})`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.6);
`;

export const TextContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: #c7d2fe;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  letter-spacing: 0.02em;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #a78bfa;
    box-shadow: 0 0 10px #a78bfa;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  line-height: 1.05;
  letter-spacing: -0.03em;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.sizes.dxLarge};
  }
`;

export const Highlight = styled.span`
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Subtitle = styled.p`
  margin: 0;
  max-width: 480px;
  color: #a5b0d6;
  font-size: 17px;

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 19px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  margin-top: 8px;
`;

export const GoShoppingButton = styled(Button)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.desktop} {
    width: auto;
  }
`;
