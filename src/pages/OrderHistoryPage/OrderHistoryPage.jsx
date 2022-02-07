// import { checkToken } from '../../utilities/users-service';
import React, { useState, useEffect } from 'react';
import * as resourceAPI from '../../utilities/get-resource';
import CardTest from '../../components/CardTest/CardTest'


export default function OrderHistoryPage() {

  // async function handleCheckToken() {
  //   const expDate = await checkToken();
  //   console.log(expDate);
  // }

  const [resource, setResource] = useState([]);
  useEffect(function () {
    async function getManyResources() {
      const Res = await resourceAPI.getResources()
      setResource(Res)
    }
    getManyResources();
  }, []);

  return (
    <>
      <h1>Ayo</h1>
      {resource.map((r) =>
        <CardTest resource={r} />
      )}
    </>
  );
}