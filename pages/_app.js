import { AccountWrapper } from '../store/account'
import '../styles/global.css'
import 'react-responsive-modal/styles.css'
import "../styles/modal.css";

function MyApp({ Component, pageProps }) {
  return (
    <AccountWrapper>
      <Component {...pageProps} />
    </AccountWrapper>
  )
}

export default MyApp
