import { Link } from "react-router-dom"; 
export default function LinkCom() {
  return <div>
    <ul>
      <li><Link to="..">back parent relative route</Link></li>
      <li><Link to="../form-com" relative="path">to form com---relative path</Link></li>
    </ul>
  </div>;
}
