import type { ThemeConfig } from "antd";
import { colors } from "./colors";
import { radius } from "./radius";
import { typography } from "./typography";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: colors.primary,
    colorPrimaryHover: colors.primaryHover,
    colorPrimaryActive: colors.primaryActive,

    colorSuccess: colors.success,
    colorWarning: colors.warning,
    colorError: colors.danger,

    colorText: colors.textPrimary,
    colorTextSecondary: colors.textSecondary,
    colorTextPlaceholder: colors.textPlaceholder,

    colorBgBase: colors.bgPage,
    colorBgContainer: colors.bgCard,

    colorBorder: colors.border,
    colorBorderSecondary: colors.borderLight,

    borderRadius: radius.sm, // 4px for inputs, or use radius.md (8px) if preferred

    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.md, // 14px
  },

  components: {
    Button: {
      borderRadius: radius.md, // 8px
      controlHeight: 48,
      fontSize: typography.fontSize.md,
      fontWeightStrong: typography.fontWeight.semibold,
    },

    Input: {
      borderRadius: radius.input, // 2px — Figma shows 5px, use sm (4px) or custom
      controlHeight: 50,
      fontSize: typography.fontSize.md,
      colorTextPlaceholder: colors.textPlaceholder,
      activeBorderColor: colors.primary,
      hoverBorderColor: colors.primary,
      addonBg: colors.transparent,
    },

    Card: {
      borderRadius: radius.md,
    },

    Table: {
      borderColor: colors.tableBorder,
      headerBg: colors.white,
      headerColor: colors.textSecondary,
    },

    Layout: {
      headerBg: colors.white,
      siderBg: colors.white,
      bodyBg: colors.bgPage,
    },

    Menu: {
      itemSelectedBg: colors.primaryLight,
      itemSelectedColor: colors.primary,
      itemHoverColor: colors.primary,
    },

    Form: {
      itemMarginBottom: 24,
    },
  },
};