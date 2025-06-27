import Accounts from "./layouts/Accounts"
import Footer from "./layouts/Footer"
import MainLayout from "./layouts/MainLayout"
import Transactions from "./layouts/Transactions"

const Layout = () => {
  return (
    <div className='layout'>
        <MainLayout/>
        <Accounts/>
        <Transactions/>
        <Footer/>
    </div>
  )
}

export default Layout