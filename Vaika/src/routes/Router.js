import { Navigate } from "react-router-dom";

/****Layouts*****/
import FullLayout from "../layouts/FullLayout.js";

// route privées
import PrivateRoute from "../routes/PrivateRoute.js";

/***** Pages ****/

import Login from "../views/Login/Login";
import Logout from "../views/Login/Logout";
import Tables from "../views/ui/Tables.js";
import Energie from "../views/elements/Energie/Energie";
import Categorie from "../views/elements/Categorie/Categorie";
import Couleur from "../views/elements/Couleur/Couleur";
import Marque from "../views/elements/Marque/Marque";
import ModeTransmission from "../views/elements/ModeTransmission/ModeTransmission";
import Specification from "../views/elements/Specification/Specification";
import Comission from "../views/elements/Comission/Comission";
import EditEnergie from "../views/elements/Energie/EditEnergie";
import EditCategorie from "../views/elements/Categorie/EditCategorie";
import EditCouleur from "../views/elements/Couleur/EditCouleur";
import EditMarque from "../views/elements/Marque/EditMarque";
import EditSpecification from "../views/elements/Specification/EditSpecification";
import EditModeTransmission from "../views/elements/ModeTransmission/EditModeTransmission";
import EditComission from "../views/elements/Comission/EditComission";
import DeleteEnergie from "../views/elements/Energie/DeleteEnergie";
import DeleteCategorie from "../views/elements/Categorie/DeleteCategorie";
import DeleteCouleur from "../views/elements/Couleur/DeleteCouleur";
import DeleteMarque from "../views/elements/Marque/DeleteMarque";
import DeleteModeTransmission from "../views/elements/ModeTransmission/DeleteModeTransmission";
import DeleteSpecification from "../views/elements/Specification/DeleteSpecification";
import DeleteComission from "../views/elements/Comission/DeleteComission";
import Annonce from "../views/Annonce/AnnonceValider";

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/table" /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/logout", exact: true, element: <PrivateRoute><Logout /></PrivateRoute> },
      { path: "/annonce", exact: true, element: <PrivateRoute> <Annonce /></PrivateRoute> },
      { path: "/table", exact: true, element: <PrivateRoute><Tables /></PrivateRoute> },
      { path: "/energie", exact: true, element: <PrivateRoute><Energie /></PrivateRoute> },
      { path: "/energie/edit/:id", exact: true, element: <PrivateRoute><EditEnergie /></PrivateRoute> },
      { path: "/energie/delete/:id", exact: true, element: <PrivateRoute><DeleteEnergie /></PrivateRoute> },
      { path: "/categorie", exact: true, element: <PrivateRoute><Categorie /></PrivateRoute> },
      { path: "/categorie/edit/:id", exact: true, element: <PrivateRoute><EditCategorie /></PrivateRoute> },
      { path: "/categorie/delete/:id", exact: true, element: <PrivateRoute><DeleteCategorie /></PrivateRoute> },
      { path: "/couleur", exact: true, element: <PrivateRoute><Couleur /></PrivateRoute> },
      { path: "/couleur/edit/:id", exact: true, element: <PrivateRoute><EditCouleur /></PrivateRoute> },
      { path: "/couleur/delete/:id", exact: true, element: <PrivateRoute><DeleteCouleur /></PrivateRoute> },
      { path: "/marque", exact: true, element: <PrivateRoute><Marque /></PrivateRoute> },
      { path: "/marque/edit/:id", exact: true, element: <PrivateRoute><EditMarque /></PrivateRoute> },
      { path: "/marque/delete/:id", exact: true, element: <PrivateRoute><DeleteMarque /></PrivateRoute> },
      { path: "/modeTransmission", exact: true, element: <PrivateRoute><ModeTransmission /></PrivateRoute> },
      { path: "/modeTransmission/edit/:id", exact: true, element: <PrivateRoute><EditModeTransmission /></PrivateRoute> },
      { path: "/modeTransmission/delete/:id", exact: true, element: <PrivateRoute><DeleteModeTransmission /></PrivateRoute> },
      { path: "/specification", exact: true, element: <PrivateRoute><Specification /></PrivateRoute> },
      { path: "/specification/edit/:id", exact: true, element: <PrivateRoute><EditSpecification /></PrivateRoute> },
      { path: "/specification/delete/:id", exact: true, element: <PrivateRoute><DeleteSpecification /></PrivateRoute> },
      { path: "/comission", exact: true, element: <PrivateRoute><Comission /></PrivateRoute> },
      { path: "/comission/edit/:id", exact: true, element: <PrivateRoute><EditComission /></PrivateRoute> },
      { path: "/comission/delete/:id", exact: true, element: <PrivateRoute><DeleteComission /></PrivateRoute> },
    ],
  },
];

export default ThemeRoutes;
