import { Link, NavLink } from "react-router-dom"; 
export default function LinkCom() {
  return <div>
    <ul>
      <p>Link Com</p>
      <li><Link to="..">back parent relative route</Link></li>
      <li><Link to="../form-com" relative="path">to form com---relative path</Link></li>
      <p>NavLink Com</p>
      <li>
      <NavLink to="." className={({ isActive, isPending}) => isPending? "pending" : isActive ? "active" : ""}>to current link</NavLink>
      </li>
    </ul>
  </div>;
}
