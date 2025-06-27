import SideNav from "./layouts/SideNav"
import MainLayout from "./layouts/MainLayout"

const Layout = () => {
  return (
    <div className='layout'>
        <SideNav/>
        <MainLayout/>
    </div>
  )
}

export default Layout