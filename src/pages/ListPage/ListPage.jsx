import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as listAPI from '../../utilities/lists-api';
import ListDetail from '../../components/ListDetail/ListDetail'


export default function ListPage() {
  const [lists, setLists] = useState([]);
  const [formData, setFormData] = useState('');
  const navigate = useNavigate();

  useEffect(function () {
    async function getManyLists() {
      const Res = await listAPI.getLists()
      console.log(Res)
      setLists(Res)
    }
    getManyLists();
  }, []);

  async function handleSubmit(evt) {
    evt.preventDefault()
    const list = await listAPI.create(formData)
    setLists([...lists, list])
}

  return (
    <>
      <h1>My Lists</h1>
      {lists.map((l) =>
        <ListDetail list={l} />
      )}
      <div>
        <form onSubmit={handleSubmit}>
          <label>List Name:</label>
          <input name="name" value={formData} onChange={(e) => setFormData(e.target.value)}></input>
          <input type="submit" class="" value="Create List" />
        </form>
      </div>
    </>
  );
}