export async function query(query, variables) {
  const response = await fetch("https://blog.pauliewrites.com/graphql", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    console.error(response);
    return {};
  }

  const { data } = await response.json();
  return data;
}
