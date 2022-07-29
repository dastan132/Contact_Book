import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Contacts } from './Contacts';
import { useEffect } from 'react';
import { clearAllContact, selectAllContact, deleteAllContact } from '../../actions/contactaction';

export const Contact = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state)=> state.contact.contacts)
  const Selected_contacts = useSelector((state)=> state.contact.selectedContacts)

  useEffect(() => {
    if(selectAll){
      dispatch(selectAllContact(contacts.map(contact => contact.id)))
    }else if (!selectAll){
      dispatch(clearAllContact())
    }
  },[selectAll]);

  console.log(contacts)
  return (
    <div>
    {
      Selected_contacts.length > 0 ? (
        <button onClick={() => {
          dispatch(deleteAllContact())
        } } className='btn btn-danger mb-3'>Delete All</button>):null
    }
        <table className="table shadow">
  <thead>
    <tr>
      <th scope="col">
      <div className='custom-control custom-checkbox'>
      <input onClick={()=> {setSelectAll(!selectAll)}} value={selectAll} id='selectAll' type="checkbox" className='custom-control-input' />
      <label htmlFor='selectAll' className='custom-control-label'></label>
      </div>
      
      </th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((contact)=> 
      <Contacts contact={contact} key={contact.phone} selectAll = {selectAll} />
    )}
  </tbody>
</table>
    </div>
  )
}
 