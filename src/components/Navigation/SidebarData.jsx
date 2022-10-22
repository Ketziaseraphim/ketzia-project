import React from "react";
import Icon from "@mdi/react";
import * as mdiIcons from "@mdi/js";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <Icon path={mdiIcons.mdiViewDashboard} />,
    link: "/",
  },
  {
    title: "Users",
    icon: <Icon path={mdiIcons.mdiAccountMultiple} />,
    link: "/users",
  },
  {
    title: "Products",
    icon: <Icon path={mdiIcons.mdiPackageVariant} />,
    link: "/product",
  },

  {
    title: "Penjualan",
    link: "/penjualan",
    icon: <Icon path={mdiIcons.mdiFinance} />,
    iconClosed: <Icon path={mdiIcons.mdiChevronDown} />,
    iconOpened: <Icon path={mdiIcons.mdiChevronUp} />,
    subNav: [
      {
        title: "Shifts",
        icon: <Icon path={mdiIcons.mdiFileDocumentOutline} />,
        link: "/penjualan/shifts",
      },
      {
        title: "Harian",
        icon: <Icon path={mdiIcons.mdiFileDocumentMultipleOutline} />,
        link: "/penjualan",
      },
      {
        title: "Mingguan",
        icon: <Icon path={mdiIcons.mdiFileDocumentMultipleOutline} />,
        link: "/penjualan/mingguan",
      },
      {
        title: "Bulanan",
        icon: <Icon path={mdiIcons.mdiFileDocumentMultipleOutline} />,
        link: "/penjualan/bulanan",
      },
    ],
  },
  {
    title: "Penerimaan BBM",
    icon: <Icon path={mdiIcons.mdiImport} />,
    link: "/penerimaan",
  },
  {
    title: "Pengeluaran",
    icon: <Icon path={mdiIcons.mdiFileChartOutline} />,
    link: "/pengeluaran",
  },
];
