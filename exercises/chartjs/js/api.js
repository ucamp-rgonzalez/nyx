export function getData() {
  return [
    {
      label: 'Javascrpt',
      value: 9,
    },
    {
      label: 'Go',
      value: 10,
    },
  ];
}

export async function getCanadaCovid(province = 'ab') {
  try {
    const response = await fetch(
      `https://api.covidtracking.com/v2/us/daily.json`,
    );
    const { data } = await response.json();
    return data.slice(data.lenght - 30);
  } catch (error) {
    console.log(error);
    return [];
  }
}

// export default getData;
