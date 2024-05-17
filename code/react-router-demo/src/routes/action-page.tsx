import { useActionData, useSubmit, Form, ActionFunction, useFetcher } from "react-router-dom"

export const action: ActionFunction = async function action({ request }) {
  const formData = await request.formData()
  const sumbmitType = formData.get("submitType")
  if(sumbmitType === "add") {
    // await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("add action")
    return { msg: "add success"}    
  }
  if(sumbmitType === "edit") {    
    // await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("edit action")
    return { msg: "edit success" }    
  }
  // throw new Error("unknown submitType")
  return { msg: "unknown submitType"}
}

function Com() {
  // 路由发生跳转时才会获取到action返回的值, 并且是通过Form或者useSubmit提交的数据
  const actionData = useActionData()
  console.log("get actionData from preivous route", actionData)
  // fetcher
  const fetcher = useFetcher()
  // 路由不发生跳转时,可以从fetcher.data获取action返回的值
  console.log("fetcher data", fetcher.data)
  return <>
    {/* <p>action data: { msg }</p> */}
    {/* <fetcher.Form method="post">
      <input type="text" name="name" />
      <input type="number" name="age" />
      <button type="submit" name="submitType" value="add">add</button>
      <button type="submit" name="submitType" value="edit">edit</button>
    </fetcher.Form> */}

    <Form method="post">
      <input type="text" name="name" />
      <input type="number" name="age" />
      <button type="submit" name="submitType" value="add">add</button>
      <button type="submit" name="submitType" value="edit">edit</button>
    </Form>
  </>
}

export default function ActionPage() {
  // imperative submission
  const submit = useSubmit()
  const handleSubmit = () => {
    const data = {
      name: "chenjie",
      age: 22
    }
    submit(data, {
      method: "post",
      action: "/team/666"
    })
  }
  // fetcher
  const fetcher = useFetcher()
  return <div>
    <ul>
      The way of calling action
      <li>1. imperative submission: <button onClick={handleSubmit}>team page</button></li>
      <li>
        <p>2. Form Com</p>
        <Form method="post" action="/team/996">
          <input type="text" name="name" />
          <input type="number" name="age" />
          <button type="submit">submit</button>
        </Form>
      </li>
      <li>
        <p>3. fetcher.Form</p>
        {/* Just like <Form> except it doesn't cause a navigation */}
        {/* 等价于Form的navigate属性设置为false */}
        <fetcher.Form method="post" action="/action-page">
          <input type="text" name="name" />
          <input type="number" name="age" />
          <button type="submit">submit</button>
        </fetcher.Form>
      </li>
    </ul>
    <p>在一个路由中处理多个action</p>
    <div><Com></Com></div>
  </div>;
}
