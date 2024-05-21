import { defer, useLoaderData, Await, useAsyncValue } from "react-router-dom"
import { getPkgLocation, type ILocation} from "../../api" 
import { Suspense } from "react"

export async function loader() {
  const pkgLocationPromise = getPkgLocation()
  const shouldDefer = false
  return defer({
    pkgLocation: shouldDefer ? await pkgLocationPromise : pkgLocationPromise
  })
}

// 使用useAsyncValue优化Await Chilren
function PkgLocationCom() {
  const pkgLocation = useAsyncValue() as ILocation
  return <p>Package location latitude: {pkgLocation.latitude}, longitude: {pkgLocation.longitude}</p>
}

export default function AwaitCom() {
  const data = useLoaderData() as { pkgLocation: ILocation }
  return <>
    <p style={{ textAlign: "center" }}>defer data with Await component</p>
    <Suspense fallback={ <p>Loading package location...</p> }>
      <Await 
        resolve={ data.pkgLocation }
        errorElement = { <p>Failed to load package location</p> }
      >
        {/* 直接在Await chilren中渲染函数 */}
        {/* {
          (pkgLocation: ILocation) => (
            <p>
              Package location latitude: {pkgLocation.latitude}, longitude: {pkgLocation.longitude}
            </p>
          )
        }  */}
        <PkgLocationCom/>
      </Await>
    </Suspense>
  </>
}
