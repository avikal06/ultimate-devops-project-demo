// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      otelBlue: string;
      otelYellow: string;
      otelGray: string;
      otelRed: string;
      backgroundGray: string;
      lightBorderGray: string;
      borderGray: string;
      textGray: string;
      textLightGray: string;
      white: string;
      primary: string;
      primaryHover: string;
      primarySoft: string;
      accent: string;
      success: string;
      successSoft: string;
      surface: string;
      night: string;
      nightSoft: string;
    };
    gradients: {
      primary: string;
      hero: string;
      text: string;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      pill: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      glow: string;
    };
    layout: {
      maxWidth: string;
    };
    sizes: {
      mLarge: string;
      mxLarge: string;
      mMedium: string;
      mSmall: string;
      dLarge: string;
      dxLarge: string;
      dMedium: string;
      dSmall: string;
      nano: string;
    };
    breakpoints: {
      desktop: string;
    };
    fonts: {
      bold: string;
      regular: string;
      semiBold: string;
      light: string;
      heading: string;
      body: string;
    };
  }
}
