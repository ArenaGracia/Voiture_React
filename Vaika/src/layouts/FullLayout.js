import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import { isAuthenticated } from "../services/AuthService";

const FullLayout = () => {
  const isAuthenticate= isAuthenticated();
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
          { isAuthenticate &&
            <aside className="sidebarArea shadow" id="sidebarArea">
              <Sidebar />
            </aside>
          }
          
        
        <div className="contentArea">
        { isAuthenticate &&
          <Header />
        }
    
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
