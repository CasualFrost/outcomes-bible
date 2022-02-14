import { useState, useEffect } from 'react';
import * as resourceAPI from '../../utilities/resources-api';
import CardTest from '../../components/CardTest/CardTest'


export default function ResourceList() {
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
    <br />
    <br />
    <br />
    <br />
    <br />
      <h1>Resource List</h1>
      {resource.map((r) =>
        <CardTest resource={r} />
      )}
      <br />
    <br />
    <br />
    <br />
    <br />
    </>
  );
}