import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
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
  }
}
