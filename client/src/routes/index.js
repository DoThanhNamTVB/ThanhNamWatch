//import router config
import routesConfig from '~/config/routes';
// import layout
import HeaderFooterLayout from '~/components/Layout/HeaderFooter';
// import { LayoutNone } from '~/components/Layout';
// import DefaultLayout from '~/components/Layout/DefaultLayout';

//import pages

import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Cart from '~/pages/Cart';
import Blog from '~/pages/Blog';
import { SearchAdvanced } from '~/components/Layout/components/Header/components';
import ChangePassward from '~/pages/UserManagerInfo/ChangePassWord';
import HistoryOrder from '~/pages/HistoryOrder';
import HistoryOrderDetail from '~/pages/HistoryOrder/HistoryDetail';

//pages of catagory
import CategoryPage from '~/pages/Catagory';
import { CheckoutStep1 } from '~/pages/Checkout';
import { CheckoutStep2 } from '~/pages/Checkout';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import ProductDetail from '~/pages/ProductDetail';
import UserManagerInfo from '~/pages/UserManagerInfo';

//admin layout
import AdminDefaultLayout from '~/components/Layout/Admin/DefaultLayout';
import AdminLayoutNone from '~/components/Layout/Admin/LayoutNone';
//admin page
import SettingInfo from '~/pages/Admin/SettingInfo';
import AdminLogin from '~/pages/Admin/AdminLogin';
import Dashboard from '~/pages/Admin/Dashboard';
import Manager from '~/pages/Admin/Manager';
import { AdminManagerAdd, AdminManagerEdit, AdminMangerEditDetail } from '~/pages/Admin/AdminManager';
//user
import UserManager from '~/pages/Admin/UserManager';
import UserDetail from '~/pages/Admin/UserManager/UserDetail';

//catagory
import { CategoryAdd, CategoryManager, CategoryEdit } from '~/pages/Admin/CatagoryManager';

//color
import { ColorAdd, ColorEdit, ColorManager } from '~/pages/Admin/ColorManager';

//product
import {
    ProductManagerAdd,
    ProductManagerEdit,
    ProductManagerEditDetail,
    ProductColorAdd,
    ProductColorEdit,
} from '~/pages/Admin/ProductManager';

//order
import {
    OrderStatusConfirming,
    OrderDetail,
    OrderStatusConfirmed,
    OrderStatusSuccess,
    OrderCancel,
} from '~/pages/Admin/OrderManager';
import ProductCategoryLimit from '~/pages/ProductCategoryLimit';

//No login required to access the route
const publicRoutes = [
    { path: routesConfig.home, component: Home, layout: HeaderFooterLayout },
    { path: routesConfig.contact, component: Contact, layout: HeaderFooterLayout },
    { path: routesConfig.blog, component: Blog, layout: HeaderFooterLayout },
    { path: routesConfig.searchAdvanced, component: SearchAdvanced, layout: HeaderFooterLayout },
    { path: routesConfig.changePass, component: ChangePassward, layout: HeaderFooterLayout },
    { path: routesConfig.historyOrder, component: HistoryOrder, layout: HeaderFooterLayout },
    { path: routesConfig.historyOrderDetail, component: HistoryOrderDetail, layout: HeaderFooterLayout },

    { path: routesConfig.categoryPage, component: CategoryPage, layout: HeaderFooterLayout },
    { path: routesConfig.categoryLimit, component: ProductCategoryLimit, layout: HeaderFooterLayout },

    { path: routesConfig.cartPage, component: Cart, layout: HeaderFooterLayout },
    { path: routesConfig.checkoutstep1Page, component: CheckoutStep1, layout: HeaderFooterLayout },
    { path: routesConfig.checkoutstep2Page, component: CheckoutStep2, layout: HeaderFooterLayout },

    { path: routesConfig.loginPage, component: Login, layout: HeaderFooterLayout },
    { path: routesConfig.registerPage, component: Register, layout: HeaderFooterLayout },

    { path: routesConfig.productDetailPage, component: ProductDetail, layout: HeaderFooterLayout },
    { path: routesConfig.managerInfoPage, component: UserManagerInfo, layout: HeaderFooterLayout },
];

//Login required to access the route
const privateRoutes = [
    //setting
    { path: routesConfig.setting, component: SettingInfo, layout: AdminDefaultLayout },

    //login
    { path: routesConfig.adminLogin, component: AdminLogin, layout: AdminLayoutNone },
    { path: routesConfig.admin, component: Dashboard, layout: AdminDefaultLayout },
    { path: routesConfig.manager, component: Manager, layout: AdminDefaultLayout },

    //admin manager account
    { path: routesConfig.adminCreateAccount, component: AdminManagerAdd, layout: AdminDefaultLayout },
    { path: routesConfig.adminEditAccount, component: AdminMangerEditDetail, layout: AdminDefaultLayout },
    { path: routesConfig.adminManagerAccount, component: AdminManagerEdit, layout: AdminDefaultLayout },

    //user manager account
    { path: routesConfig.userManager, component: UserManager, layout: AdminDefaultLayout },
    { path: routesConfig.userDetail, component: UserDetail, layout: AdminDefaultLayout },

    //catagory manager
    { path: routesConfig.categoryAdd, component: CategoryAdd, layout: AdminDefaultLayout },
    { path: routesConfig.categoryManager, component: CategoryManager, layout: AdminDefaultLayout },
    { path: routesConfig.categoryEdit, component: CategoryEdit, layout: AdminDefaultLayout },

    //color manager
    { path: routesConfig.colorAdd, component: ColorAdd, layout: AdminDefaultLayout },
    { path: routesConfig.colorManager, component: ColorManager, layout: AdminDefaultLayout },
    { path: routesConfig.colorEdit, component: ColorEdit, layout: AdminDefaultLayout },

    //product manager
    { path: routesConfig.productManagerAdd, component: ProductManagerAdd, layout: AdminDefaultLayout },
    { path: routesConfig.productManagerEdit, component: ProductManagerEdit, layout: AdminDefaultLayout },
    { path: routesConfig.productManagerEditDetail, component: ProductManagerEditDetail, layout: AdminDefaultLayout },

    //productColor manager
    { path: routesConfig.productColorAdd, component: ProductColorAdd, layout: AdminDefaultLayout },
    { path: routesConfig.productColorEdit, component: ProductColorEdit, layout: AdminDefaultLayout },

    //order
    { path: routesConfig.orderComfirming, component: OrderStatusConfirming, layout: AdminDefaultLayout },
    { path: routesConfig.orderConfirmed, component: OrderStatusConfirmed, layout: AdminDefaultLayout },
    { path: routesConfig.orderSuccess, component: OrderStatusSuccess, layout: AdminDefaultLayout },
    { path: routesConfig.OrderDetail, component: OrderDetail, layout: AdminDefaultLayout },
    { path: routesConfig.orderCancel, component: OrderCancel, layout: AdminDefaultLayout },
];

export { publicRoutes, privateRoutes };
