import { useRouter } from "next/router";
function AnotherPage() {
  const router = useRouter();
  const myVar = router.query.newsId;
  return <h1>The {myVar} Page</h1>;
}
export default AnotherPage;
