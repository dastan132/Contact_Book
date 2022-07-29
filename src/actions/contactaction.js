import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, DELETE_ALL } from "../constant/type";

export const addContact  = (contact) => ({
       type:CREATE_CONTACT,
      payload:contact
    })
  //get contact
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id
  })
  // update contact
  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact
  })

  //delete contact
  export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id,
  })

  // select all contact

  export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload:id,
  })
  
  //clear selected contacts
  export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
     
  })

  //delete selected contact
  export const deleteAllContact = () => ({
    type: DELETE_ALL,
  
  })
  
  
  
  
  