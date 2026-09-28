// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Ad from '../../../components/Ad';
import Footer from '../../../components/Footer';
import Layout from '../../../components/Layout';
import ProductPrice from '../../../components/ProductPrice';
import Recommendations from '../../../components/Recommendations';
import Select from '../../../components/Select';
import { CypressFields } from '../../../utils/Cypress';
import ApiGateway from '../../../gateways/Api.gateway';
import { Product } from '../../../protos/demo';
import AdProvider from '../../../providers/Ad.provider';
import { useCart } from '../../../providers/Cart.provider';
import * as S from '../../../styles/ProductDetail.styled';
import { useCurrency } from '../../../providers/Currency.provider';

const quantityOptions = new Array(10).fill(0).map((_, i) => i + 1);

const ProductDetail: NextPage = () => {
  const { push, query } = useRouter();
  const [quantity, setQuantity] = useState(1);
  const {
    addItem,
    cart: { items },
  } = useCart();
  const { selectedCurrency } = useCurrency();
  const productId = query.productId as string;

  useEffect(() => {
    setQuantity(1);
  }, [productId]);

  const {
    data: {
      name,
      picture,
      description,
      priceUsd = { units: 0, currencyCode: 'USD', nanos: 0 },
      categories,
    } = {} as Product,
  } = useQuery({
      queryKey: ['product', productId, 'selectedCurrency', selectedCurrency],
      queryFn: () => ApiGateway.getProduct(productId, selectedCurrency),
      enabled: !!productId,
    }
  ) as { data: Product };

  const onAddItem = useCallback(async () => {
    await addItem({
      productId,
      quantity,
    });
    push('/cart');
  }, [addItem, productId, quantity, push]);

  return (
    <AdProvider
      productIds={[productId, ...items.map(({ productId }) => productId)]}
      contextKeys={[...new Set(categories)]}
    >
      <Layout>
        <S.ProductDetail data-cy={CypressFields.ProductDetail}>
          <S.Breadcrumb aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{name}</span>
          </S.Breadcrumb>
          <S.Container>
            <S.Image $src={"/images/products/" + picture} data-cy={CypressFields.ProductPicture} />
            <S.Details>
              {!!categories?.length && (
                <S.Categories>
                  {categories.map(category => (
                    <S.Category key={category}>{category}</S.Category>
                  ))}
                </S.Categories>
              )}
              <S.Name data-cy={CypressFields.ProductName}>{name}</S.Name>
              <S.ProductPrice>
                <ProductPrice price={priceUsd} />
              </S.ProductPrice>
              <S.Description data-cy={CypressFields.ProductDescription}>{description}</S.Description>
              <S.PurchaseCard>
                <S.PurchaseRow>
                  <S.QuantityField>
                    <S.Text>Quantity</S.Text>
                    <Select
                      data-cy={CypressFields.ProductQuantity}
                      onChange={event => setQuantity(+event.target.value)}
                      value={quantity}
                    >
                      {quantityOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Select>
                  </S.QuantityField>
                  <S.AddToCart data-cy={CypressFields.ProductAddToCart} onClick={onAddItem}>
                    <Image src="/icons/Cart.svg" height="16" width="16" alt="" /> Add To Cart
                  </S.AddToCart>
                </S.PurchaseRow>
              </S.PurchaseCard>
            </S.Details>
          </S.Container>
          <Recommendations />
        </S.ProductDetail>
        <Ad />
        <Footer />
      </Layout>
    </AdProvider>
  );
};

export default ProductDetail;
