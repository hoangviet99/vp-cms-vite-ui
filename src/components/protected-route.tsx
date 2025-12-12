import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

const ProtectedRoute = ({
  redirectPath = "/login",
  children,
}: {
  redirectPath?: string;
  children?: React.ReactNode;
}) => {
  // const isAuthenticated = useSelector(getIsAuthenticated);
  // const dispatch = useDispatch();
  // const userInfo = useSelector(getUserInfo);

  // const navigate = useNavigate();
  // const { data: userRs, isSuccess } = useGetUserByTokenQuery(null, {
  //   skip: Object.keys(userInfo).length > 0 || !isAuthenticated,
  // });

  // useEffect(() => {
  //   if (isSuccess && userRs?.data) {
  //     const { data: userInfo } = userRs;
  //     dispatch(setUser(userInfo));

  //     // Check if user status is PENDING
  //     if (userInfo.status === "PENDING") {
  //       navigate(`/${RouteAuthPath.Welcome}`, { replace: true });
  //       return;
  //     }

  //     const urlRedirect = getCookie<string>("url-redirect");
  //     if (urlRedirect) {
  //       navigate(urlRedirect);
  //       removeCookieByKey("url-redirect");
  //     }
  //   }
  // }, [isSuccess, userRs, dispatch, navigate]);

  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // if (Object.keys(userInfo).length === 0) {
  //   return <SplashScreen showProgress={true} />;
  // }

  return <MainLayout>{children ? children : <Outlet />}</MainLayout>;
};

export default ProtectedRoute;
