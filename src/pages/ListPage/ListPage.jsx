import { useState, useEffect } from 'react';
import * as listAPI from '../../utilities/lists-api';
import ListDetail from '../../components/ListDetail/ListDetail'

export default function ListPage() {
  const [lists, setLists] = useState([]);
  useEffect(function () {
    async function getManyLists() {
      const Res = await listAPI.getLists()
      console.log(Res)
      setLists(Res)
    }
    getManyLists();
  }, []);

  return (
    <>
      <h1>My Lists</h1>
      {lists.map((l) =>
      <ListDetail list={l} />
      )}
    </>
  );
}