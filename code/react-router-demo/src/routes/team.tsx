import { useLoaderData, useParams, type ActionFunction } from "react-router-dom";
export async function loader() {
  // 延迟2秒加载
  await new Promise(resolve => setTimeout(resolve, 2000))
  return { msg: "teamsuccess" }
}

export const action: ActionFunction = ({ params }) => {
  console.log("action params", params);
  return null
}

export default function Team() {
  const params = useParams();
  console.log("get params in params", params)
  // @ts-expect-error
  const { msg } = useLoaderData();
  return <div>This is the team route! --- { msg }</div>;
}
