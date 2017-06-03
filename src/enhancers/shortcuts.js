import { loginRequired, withSidebar, withMenu } from './'

export const dashboardPageWithLogin = (Wrapped) =>
  loginRequired(withSidebar(withMenu(Wrapped)))
