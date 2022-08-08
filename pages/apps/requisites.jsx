import React from 'react';
import { Layout } from '../../components/layout/Layout';

function Requisites() {
  return (
    <>
      <p>Requisites</p>
    </>
  );
}

Requisites.getLayout = (page) => <Layout>{page}</Layout>;

export default Requisites;
