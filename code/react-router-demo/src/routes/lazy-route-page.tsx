import { useLoaderData, useRouteError } from "react-router-dom";

export async function loader() {
  const data = await new Promise<string>((reslove) => {
    setTimeout(() => {
      reslove('loader data');
    }, 1000)
  });
  throw new Error('loader error')
  return data
}


export function Component() {
  const data = useLoaderData() as string
  return <div>Lazy Route Page --- { data }</div>;
}

export function ErrorBoundary() {
  const error = useRouteError()
  console.log("error", error)
  return <div>lazy route page error</div>;
}
