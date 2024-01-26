import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Login = lazy(() => import("../views/Login/Login"));
const Tables = lazy(() => import("../views/ui/Tables.js"));
const Energie = lazy(() => import("../views/elements/Energie/Energie"));
const Categorie = lazy(() => import("../views/elements/Categorie/Categorie"));
const Couleur = lazy(() => import("../views/elements/Couleur/Couleur"));
const Marque = lazy(() => import("../views/elements/Marque/Marque"));
const ModeleTransmission = lazy(() => import("../views/elements/ModeleTransmission/ModeleTransmission"));
const EditEnergie = lazy(() => import("../views/elements/Energie/EditEnergie"));
const EditCategorie = lazy(() => import("../views/elements/Categorie/EditCategorie"));
const EditCouleur = lazy(() => import("../views/elements/Couleur/EditCouleur"));
const EditMarque = lazy(() => import("../views/elements/Marque/EditMarque"));
const EditModeleTransmission = lazy(() => import("../views/elements/ModeleTransmission/EditModeleTransmission"));
const DeleteEnergie = lazy(() => import("../views/elements/Energie/DeleteEnergie"));
const DeleteCategorie = lazy(() => import("../views/elements/Categorie/DeleteCategorie"));
const DeleteCouleur = lazy(() => import("../views/elements/Couleur/DeleteCouleur"));
const DeleteMarque = lazy(() => import("../views/elements/Marque/DeleteMarque"));
const DeleteModeleTransmission = lazy(() => import("../views/elements/ModeleTransmission/DeleteModeleTransmission"));
const Annonce = lazy(() => import("../views/Annonce/AnnonceValider"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/Login" /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/annonce", exact: true, element: <Annonce /> },
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
      { path: "/marque", exact: true, element: <Marque /> },
      { path: "/marque/edit/:id", exact: true, element: <EditMarque /> },
      { path: "/marque/delete/:id", exact: true, element: <DeleteMarque /> },
      { path: "/modeleTransmission", exact: true, element: <ModeleTransmission /> },
      { path: "/modeleTransmission/edit/:id", exact: true, element: <EditModeleTransmission /> },
      { path: "/modeleTransmission/delete/:id", exact: true, element: <DeleteModeleTransmission /> },
      { path: "/modeleTransmission/delete/:id", exact: true, element: <DeleteModeleTransmission /> },

    ],
  },
];

export default ThemeRoutes;
