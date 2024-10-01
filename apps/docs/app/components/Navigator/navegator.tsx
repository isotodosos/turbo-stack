import Link from "next/link";

export default function Navegator() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/principal">Principal</Link>
        </li>
        <li>
          <Link href="/secundaria">Secundaria</Link>
        </li>
      </ul>
    </nav>
  );
}
