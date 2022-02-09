const remoteURL="http://localhost:5002"


// export const getContactById = (contactId) => {
//   return fetch(`${remoteURL}/contacts/${contactId}`)
//   .then(res => res.json())
// }

export const getAllContacts = () => {
    return fetch(`${remoteURL}/contacts`)
    .then(res => res.json())
  }



  // export const getTeacherContactById = (contactId) => {
  //   return fetch(`${remoteURL}/contacts_teachers/${contactId}`)
  //   .then(res => res.json())
  // }
  
