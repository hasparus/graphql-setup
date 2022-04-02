const ENDPOINT = "https://api.spacex.land/graphql";

/**
 * We define our own GraphQL Client fetcher function for `react-query` to limit
 * bundle size while also keeping full control over the fetching process.
 */
export function gqlClient<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: { "Content-Type": "application/json" },
    });

    // We trust that a GraphQL endpoint will return an object.
    // See https://spec.graphql.org/June2018/#sec-Response-Format.

    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    const json = await res.json();

    // Similarly here, we trust that if errors property exists, it's an array of
    // objects with `message` inside as specified in GraphQL Spec
    // https://spec.graphql.org/June2018/#sec-Errors
    if ("errors" in json) {
      const { message } = json.errors[0];

      console.error(json.errors);
      throw new Error(message);
    }
    /* eslint-enable @typescript-eslint/no-unsafe-assignment */

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return json.data;
  };
}
