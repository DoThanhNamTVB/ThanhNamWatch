const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',

    //login admin
    LOGIN_ADMIN_SUCCESS: 'LOGIN_ADMIN_SUCCESS',
    LOGIN_ADMIN_FAIL: 'LOGIN_ADMIN_FAIL',

    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAIL: 'REGISTER_FAIL',

    LOGOUT: 'LOGOUT',
    RESET: 'RESET',
    RESET_MSG: 'RESET_MSG',

    UPDATE_PASSWORD_SUCCESS: 'UPDATE_PASSWORD_SUCCESS',
    UPDATE_PASSWORD_FAIL: 'UPDATE_PASSWORD_FAIL',

    //get current user

    GET_CURRENT_USER_SUCCESS: 'GET_CURRENT_USER_SUCCESS',
    GET_CURRENT_USER_FAIL: 'GET_CURRENT_USER_FAIL',

    //get current admin

    GET_CURRENT_ADMIN_SUCCESS: 'GET_CURRENT_ADMIN_SUCCESS',
    GET_CURRENT_ADMIN_FAIL: 'GET_CURRENT_ADMIN_FAIL',

    //manager admin
    RESET_ADMIN: 'RESET_ADMIN',

    ADD_ADMIN_SUCCESS: 'ADD_ADMIN_SUCCESS',
    ADD_ADMIN_FAIL: 'ADD_ADMIN_FAIL',

    GET_ALL_ADMIN_SUCCESS: 'GET_ALL_ADMIN_SUCCESS',
    GET_ALL_ADMIN_FAIL: 'GET_ALL_ADMIN_FAIL',

    GET_AN_ADMIN_SUCCESS: 'GET_AN_ADMIN_SUCCESS',
    GET_AN_ADMIN_FAIL: 'GET_AN_ADMIN_FAIL',

    PUT_ADMIN_SUCCESS: 'PUT_ADMIN_SUCCESS',
    PUT_ADMIN_FAIL: 'PUT_ADMIN_FAIL',

    DELETE_ADMIN_SUCCESS: 'DELETE_ADMIN_SUCCESS',
    DELETE_ADMIN_FAIL: 'DELETE_ADMIN_FAIL',

    //manager user
    GET_ALL_USER_SUCCESS: 'GET_ALL_USER_SUCCESS',
    GET_ALL_USER_FAIL: 'GET_ALL_USER_FAIL',

    GET_AN_USER_SUCCESS: 'GET_AN_USER_SUCCESS',
    GET_AN_USER_FAIL: 'GET_AN_USER_FAIL',

    PUT_INFO_USER_SUCCESS: 'PUT_INFO_USER_SUCCESS',
    PUT_INFO_USER_FAIL: 'PUT_INFO_USER_FAIL',

    PUT_USER_SUCCESS: 'PUT_USER_SUCCESS',
    PUT_USER_FAIL: 'PUT_USER_FAIL',

    //manager category

    RESET_CATEGORY: 'RESET_CATEGORY',

    ADD_CATEGORY_SUCCESS: 'ADD_CATEGORY_SUCCESS',
    ADD_CATEGORY_FAIL: 'ADD_CATEGORY_FAIL',

    GET_ALL_CATEGORY_SUCCESS: 'GET_ALL_CATEGORY_SUCCESS',
    GET_ALL_CATEGORY_FAIL: 'GET_ALL_CATEGORY_FAIL',

    GET_AN_CATEGORY_SUCCESS: 'GET_AN_CATEGORY_SUCCESS',
    GET_AN_CATEGORY_FAIL: 'GET_AN_CATEGORY_FAIL',

    PUT_CATEGORY_SUCCESS: 'PUT_CATEGORY_SUCCESS',
    PUT_CATEGORY_FAIL: 'PUT_CATEGORY_FAIL',

    DELETE_CATEGORY_SUCCESS: 'DELETE_CATEGORY_SUCCESS',
    DELETE_CATEGORY_FAIL: 'DELETE_CATEGORY_FAIL',

    //manager color

    RESET_COLOR: 'RESET_COLOR',
    ADD_COLOR_SUCCESS: 'ADD_COLOR_SUCCESS',
    ADD_COLOR_FAIL: 'ADD_COLOR_FAIL',

    GET_ALL_COLOR_SUCCESS: 'GET_ALL_COLOR_SUCCESS',
    GET_ALL_COLOR_FAIL: 'GET_ALL_COLOR_FAIL',

    GET_AN_COLOR_SUCCESS: 'GET_AN_COLOR_SUCCESS',
    GET_AN_COLOR_FAIL: 'GET_AN_COLOR_FAIL',

    PUT_COLOR_SUCCESS: 'PUT_COLOR_SUCCESS',
    PUT_COLOR_FAIL: 'PUT_COLOR_FAIL',

    DELETE_COLOR_SUCCESS: 'DELETE_COLOR_SUCCESS',
    DELETE_COLOR_FAIL: 'DELETE_COLOR_FAIL',

    //manager product
    RESET_PRODUCT: 'RESET_PRODUCT',

    ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
    ADD_PRODUCT_FAIL: 'ADD_PRODUCT_FAIL',

    GET_ALL_PRODUCT_SUCCESS: 'GET_ALL_PRODUCT_SUCCESS',
    GET_ALL_PRODUCT_FAIL: 'GET_ALL_PRODUCT_FAIL',

    GET_AN_PRODUCT_SUCCESS: 'GET_AN_PRODUCT_SUCCESS',
    GET_AN_PRODUCT_FAIL: 'GET_AN_PRODUCT_FAIL',

    PUT_PRODUCT_SUCCESS: 'PUT_PRODUCT_SUCCESS',
    PUT_PRODUCT_FAIL: 'PUT_PRODUCT_FAIL',

    DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',
    DELETE_PRODUCT_FAIL: 'DELETE_PRODUCT_FAIL',

    GET_PRODUCT_BY_CATEGORY_SUCCESS: 'GET_PRODUCT_BY_CATEGORY_SUCCESS',
    GET_PRODUCT_BY_CATEGORY_FAIL: 'GET_PRODUCT_BY_CATEGORY_FAIL',

    GET_PRODUCT_NEW_SUCCESS: 'GET_PRODUCT_NEW_SUCCESS',
    GET_PRODUCT_NEW_FAIL: 'GET_PRODUCT_NEW_FAIL',

    GET_PRODUCT_HOT_SUCCESS: 'GET_PRODUCT_HOT_SUCCESS',
    GET_PRODUCT_HOT_FAIL: 'GET_PRODUCT_HOT_FAIL',

    GET_PRODUCT_SEARCH_SUCCESS: 'GET_PRODUCT_SEARCH_SUCCESS',
    GET_PRODUCT_SEARCH_FAIL: 'GET_PRODUCT_SEARCH_FAIL',

    GET_PRODUCT_SIMILAR_SUCCESS: 'GET_PRODUCT_SIMILAR_SUCCESS',
    GET_PRODUCT_SIMILAR_FAIL: 'GET_PRODUCT_SIMILAR_FAIL',

    GET_PRODUCT_FILTER_SUCCESS: 'GET_PRODUCT_FILTER_SUCCESS',
    GET_PRODUCT_FILTER_FAIL: 'GET_PRODUCT_FILTER_FAIL',

    //pagenation product

    GET_PRODUCT_LIMIT_SUCCESS: 'GET_PRODUCT_LIMIT_SUCCESS',
    GET_PRODUCT_LIMIT_FAIL: 'GET_PRODUCT_LIMIT_FAIL',

    //manager productColor

    ADD_PRODUCT_COLOR_SUCCESS: 'ADD_PRODUCT_COLOR_SUCCESS',
    ADD_PRODUCT_COLOR_FAIL: 'ADD_PRODUCT_COLOR_FAIL',

    GET_ALL_PRODUCT_COLOR_SUCCESS: 'GET_ALL_PRODUCT_COLOR_SUCCESS',
    GET_ALL_PRODUCT_COLOR_FAIL: 'GET_ALL_PRODUCT_COLOR_FAIL',

    GET_AN_PRODUCT_COLOR_SUCCESS: 'GET_AN_PRODUCT_COLOR_SUCCESS',
    GET_AN_PRODUCT_COLOR_FAIL: 'GET_AN_PRODUCT_COLOR_FAIL',

    PUT_PRODUCT_COLOR_SUCCESS: 'PUT_PRODUCT_COLOR_SUCCESS',
    PUT_PRODUCT_COLOR_FAIL: 'PUT_PRODUCT_COLOR_FAIL',

    DELETE_PRODUCT_COLOR_SUCCESS: 'DELETE_PRODUCT_COLOR_SUCCESS',
    DELETE_PRODUCT_COLOR_FAIL: 'DELETE_PRODUCT_COLOR_FAIL',

    //managerProductFavourite

    ADD_PRODUCT_FAVOURITE_SUCCESS: 'ADD_PRODUCT_FAVOURITE_SUCCESS',
    ADD_PRODUCT_FAVOURITE_FAIL: 'ADD_PRODUCT_FAVOURITE_FAIL',

    GET_ALL_PRODUCT_FAVOURITE_SUCCESS: 'GET_ALL_PRODUCT_FAVOURITE_SUCCESS',
    GET_ALL_PRODUCT_FAVOURITE_FAIL: 'GET_ALL_PRODUCT_FAVOURITE_FAIL',

    DELETE_PRODUCT_FAVOURITE_SUCCESS: 'DELETE_PRODUCT_FAVOURITE_SUCCESS',
    DELETE_PRODUCT_FAVOURITE_FAIL: 'DELETE_PRODUCT_FAVOURITE_FAIL',

    //manager cart

    ADD_CART_SUCCESS: 'ADD_CART_SUCCESS',
    ADD_CART_FAIL: 'ADD_CART_FAIL',

    GET_CART_SUCCESS: 'GET_CART_SUCCESS',
    GET_CART_FAIL: 'GET_CART_FAIL',

    PUT_CART_SUCCESS: 'PUT_CART_SUCCESS',
    PUT_CART_FAIL: 'PUT_CART_FAIL',

    DELETE_CART_SUCCESS: 'DELETE_CART_SUCCESS',
    DELETE_CART_FAIL: 'DELETE_CART_FAIL',

    RESET_CART: 'RESET_CART',

    //manager setting

    GET_ALL_SETTING_SUCCESS: 'GET_ALL_SETTING_SUCCESS',
    GET_ALL_SETTING_FAIL: 'GET_ALL_SETTING_FAIL',

    GET_SETTING_SUCCESS: 'GET_SETTING_SUCCESS',
    GET_SETTING_FAIL: 'GET_SETTING_FAIL',

    PUT_SETTING_SUCCESS: 'PUT_SETTING_SUCCESS',
    PUT_SETTING_FAIL: 'PUT_SETTING_FAIL',

    //manager order

    ADD_ORDER_SUCCESS: 'ADD_ORDER_SUCCESS',
    ADD_ORDER_FAIL: 'ADD_ORDER_FAIL',

    GET_ALL_ORDER_SUCCESS: 'GET_ALL_ORDER_SUCCESS',
    GET_ALL_ORDER_FAIL: 'GET_ALL_ORDER_FAIL',

    GET_ALL_ORDER_BY_STATUS_SUCCESS: 'GET_ALL_ORDER_BY_STATUS_SUCCESS',
    GET_ALL_ORDER_BY_STATUS_FAIL: 'GET_ALL_ORDER_BY_STATUS_FAIL',

    GET_ORDER_BY_ID_SUCCESS: 'GET_ORDER_BY_ID_SUCCESS',
    GET_ORDER_BY_ID_FAIL: 'GET_ORDER_BY_ID_FAIL',

    GET_ORDER_BY_USERID_SUCCESS: 'GET_ORDER_BY_USERID_SUCCESS',
    GET_ORDER_BY_USERID_FAIL: 'GET_ORDER_BY_USERID_FAIL',

    GET_ORDER_BY_STATUS_SUCCESS: 'GET_ORDER_BY_STATUS_SUCCESS',
    GET_ORDER_BY_STATUS_FAIL: 'GET_ORDER_BY_STATUS_FAIL',

    PUT_ORDER_STATUS_BY_ORDERID_SUCCESS: 'PUT_ORDER_STATUS_BY_ORDERID_SUCCESS',
    PUT_ORDER_STATUS_BY_ORDERID_FAIL: 'PUT_ORDER_STATUS_BY_ORDERID_FAIL',

    PUT_ORDER_ORDERID_SUCCESS: 'PUT_ORDER_ORDERID_SUCCESS',
    PUT_ORDER_ORDERID_FAIL: 'PUT_ORDER_ORDERID_FAIL',

    CANCEL_ORDER_SUCCESS: 'CANCEL_ORDER_SUCCESS',
    CANCEL_ORDER_FAIL: 'CANCEL_ORDER_FAIL',

    //chart
    CHART_REVENUE_MOUTH: 'CHART_REVENUE_MOUTH',
    CHART_ORDER: 'CHART_ORDER',
    RESET_CHART: 'RESET_CHART',
};

export default actionTypes;
