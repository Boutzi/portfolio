import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Error 404 - Page not found",
  description:
    "View my portfolio of innovative projects and creative solutions.",
};

const NotFoundPage = () => {
  return (
    <Section className="flex justify-between gap-4 min-h-[calc(100vh-170px)] max-lg:pt-8 max-lg:pb-8">
      <div className="px-4 m-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.{" "}
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            <Button>Back to Homepage</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default NotFoundPage;
