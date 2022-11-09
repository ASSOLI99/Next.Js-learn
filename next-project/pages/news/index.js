import Link from "next/link";
function NewsPage() {
  return (
    <>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href="/news/assoli">click to see assoli</Link>
        </li>
      </ul>
    </>
  );
}
export default NewsPage;
