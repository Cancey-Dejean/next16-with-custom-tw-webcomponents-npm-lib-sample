import "react"
import type { ButtonVariantProps } from "cn-lit-tw-starter"

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "ds-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          ButtonVariantProps & {
            href?: string
            "new-tab"?: boolean
          },
        HTMLElement
      >
    }
  }
}
