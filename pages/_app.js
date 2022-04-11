import { AccountWrapper } from '../store/account'
import '../styles/global.css'
import 'react-responsive-modal/styles.css'
import "../styles/modal.css";
import { NavWrapper } from '../store/navigation';
import { PricesWrapper } from '../store/prices';

function MyApp({ Component, pageProps }) {
  return (
    <PricesWrapper>
      <AccountWrapper>
        <NavWrapper>
          <Component {...pageProps} />
        </NavWrapper>
      </AccountWrapper>
    </PricesWrapper>
  )
}

export default MyApp
