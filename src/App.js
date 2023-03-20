import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { useCallback, useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import babylonwacc from "./api/babylonwacc";
import { AbilityContext } from "./Context/AbilityContext";
import defineAbilityFor from "./Casl/Ability";
import Navbar from "./Components/Navbar/Navbar";
import Regions from "./Pages/Regions/Regions";

function App() {

  const Layout = () =>{
    return (
      <>
        <div className="navbar">
        <Navbar/>
        </div>
        <Outlet/>
      </>
    );
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const permissions = useSelector(() => ({
    ADMIN: [
      { action: "manage", subject: "all" },
      { action: "read", subject: "CalcProgress" },
      { action: "read", subject: "Parameters" },
      {
        inverted: true,
        action: ["create", "update", "delete"],
        subject: "Calc",
      },
      { inverted: true, action: "update", subject: "Report" },
    ],
    STANDARD: [
      { action: "create", subject: "Login" },
      { action: "read", subject: "Logout" },
      { inverted: true, action: "manage", subject: "Audit" },
      { action: "read", subject: "Acl" },
      { action: ["create", "read"], subject: "Calc" },
      { action: "read", subject: "CalcProgress" },
      { action: "read", subject: "Parameter" },
      { action: "manage", subject: "Masterdata" },
      { action: "read", subject: "Region" },
      { action: "read", subject: "Country" },
      { action: "read", subject: "Alias" },
      { action: "read", subject: "Severity" },
      { action: "read", subject: "Formula" },
      { action: "read", subject: "Ihs" },
      { action: "read", subject: "Cin" },
      { action: "read", subject: "Beta" },
      { action: "read", subject: "Report" },
      { action: "read", subject: "Export" },
      { action: "read", subject: "ExportGraph" },
    ],
    POWER: [
      { action: "create", subject: "Login" },
      { action: "read", subject: "Logout" },
      { inverted: true, action: "manage", subject: "Audit" },
      { action: "read", subject: "Acl" },
      { action: "manage", subject: "Calc" },
      { action: "read", subject: "CalcProgress" },
      { action: ["create", "read", "update"], subject: "Parameter" },
      { action: "manage", subject: "Masterdata" },
      { action: "read", subject: "Region" },
      { action: "read", subject: "Country" },
      { action: ["create", "read", "update"], subject: "Alias" },
      { action: ["create", "read", "update"], subject: "Severity" },
      { action: ["create", "read", "update"], subject: "Formula" },
      { action: ["create", "read", "update"], subject: "Ihs" },
      { action: ["create", "read", "update"], subject: "Cin" },
      { action: ["create", "read", "update"], subject: "Beta" },
      { action: ["create", "read", "update"], subject: "QuarterManager" },
      { action: "read", subject: "Report" },
      { action: "read", subject: "Export" },
      { action: "read", subject: "ExportGraph" },
    ],
    DISPLAY: [
      { action: "create", subject: "Login" },
      { action: "read", subject: "Logout" },
      { inverted: true, action: "manage", subject: "Audit" },
      { action: "read", subject: "Acl" },
      { inverted: true, action: "manage", subject: "Calc" },
      { action: "read", subject: "CalcProgress" },
      { action: "read", subject: "Parameter" },
      { action: "manage", subject: "Masterdata" },
      { action: "read", subject: "Region" },
      { action: "read", subject: "Country" },
      { action: "read", subject: "Alias" },
      { action: "read", subject: "Severity" },
      { action: "read", subject: "Formula" },
      { action: "read", subject: "Ihs" },
      { action: "read", subject: "Cin" },
      { action: "read", subject: "Beta" },
      { action: "read", subject: "Report" },
      { action: "read", subject: "Export" },
      { action: "read", subject: "ExportGraph" },
    ],
    AUDITOR: [],
    __HISTORY: [],
  }));


  
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Login/>;
    } return children;
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element: (<ProtectedRoute><Layout/></ProtectedRoute>),
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/regions",
          element:<Regions/>
        }
      ]
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);

  const getAcl = useCallback(async () => {
    try {
      const response = await babylonwacc.get("user-management/users/acl");
      if (response.status === 200) {
        dispatch(authActions.getAcl(response.data.data));
      }
    } catch (error) {
      console.error(error);
    }
    dispatch(authActions.finishBoot());
  }, [dispatch]);

  const offlineLogin = () => {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    if (_.isNull(token) || _.isNull(user)) {
      localStorage.clear();
      dispatch(authActions.finishBoot());
    } else {
      user = JSON.parse(user);
      getAcl();
    }
    dispatch(authActions.authUser({ user, token }));
  };

  useEffect(() => {
    offlineLogin(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <AbilityContext.Provider value={defineAbilityFor(user, permissions)}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AbilityContext.Provider>
    </div>
  );
}

export default App;
