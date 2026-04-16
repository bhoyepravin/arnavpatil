import { notFound } from "next/navigation";
import { blogPosts, coachInfo } from "@/lib/data";
import { buildBlogMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildBlogMetadata(post);
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: "Arnav Patil" },
    publisher: {
      "@type": "Organization",
      name: "Arnav Patil & Co.",
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 opacity-15" style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 font-inter transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F97316]/20 text-orange-300 font-inter">
              <Tag size={10} /> {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/10 text-slate-300 font-inter">
              <Clock size={10} /> {post.readTime} read
            </span>
            <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/10 text-slate-300 font-inter">
              <Calendar size={10} />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          <h1
            className="font-montserrat font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
          >
            {post.title}
          </h1>
          <p className="text-slate-400 text-lg font-inter">{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            {post.content.map((block, i) => {
              if (block.type === "intro") {
                return (
                  <p key={i} className="text-slate-600 text-lg leading-relaxed font-inter mb-8 border-l-4 border-[#F97316] pl-5 italic">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2 key={i} className="font-montserrat font-bold text-2xl text-[#0F172A] mt-10 mb-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "paragraph") {
                return (
                  <p key={i} className="text-slate-600 text-base leading-relaxed font-inter mb-5">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="space-y-2 mb-6 pl-0 list-none">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-600 text-sm font-inter">
                        <span className="w-2 h-2 rounded-full bg-[#F97316] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "callout") {
                return (
                  <div
                    key={i}
                    className="my-8 p-6 rounded-2xl border border-orange-200"
                    style={{ background: "linear-gradient(135deg, #FFF7ED, #FEF3C7)" }}
                  >
                    <p className="text-slate-700 font-inter font-medium text-sm leading-relaxed">
                      💡 {block.text}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-100">
            <span className="text-sm text-slate-400 font-inter mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="text-sm px-3 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-lg font-inter">
                #{tag}
              </span>
            ))}
          </div>

          {/* Author card */}
          <div className="mt-10 p-6 bg-[#F8FAFC] rounded-3xl border border-slate-100">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg font-montserrat"
                style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
              >
                A
              </div>
              <div>
                <div className="font-montserrat font-bold text-[#0F172A]">Arnav Patil</div>
                <div className="text-sm text-slate-500 font-inter">International Business Coach & Strategist</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-inter">
              Arnav Patil has helped 1000+ business owners across India and 5 countries grow their businesses with proven strategies and systems.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-[#0F172A] text-center px-6">
        <h2 className="font-montserrat font-extrabold text-2xl text-white mb-3">
          Want Personalised Business Advice?
        </h2>
        <p className="text-slate-400 font-inter mb-8">
          Book a free consultation with Arnav Sir and get advice tailored to your specific business.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
            <FaWhatsapp size={17} /> Book Free Consultation
          </a>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors font-inter">
            <ArrowLeft size={14} /> More Articles
          </Link>
        </div>
      </section>
    </>
  );
}
