import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/">
        <button className="nav-button">Home</button>
      </Link>
      <Link href="/jobs">
        <button className="nav-button">Jobs</button>
      </Link>
      <Link href="/logIn">
        <button className="nav-button">Log In</button>
      </Link>
      <Link href="/signUp">
        <button className="nav-button">Sign Up</button>
      </Link>
    </nav>
  );
}
