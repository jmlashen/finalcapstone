const remoteURL = "http://localhost:5002"

export const getDrillById = (drillId) => {
  return fetch(`${remoteURL}/drill_logs/${drillId}`)
    .then(res => res.json())
}

export const getAllDrills = () => {
  return fetch(`${remoteURL}/drill_logs?_expand=drill_type&_expand=admin&_sort=id&_order=desc`)
    .then(res => res.json())
}

export const deleteDrill = (id) => {
  return fetch(`${remoteURL}/drill_logs/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const updateDrill = (drillObj) => {
  return fetch(`${remoteURL}/drill_logs/${drillObj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(drillObj)
  }).then(data => data.json());
}

export const addDrill = (newDrill) => {
  return fetch(`${remoteURL}/drill_logs`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newDrill)
  }).then(response => response.json())
}

export const getAllAdmins = () => {
  return fetch(`${remoteURL}/admins`)
    .then(res => res.json())
}

export const getDrillTypes = () => {
  return fetch(`${remoteURL}/drill_types`)
    .then(res => res.json())
}

export const getDrillTypeById = (id) => {
  console.log("id is ", id)
  return fetch(`${remoteURL}/drill_types/${id}`)
    .then(res => res.json())
}

export const addDrills = (drill) => {
  return fetch(`${remoteURL}/drill_logs`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(drill)
  }).then(response => response.json())
}

