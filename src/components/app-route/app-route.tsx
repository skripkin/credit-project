import React from "react";
import { Route, RouteProps } from "react-router-dom";

import AppLayout from "./app-layout";

interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  [props: string]: any;
}

const AppRoute = ({ component: Component, ...rest }: AppRouteProps) => (
  <Route
    {...rest}
    render={props => (
      <AppLayout 
        header= {{
          headerMenu: [
            {
              title: "инвесторам",
              link: "investing"
            },
            {
              title: "предпринимателям",
              link: "entrepreneurs"
            },
            {
              title: "о платформе",
              link: "about-us"
            },
            {
              title: "новости",
              link: "news"
            }
          ],
          logoImage: "./logo.png",
          logoLink: "/"
        }}
        footer={{
          logo: "./footerLogo.png",
          address: "Москва, территория инновационного центра «Сколково», ул. Нобеля, д. 5, эт/пом/раб 2/8/2",
          licenceDesc: "© 2018 —2021 Все права защищены ООО «ДжетЛэнд», официальный сайт Лицензия ЦБ РФ №18",
          networks: [
            {
              type: "facebook",
              linkToNetwork: "#"
            },
            {
              type: "instagram",
              linkToNetwork: "#"
            },
            {
              type: "youtube",
              linkToNetwork: "#"
            },
            {
              type: "telegam",
              linkToNetwork: "#"
            }
          ],
          footerLeftMenu: [
            {
              title: "инвесторам",
              link: "investing"
            },
            {
              title: "предпринимателям",
              link: "entrepreneurs"
            },
            {
              title: "партнерам",
              link: "partners"
            }
          ],
          footerRightMenu: [
            {
              title: "документы",
              link: "documents"
            },
            {
              title: "о платформе",
              link: "about-us"
            },
            {
              title: "новости",
              link: "news"
            }
          ],
          licenseInfo: {
            icon: "gerb",
            bankTitle: "Банк России",
            licenseImg: "./license.png"
          }
        }}
          onLoginClick={() => null}
        >
        <Component {...props} />
      </AppLayout>
    )}
  />
);

export default AppRoute;

