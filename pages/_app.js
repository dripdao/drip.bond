import { AccountWrapper } from '../store/account'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <AccountWrapper>
      <Component {...pageProps} />
    </AccountWrapper>
  )
}

export default MyApp
