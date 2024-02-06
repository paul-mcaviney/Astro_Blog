interface gqlParams {
  query: string;
  variables?: object;
}

export async function wpquery({ query, variables = {} }: gqlParams) {
  const response = await fetch("https://gogogame.dev/graphql", {
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
