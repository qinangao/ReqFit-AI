import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants/index";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ReqFit AI" },
    {
      name: "description",
      content:
        "Making hiring smarter by aligning skills with roles that truly fit.",
    },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <NavBar />
      <section className="main-section">
        <div className="page-heading py-8 md:py-16">
          <h1>Track your applications & Resume Rating</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>

        {resumes.length > 0 && (
          <section className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
