import { isRouteErrorResponse, json, useLoaderData, useRouteError, type LoaderFunction } from "react-router-dom"

interface ILoaderData {
  id: string
  name: string
}

export const loader: LoaderFunction = async ({ request, params }) =>  {
  console.log("params", params)
  const url = new URL(request.url)
  console.log("url", url)
  const name = url.searchParams.get("name")
  const code = await new Promise((reslove) => {
    setTimeout(() => {
      // reslove(10000)
      // reslove(403)
      reslove(200)
    }, 1000)
  })
  if(code === 10000) {
    throw new Error("error in loader")
  } else if(code === 403) {
    throw json({ msg: "forbidden" }, { status: 403 })
  }
  return {
    id: params.id,
    name: name
  }
}

export function ErrorCom() {
  const error = useRouteError()
  if(isRouteErrorResponse(error)) {
    return <div>Error: { error.status }---{ error.data.msg }</div>
  }
  return <div>Error something went wrong</div>
}

export default function LoaderPage() {
  const data = useLoaderData() as ILoaderData;
  return <div>
    Loader Page --- { data.id } --- { data.name }
  </div>;
}


