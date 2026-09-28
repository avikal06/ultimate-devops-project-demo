// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    // Legacy names kept so existing components keep compiling; values follow the new palette.
    otelBlue: '#4F46E5',
    otelYellow: '#F59E0B',
    otelGray: '#0B1026',
    otelRed: '#E11D48',
    backgroundGray: '#F5F6FB',
    lightBorderGray: '#E6E8F0',
    borderGray: '#D5D9E4',
    textGray: '#0F172A',
    textLightGray: '#64748B',
    white: '#FFFFFF',

    primary: '#4F46E5',
    primaryHover: '#4338CA',
    primarySoft: '#EEF0FF',
    accent: '#8B5CF6',
    success: '#10B981',
    successSoft: '#ECFDF5',
    surface: '#FFFFFF',
    night: '#0B1026',
    nightSoft: '#1A2147',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)',
    hero: 'radial-gradient(1200px 600px at 85% 20%, rgba(139, 92, 246, 0.35), transparent 60%), radial-gradient(900px 500px at 10% 90%, rgba(79, 70, 229, 0.35), transparent 60%), linear-gradient(180deg, #0B1026 0%, #141A3A 100%)',
    text: 'linear-gradient(90deg, #A5B4FC 0%, #C4B5FD 50%, #F0ABFC 100%)',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    xl: '28px',
    pill: '999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.08)',
    md: '0 4px 12px rgba(15, 23, 42, 0.06), 0 2px 4px rgba(15, 23, 42, 0.04)',
    lg: '0 20px 40px -12px rgba(15, 23, 42, 0.18)',
    glow: '0 10px 30px -8px rgba(79, 70, 229, 0.55)',
  },
  layout: {
    maxWidth: '1240px',
  },
  breakpoints: {
    desktop: '@media (min-width: 768px)',
  },
  sizes: {
    mxLarge: '28px',
    mLarge: '20px',
    mMedium: '14px',
    mSmall: '12px',
    dxLarge: '60px',
    dLarge: '36px',
    dMedium: '18px',
    dSmall: '16px',
    nano: '11px',
  },
  fonts: {
    bold: '700',
    regular: '400',
    semiBold: '600',
    light: '300',
    heading: "'Space Grotesk', 'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
};

export default Theme;
