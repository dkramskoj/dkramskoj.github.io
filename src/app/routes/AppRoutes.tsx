import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { CheckoutLogin, NotFound } from "../../components";
import UserAccount, * as accountPaths from "../../userAccount/routes";
import { OrderDetails } from "../../userAccount/views";
import { Account, AccountConfirm } from "../../views/Account";
import { ArticlePage } from "../../views/Article";
import { CategoryPage } from "../../views/Category";
import { CollectionPage } from "../../views/Collection";
import { HomePage } from "../../views/Home";
import { ProductPage } from "../../views/Product";
import { SearchPage } from "../../views/Search";

import { CartPage, CheckoutPage, PasswordReset, ThankYouPage } from "@pages";

import * as paths from "./paths";
const publicURI = process.env.NODE_ENV === "development" ? '' : 'saleor-front';

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
console.log(process.env.NODE_ENV === "development")
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
export const Routes: React.FC = () => (
    <Switch>
        <Route exact path={publicURI + paths.baseUrl} component={HomePage} />
        <Route path={publicURI + paths.searchUrl} component={SearchPage} />
        <Route path={publicURI + paths.categoryUrl} component={CategoryPage} />
        <Route path={publicURI + paths.collectionUrl} component={CollectionPage} />
        <Route path={publicURI + paths.productUrl} component={ProductPage} />
        <Route path={publicURI + paths.cartUrl} component={CartPage} />
        <Route path={publicURI + paths.checkoutLoginUrl} component={CheckoutLogin} />
        <Route path={publicURI + paths.pageUrl} component={ArticlePage} />
        <Route path={publicURI + accountPaths.baseUrl} component={UserAccount} />
        <Route path={publicURI + accountPaths.userOrderDetailsUrl} component={OrderDetails} />
        <Route path={publicURI + paths.guestOrderDetailsUrl} component={OrderDetails} />
        <Route path={publicURI + paths.accountUrl} component={Account} />
        <Route path={publicURI + paths.accountConfirmUrl} component={AccountConfirm} />
        <Route path={publicURI + paths.orderHistoryUrl} component={Account} />
        <Route path={publicURI + paths.addressBookUrl} component={Account} />
        <Route path={publicURI + paths.passwordResetUrl} component={PasswordReset} />
        <Route path={publicURI + paths.checkoutUrl} component={CheckoutPage} />
        <Route path={publicURI + paths.orderFinalizedUrl} component={ThankYouPage} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
