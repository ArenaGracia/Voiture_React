import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Energie = lazy(() => import("../views/elements/Energie/Energie"));
const Categorie = lazy(() => import("../views/elements/Categorie/Categorie"));
const Couleur = lazy(() => import("../views/elements/Couleur/Couleur"));
const Modele = lazy(() => import("../views/elements/Modele/Modele"));
const Marque = lazy(() => import("../views/elements/Marque/Marque"));
const EditEnergie = lazy(() => import("../views/elements/Energie/EditEnergie"));
const EditCategorie = lazy(() => import("../views/elements/Categorie/EditCategorie"));
const EditCouleur = lazy(() => import("../views/elements/Couleur/EditCouleur"));
const EditModele = lazy(() => import("../views/elements/Modele/EditModele"));
const EditMarque = lazy(() => import("../views/elements/Marque/EditMarque"));
const DeleteEnergie = lazy(() => import("../views/elements/Energie/DeleteEnergie"));
const DeleteCategorie = lazy(() => import("../views/elements/Categorie/DeleteCategorie"));
const DeleteCouleur = lazy(() => import("../views/elements/Couleur/DeleteCouleur"));
const DeleteModele = lazy(() => import("../views/elements/Modele/DeleteModele"));
const DeleteMarque = lazy(() => import("../views/elements/Marque/DeleteMarque"));

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
      { path: "/energie", exact: true, element: <Energie /> },
      { path: "/energie/edit/:id", exact: true, element: <EditEnergie /> },
      { path: "/energie/delete/:id", exact: true, element: <DeleteEnergie /> },
      { path: "/categorie", exact: true, element: <Categorie /> },
      { path: "/categorie/edit/:id", exact: true, element: <EditCategorie /> },
      { path: "/categorie/delete/:id", exact: true, element: <DeleteCategorie /> },
      { path: "/couleur", exact: true, element: <Couleur /> },
      { path: "/couleur/edit/:id", exact: true, element: <EditCouleur /> },
      { path: "/couleur/delete/:id", exact: true, element: <DeleteCouleur /> },
      { path: "/modele", exact: true, element: <Modele /> },
      { path: "/modele/edit/:id", exact: true, element: <EditModele /> },
      { path: "/modele/delete/:id", exact: true, element: <DeleteModele /> },
      { path: "/marque", exact: true, element: <Marque /> },
      { path: "/marque/edit/:id", exact: true, element: <EditMarque /> },
      { path: "/marque/delete/:id", exact: true, element: <DeleteMarque /> },
    ],
  },
];

export default ThemeRoutes;
