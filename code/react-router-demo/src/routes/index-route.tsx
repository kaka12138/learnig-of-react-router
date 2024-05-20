import { useRevalidator } from "react-router-dom"

export function loader() {
  console.log("excute IndexRoute loader")
  return null
}

export default function IndexRoute() {
  const revalidator = useRevalidator()
  return <div>Index Route --- <button onClick={ () => { revalidator.revalidate() } }>revalidate</button></div>
}
