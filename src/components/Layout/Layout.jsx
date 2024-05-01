import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { FallingLines } from "react-loader-spinner";
import { Header } from "../Header/Header";

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
