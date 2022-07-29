import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addContact } from '../../actions/contactaction';
import shortid from 'shortid';
import { useNavigate } from 'react-router';


export const AddContact = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch("")

  function createContact (e){
    e.preventDefault();
    console.log("name:",name);
    console.log("phone:",phone);
    console.log("email:",email);
    const new_Contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email
    }
    dispatch(addContact(new_Contact));
    navigate("/"); 
  }
  return (
    <div className="container">
        <div className='card border-0 shadow'>
          <div className='card-header'>Add a Contact</div>
          <div className='card-body'>
            <form onSubmit={(e) => createContact(e)}>
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
              <button className='btn btn-primary mt-2 col-md-12' type='submit'>Add Contact</button>
            </form>

          </div>
        </div>
    </div> 
  )
}
