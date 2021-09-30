export default function getServices(req, res) {
  fetch(
    'https://graphql.contentful.com/content/v1/spaces/oyymjzlnon6b?access_token=lGI8x0dbt-N0WLp6HKu6WRnS0vrVxltkBP7TEoor218',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  )
    .then((res) => res.json())
    .then((json) => console.log(json.data));
}
