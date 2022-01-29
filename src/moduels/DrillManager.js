const remoteURL="http://localhost:5002"

export const getDrillById = (drillId) => {
  return fetch(`${remoteURL}/drill_logs/${drillId}`)
  .then(res => res.json())
}

export const getAllDrills = () => {
    return fetch(`${remoteURL}/drill_logs`)
    .then(res => res.json())
  }