// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import CartIcon from '../CartIcon';
import CurrencySwitcher from '../CurrencySwitcher';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Header>
      <S.NavBar>
        <S.Container>
          <S.NavBarBrand href="/" aria-label="Astronomy Shop home">
            <S.BrandMark aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2.5l2.35 6.15L20.5 11l-6.15 2.35L12 19.5l-2.35-6.15L3.5 11l6.15-2.35L12 2.5z"
                  fill="#fff"
                />
                <circle cx="19" cy="4.5" r="1.5" fill="#fff" fillOpacity="0.7" />
              </svg>
            </S.BrandMark>
            <S.BrandText>
              <S.BrandName>Astronomy Shop</S.BrandName>
              <S.BrandTagline>Telescopes &amp; stargazing gear</S.BrandTagline>
            </S.BrandText>
          </S.NavBarBrand>
          <S.Controls>
            <CurrencySwitcher />
            <CartIcon />
          </S.Controls>
        </S.Container>
      </S.NavBar>
    </S.Header>
  );
};

export default Header;
