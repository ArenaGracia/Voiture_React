import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Energie = lazy(() => import("../views/elements/Energie/Energie"));
const EditEnergie = lazy(() => import("../views/elements/Energie/EditEnergie"));
const DeleteEnergie = lazy(() => import("../views/elements/Energie/DeleteEnergie"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/energie", exact: true, element: <Energie /> },
      { path: "/energie/edit/:id", exact: true, element: <EditEnergie /> },
      { path: "/energie/delete/:id", exact: true, element: <DeleteEnergie /> },
    ],
  },
];

export default ThemeRoutes;
