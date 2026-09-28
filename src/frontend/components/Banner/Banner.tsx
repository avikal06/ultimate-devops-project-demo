// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Link from 'next/link';
import * as S from './Banner.styled';

const Banner = () => {
  return (
    <S.Banner>
      <S.Inner>
        <S.TextContainer>
          <S.Eyebrow>Telescopes · Binoculars · Accessories</S.Eyebrow>
          <S.Title>
            The best telescopes to <S.Highlight>see the world closer</S.Highlight>
          </S.Title>
          <S.Subtitle>
            Hand-picked optics, mounts and accessories for backyard stargazers and seasoned astronomers alike.
          </S.Subtitle>
          <S.Actions>
            <Link href="#hot-products">
              <S.GoShoppingButton>Go Shopping</S.GoShoppingButton>
            </Link>
          </S.Actions>
        </S.TextContainer>
        <S.ImageContainer>
          <S.BannerImg />
        </S.ImageContainer>
      </S.Inner>
    </S.Banner>
  );
};

export default Banner;
