import Posts from "@/components/posts/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto dark:text-white">
      <p className="my-12 text-3xl  text-center">
        Hello and Welcome 👋 &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Kritbovorn</span>.
        </span>
      </p>

      <div className="my-8">
        <Posts />
      </div>
    </main>
  )
}
