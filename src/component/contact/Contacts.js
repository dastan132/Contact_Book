import React from 'react';
import Avatar from 'react-avatar';
import { deleteContact } from '../../actions/contactaction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const Contacts = ({contact, selectAll}) => {
  const dispatch = useDispatch();
  const {name,phone,email, key, id} = contact
  return (
    <tr>
      <td scope="row">
      <div className='custom-control custom-checkbox'>
      <input readOnly={true} checked={selectAll} type="checkbox" className='custom-control-input' />
      <label className='custom-control-label'></label>
      </div>
      </td>
        <td><Avatar className='mr-2' name={name} size="45" round={true}/> {name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>
        
        <Link to={ `/contact/edit/${id}`}>
          <span className='material-icons'>edit</span>
        </Link>
        <Link to>
          <span className='material-icons' onClick={() =>{
            dispatch(deleteContact(id))
          } }>remove_circle</span>
          </Link>
        
        </td>
      </tr>
  )
}
