async function getData() {
  const response = await fetch(
    'https://archive-api.open-meteo.com/v1/archive?latitude=-33.46&longitude=-70.65&start_date=2022-12-08&end_date=2023-01-07&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo&timeformat=unixtime'
  );
  const data = response.json();
  const temperature_2m_max = daily;

  console.log(temperature_2m_max);
}

getData();
