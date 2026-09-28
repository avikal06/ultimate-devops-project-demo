// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import * as S from '../../styles/Cart.styled';

const EmptyCart = () => {
  return (
    <S.EmptyCartContainer>
      <S.EmptyCartIcon>
        <Image src="/icons/Cart.svg" height="36" width="36" alt="" />
      </S.EmptyCartIcon>
      <S.Title>Your shopping cart is empty!</S.Title>
      <S.Subtitle>Items you add to your shopping cart will appear here.</S.Subtitle>

      <S.ButtonContainer>
        <Link href="/">
          <Button type="submit">Continue Shopping</Button>
        </Link>
      </S.ButtonContainer>
    </S.EmptyCartContainer>
  );
};

export default EmptyCart;
