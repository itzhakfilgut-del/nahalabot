import { getCoordinators }
from "./sheets.js";


export async function getAreas(env){

  const data =
    await getCoordinators(env);


  return [
    ...new Set(
      data.map(x => x.area)
    )
  ];

}



export async function getCities(
  env,
  area
){

  const data =
    await getCoordinators(env);


  return data
    .filter(x =>
      x.area === area
    )
    .map(x => x.city);

}



export async function getCoordinator(
  env,
  area,
  city
){

  const data =
    await getCoordinators(env);


  return data.find(x =>
    x.area === area &&
    x.city === city
  );

}
