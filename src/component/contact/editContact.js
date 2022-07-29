import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addContact, getContact, updateContact } from '../../actions/contactaction';
import shortid from 'shortid';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';


export const Editcontact = () => {

    let {id} = useParams();
    
  let navigate = useNavigate();
  const contact = useSelector( (state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch("");
  useEffect(() => {
    if(contact!=null){
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
    }
    dispatch(getContact(id) )
}, [contact])

function onUpdateContact (e){
    e.preventDefault();
    const update_contact = Object.assign(contact,{
        name:name,
        email:email,
        phone:phone
    })
    dispatch(updateContact(update_contact));
    navigate("/");

}


  return (
    <div className="container">
        <div className='card border-0 shadow'>
          <div className='card-header'>Add a Contact</div>
          <div className='card-body'>
            <form onSubmit = {(e) => onUpdateContact(e)}>
              <div className='form-group mt-2 col-md-12'>
                <input type="text" className='form-control' placeholder='Enter your name'
                value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='form-group mt-2 col-md-12'>
                <input type="text" className='form-control' placeholder='Enter your Phone Number'
                value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className='form-group mt-2 col-md-12'>
                <input type="text" className='form-control' placeholder='Enter your Email Id'
                value={email} onChange={(e) =>setEmail(e.target.value) }/>
              </div>
              <button className='btn btn-danger mt-2 col-md-12' type='submit'>Edit Contact</button>
            </form>

          </div>
        </div>
    </div> 
  )
}
