// import { checkToken } from '../../utilities/users-service';
import React, { useState, useEffect } from 'react';
import * as listAPI from '../../utilities/get-list';
import CardTest from '../../components/CardTest/CardTest'


export default function ListDetailPage() {

  const [list, setList] = useState([]);
  useEffect(function () {
    async function getManyLists() {
      const Res = await listAPI.getLists()
      setList(Res)
    }
    getManyLists();
  }, []);

  return (
    <>
      <h1>Ayo</h1>
      {list.map((l) =>
        <CardTest list={l} />
      )}
    </>
  );
}