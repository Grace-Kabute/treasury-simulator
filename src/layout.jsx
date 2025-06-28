import Accounts from "./layouts/Accounts"
import Footer from "./layouts/Footer"
import MainLayout from "./layouts/MainLayout"
import Transactions from "./layouts/Transactions"
import Treasury from "./layouts/Treasury"
import './styles.css'

const Layout = () => {
  return (
    <div className='layout'>
      <Treasury/>
        <MainLayout/>
        <Accounts/>
        <Transactions/>
        <Footer/>
    </div>
  )
}

export default Layout