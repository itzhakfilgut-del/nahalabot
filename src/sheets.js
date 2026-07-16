const SHEET_ID =
  "19PXKI4aqSLRgGjWjbY7Ue0NZfme5F21Dn7wJZZH4eqA";

const RANGE = "A:D";


export async function getCoordinators(env) {

  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&range=${RANGE}`;


  const response =
    await fetch(url);


  const csv =
    await response.text();


  return parseCSV(csv);

}



function parseCSV(csv) {

  const rows =
    csv
      .split("\n")
      .map(row =>
        row
          .split(",")
          .map(cell =>
            cell.replaceAll('"',"").trim()
          )
      );


  // מוריד כותרת
  rows.shift();


  return rows
    .filter(row => row.length >= 4)
    .map(row => ({
      area: row[0],
      city: row[1],
      name: row[2],
      phone: row[3]
    }));

}
