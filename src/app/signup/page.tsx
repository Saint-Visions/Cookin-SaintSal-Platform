import TopNav from "@/components/TopNav";
import GlobalFooter from "@/components/GlobalFooter";
import SignupForm from "@/components/forms/SignupForm";

export default function SignupPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 px-6 min-h-screen bg-black text-white">
        <section className="max-w-xl mx-auto py-20">
          <h1 className="text-3xl font-bold text-gold mb-4">Sign Up for SaintSal™</h1>
          <p className="text-gray-300 mb-6">
            Join the gold standard in AI — Supersal™ and the Saint Vision Group ecosystem await.
          </p>
          <SignupForm />
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
