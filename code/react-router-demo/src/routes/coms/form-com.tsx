import { type ActionFunction, Form, type LoaderFunction, useLoaderData, useActionData, useLocation } from "react-router-dom"

export const loader: LoaderFunction = ({request}) => {
  console.log("excute loader in form-com")
  const url = new URL(request.url)
  console.log("url", url)
  const sort = url.searchParams.get("sort")
  const stars = url.searchParams.get("stars")
  const amenities = url.searchParams.get("amenities")
  return {
    sort,
    stars,
    amenities
  }
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const sort = formData.get("sort")
  const stars = formData.getAll("stars")
  const amenities = formData.getAll("amenities")
  return {
    sort,
    stars,
    amenities
  }
}

export default function FormCom() {
  const loaderData = useLoaderData()
  const actionData = useActionData()
  const { state } = useLocation()
  return (
    <>
      <p>loader data: {JSON.stringify(loaderData)}</p>
      <p>action data: {JSON.stringify(actionData)}</p>
      <p>state data: {JSON.stringify(state)}</p>
      <Form method="get" state={{ data: "state-data" }} navigate={false}>
        <select name="sort">
          <option value="price">Price</option>
          <option value="stars">Stars</option>
          <option value="distance">Distance</option>
        </select>
        <fieldset>
          <legend>Star Rating</legend>
          <label>
            <input type="radio" name="stars" value="5" />{" "}★★★★★
          </label>
          <label>
            <input type="radio" name="stars" value="4" /> ★★★★
          </label>
          <label>
            <input type="radio" name="stars" value="3" /> ★★★
          </label>
          <label>
            <input type="radio" name="stars" value="2" /> ★★
          </label>
          <label>
            <input type="radio" name="stars" value="1" /> ★
          </label>
        </fieldset>
        <fieldset>
          <legend>Amenities</legend>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="pool"
            />{" "}
            Pool
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="exercise"
            />{" "}
            Exercise Room
          </label>
        </fieldset>
        <button type="submit">submit</button>
      </Form>
    </>
  );
}
