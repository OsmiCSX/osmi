import CustomTheme from './CustomTheme' // your custom style file
import { OsmiProvider } from 'osmicsx'

const provider = new OsmiProvider(CustomTheme);

const { apply, connect } = provider;

export {
  apply,
  connect
}