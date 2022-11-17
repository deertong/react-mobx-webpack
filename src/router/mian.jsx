import React from "react";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Layout from "~/components/layout";
import NoFound from "~/components/noFound";
import Tabs from "~/pages/tabs";
import Details from '~/pages/details'

function Main(props) {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/tab" replace />} />
        <Route path="tab/*" element={<Tabs />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Layout>
  );
}

export default Main;
