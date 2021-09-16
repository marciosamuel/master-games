export interface ThemeProps {
  primaryText: string;
  secondaryText: string;
  background: string;
  foreground: string;
}

export const darkTheme: ThemeProps = {
  primaryText: '#f2f2f2',
  secondaryText: '#c8c8c8',
  background: '#212121',
  foreground: '#313131',
};

export const lightTheme: ThemeProps = {
  primaryText: '#212121',
  secondaryText: '#313131',
  background: '#f2f2f2',
  foreground: '#c8c8c8',
};
