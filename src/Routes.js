import React, { createElement } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TrashPage } from "./pages/TrashPage";
import { LoginPage } from "./pages/LoginPage";
import { InformationPage } from "./pages/InformationPage";
import { DetailPage } from "./pages/DetailPage";
import { DetailListPage } from "./pages/DetailListPage";
import { TraumaListPage } from "./pages/TraumaListPage";
import {PsychosomaticSummaryPage} from "./pages/PsychosomaticSummaryPage";
import { NervousPage } from "./pages/NervousPage";

export default function RoutesComponent() {
  const routeList = [
    {
      element: Layout,
      path: "/",
      key: "layout",
      children: [
        { element: HomePage, index: true, key: "home" },
        { element: TrashPage, path: "/trash", key: "trash" },
        { element: InformationPage, path: "/information", key: "information" },
        { element: DetailListPage, path: "/detail-list", key: "detail-list" },
        { element: TraumaListPage, path: "/trauma-list", key: "trauma-list" },
        { element: DetailPage, path: "/edit/detail", key: "detail" },
        { element: PsychosomaticSummaryPage, path: "/edit/psychosomatic-summary", key: "psychosomatic-summary" },
        { element: NervousPage, path: "/edit/nervous", key: "nervous" },
      ],
    },
    { element: LoginPage, path: "/login", key: "login" },
  ];

  function routeMap(params) {
    if (params) {
      return params.map(({ children, element, ...item }) =>
        createElement(
          Route,
          { element: element ? createElement(element) : undefined, ...item },
          routeMap(children)
        )
      );
    } else {
      return undefined;
    }
  }
  return (
    <BrowserRouter>
      <Routes>{routeMap(routeList)}</Routes>
    </BrowserRouter>
  );
}
