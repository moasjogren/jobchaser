import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <ul>
          <span className="footer-bold">Navigation</span>
          <Link href="/jobs">
            <li>Jobs</li>
          </Link>
          <Link href="/signIn">
            <li>Log In</li>
          </Link>
          <Link href="/signUp">
            <li>Sign Up</li>
          </Link>
        </ul>
        <ul>
          <span className="footer-bold">Contact</span>
          <li>info@jobchaser.com</li>
          <li>08-123 45</li>
          <a href="https://github.com/moasjogren">
            <li>Github</li>
          </a>
        </ul>
        <ul>
          <span className="footer-bold">Social</span>
          <a href="https://linkedin.com/">
            <li>LinkedIn</li>
          </a>
          <a href="https://instagram.com">
            <li>Instagram</li>
          </a>
          <a href="https://facebook.com">
            <li>Facebook</li>
          </a>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="footer-logo">
          Job<span>Chaser</span>
        </p>
        <p>&copy; 2025 JobChaser. No Rights Reserved.</p>
        <div className="icons">
          <img src="/React-icon.svg" alt="" />
          <img src="/nextjs.svg" alt="" />
          <img src="/redux-logo-svgrepo.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}
