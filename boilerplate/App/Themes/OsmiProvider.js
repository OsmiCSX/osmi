import { OsmiProvider } from "osmicsx"
import CustomTheme from "./CustomTheme" // your custom style file

const provider = new OsmiProvider(CustomTheme)

export const apply = (styles) => provider.apply(styles)
export const connect = (styles) => provider.connect(styles)