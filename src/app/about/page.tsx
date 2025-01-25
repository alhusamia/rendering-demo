import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookiesStore = await cookies();
  const theme = cookiesStore.get("theme");
  console.log(theme);
  // for the statick rendering we preload the page on the first run .
  // for the dynamic render
  return (
    <div>
      <h1>Aboout page</h1>
      <p>
        for the statick rendering we preload the page on the first run and by
        default all pages are static render.
      </p>
      <p>
        for the dynamic render each time we reload we rebuild the screen and the
        cookies(),headers(),conection(),draftMode(),after() or earchParam props{" "}
      </p>
    </div>
  );
}
