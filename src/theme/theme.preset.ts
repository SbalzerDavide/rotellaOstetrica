import { AuraBaseDesignTokens } from '@primeng/themes/aura/base';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

import stepper from './components/stepper.preset';
import card from './components/card.preset';
import divider from './components/divider.preset';
import fieldset from './components/fieldset.preset';
import accordion from './components/accordion.preset';
import chip from './components/chip.preset';

export const getAppThemePreset = () => {
  return definePreset(Aura, {
    primitive: {
      borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        xxl: '14px',
      },
      red: {
        500: '#E74C3C',
        900: '#7F2315',
        950: '#541D15',
      },
    },
    semantic: {
      // primary: {
      //   50: '#F43F5E',
      //   100: '#F43F5E',
      //   200: '#F43F5E', // Primary Light
      //   300: '#F43F5E',
      //   400: '#F43F5E', // Primary
      //   500: '#F43F5E',
      //   600: '#F43F5E',
      //   700: '#F43F5E',
      //   800: '#F43F5E',
      //   900: '#F43F5E',
      //   950: '#F43F5E',
      // },
      primary: {
        50: '#FEE2E2',
        100: '#FECACA',
        200: '#FDA4AF', // Primary Light
        300: '#FB7185',
        400: '#F43F5E', // Primary
        500: '#F43F5E',
        600: '#E11D48',
        700: '#BE123C',
        800: '#9F1239',
        900: '#881337',
        950: '#4C0519',
      },
      iconSize: '1.143rem',
      formField: {
        paddingX: '0.85rem',
        paddingY: '0.35rem',
        borderRadius: '{border.radius.sm}',
        transitionDuration: '{transition.duration}',
      },
      colorScheme: {
        light: {
          surface: {
            0: '#ffffff', //
            50: '#f8fafc', //
            100: '#f1f5f9', //
            200: '#e2e8f0', //
            300: '#cbd5e1', //
            400: '#94a3b8', //
            500: '#64748b', //
            600: '#475569', //
            700: '#334155', //
            800: '#1e293b', //
            900: '#0f172a', //
            950: '#020617',
          },
          chip: {
            card: '{surface.200}',
          },
          text: {
            color: '{surface.800}',
            hoverColor: '{surface.900}',
            mutedColor: '{surface.700}',
            hoverMutedColor: '{surface.800}',
          },
          content: {
            background: '{surface.100}',
            hoverBackground: '{surface.800}',
            borderColor: '{surface.300}',
            color: '{text.color}',
            hoverColor: '{text.hover.color}',
          },
          overlay: {
            select: {
              background: '{surface.900}',
              hoverBackground: '{red.400}',
              borderColor: '{surface.300}',
              color: '{text.color}',
              hoverColor: '{red.400}',
            },
          },
          // formField: {
          //   background: '{surface.600}',
          //   disabledBackground: '{surface.200}',
          //   filledBackground: '{surface.50}',
          //   filledFocusBackground: '{surface.50}',
          //   borderColor: '{surface.400}',
          //   hoverBorderColor: '{surface.400}',
          //   focusBorderColor: '{surface.50}',
          //   invalidBorderColor: '{red.400}',
          //   color: '{surface.50}',
          //   placeholderColor: '{surface.200}',
          //   iconColor: '{surface.200}',
          // },
        },
        dark: {
          surface: {
            0: '#ffffff', //
            50: 'var(--p-zinc-50)', //
            100: 'var(--p-zinc-100)', //
            200: 'var(--p-zinc-200)', //
            300: 'var(--p-zinc-300)', //
            400: 'var(--p-zinc-400)', //
            500: 'var(--p-zinc-500)', //
            600: 'var(--p-zinc-600)', //
            700: 'var(--p-zinc-700)', //
            800: 'var(--p-zinc-800)', //
            900: 'var(--p-zinc-900)', //
            950: 'var(--p-zinc-950)',
          },
          chip: {
            card: '{surface.700}',
          },
          text: {
            color: '{surface.50}',
            hoverColor: '{surface.100}',
            mutedColor: '{surface.200}',
            hoverMutedColor: '{surface.300}',
          },
          content: {
            background: '{surface.800}',
            hoverBackground: '{surface.800}',
            borderColor: '{surface.700}',
            color: '{text.color}',
            hoverColor: '{text.hover.color}',
          },
          overlay: {
            select: {
              background: '{surface.900}',
              hoverBackground: '{red.400}',
              borderColor: '{surface.300}',
              color: '{text.color}',
              hoverColor: '{red.400}',
            },
          },
          // formField: {
          //   background: '{surface.600}',
          //   disabledBackground: '{surface.200}',
          //   filledBackground: '{surface.50}',
          //   filledFocusBackground: '{surface.50}',
          //   borderColor: '{surface.400}',
          //   hoverBorderColor: '{surface.400}',
          //   focusBorderColor: '{surface.50}',
          //   invalidBorderColor: '{red.400}',
          //   color: '{surface.50}',
          //   placeholderColor: '{surface.200}',
          //   iconColor: '{surface.200}',
          // },
        },
      },
    },
    components: {
      stepper,
      card,
      divider,
      fieldset,
      accordion,
      chip,
    },
  } as AuraBaseDesignTokens);
};
