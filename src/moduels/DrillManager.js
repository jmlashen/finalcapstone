const remoteURL = "http://localhost:5002"

export const getDrillById = (drillId) => {
  return fetch(`${remoteURL}/drill_logs/${drillId}`)
    .then(res => res.json())
}

export const getAllDrills = () => {
  return fetch(`${remoteURL}/drill_logs`)
    .then(res => res.json())
}

export const deleteDrill = (id) => {
  return fetch(`${remoteURL}/drill_logs/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const update = (editedDrill) => {
  return fetch(`${remoteURL}/drills/${editedDrill.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedDrill)
  }).then(data => data.json());
}