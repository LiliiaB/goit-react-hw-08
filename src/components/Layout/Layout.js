import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Suspense } from "react";
import { FallingLines } from "react-loader-spinner";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <FallingLines
            color="#0824AF"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
