import { matchSorter } from "match-sorter";
import localforage from "localforage";


async function getList() {
  const list =  await localforage.getItem("contacts");
  console.log("list",list)
  const contacts = matchSorter(list, "88", { keys: ["id", "first", "last"] });
  console.log("contacts in l", contacts)
}

getList()
