import { PrimeIcons } from 'primeng/api';

export class Theme {
  public static readonly DARK_THEME = new Theme('Dark', PrimeIcons.MOON);
  public static readonly LIGHT_THEME = new Theme('Light', PrimeIcons.SUN);
  public static fromMediaQuery(m: { matches: boolean }): Theme {
    return m.matches ? Theme.DARK_THEME : Theme.LIGHT_THEME;
  }
  private constructor(readonly label: string, readonly icon: string) {}
}
