import "styled-components";
import theme from "~/config/theme/index";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
