import { AccountWrapper } from '../store/account'
import '../styles/global.css'
import 'react-responsive-modal/styles.css'
import "../styles/modal.css";
import { NavWrapper } from '../store/navigation';

function MyApp({ Component, pageProps }) {
  return (
    <AccountWrapper>
      <NavWrapper>
        <Component {...pageProps} />
      </NavWrapper>
    </AccountWrapper>
  )
}

export default MyApp
