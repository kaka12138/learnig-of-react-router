export interface ILocation {
  latitude: number
  longitude: number
}
export const getPkgLocation = () => {
  return new Promise<ILocation>((reslove) => {
    setTimeout(() => { reslove(
      {
        latitude: 30.5928,
        longitude: 114.3055
      }
    ) }, 3000)
  })
}
