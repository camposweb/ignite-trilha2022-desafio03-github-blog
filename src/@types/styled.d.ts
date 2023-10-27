import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string
      baseTitle: string
      baseSubtitle: string
      baseText: string
      baseSpan: string
      baseLabel: string
      baseBorder: string
      basePost: string
      baseProfile: string
      baseBackground: string
      baseInput: string
    }
    fonts: {
      textS: string
      textM: string
      textL: string
      componentsLink: string
    }
  }
}
