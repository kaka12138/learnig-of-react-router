import { useLoaderData } from "react-router-dom";
export async function loader() {
  // 延迟2秒加载
  await new Promise(resolve => setTimeout(resolve, 2000))
  return { msg: "teamsuccess" }
}

export default function Team() {
  // @ts-expect-error
  const { msg } = useLoaderData();
  return <div>This is the team route! --- { msg }</div>;
}
