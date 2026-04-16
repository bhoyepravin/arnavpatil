import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { Clock, Tag, ArrowRight } from "lucide-react";

export const metadata = buildMetadata("blog");

export default function BlogPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ]);

  const accentColors = [
    "linear-gradient(90deg, #F97316, #FB923C)",
    "linear-gradient(90deg, #0891B2, #06B6D4)",
    "linear-gradient(90deg, #8B5CF6, #A78BFA)",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-5 inline-flex">Insights & Tips</span>
          <h1
            className="font-montserrat font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F172A" }}
          >
            Business Growth{" "}
            <span className="gradient-text-orange">Insights</span>
          </h1>
          <p className="text-slate-500 font-inter text-lg">
            Practical strategies, mindset shifts, and real-world tips for business owners — from Arnav Patil.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="pb-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post, i) => (
              <div
                key={post.slug}
                className="group bg-white rounded-3xl border border-slate-100 hover:border-orange-100 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* Color strip */}
                <div className="h-2" style={{ background: accentColors[i % accentColors.length] }} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#F97316] bg-orange-50 px-3 py-1 rounded-full font-inter">
                      <Tag size={10} />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-inter">
                      <Clock size={11} />
                      {post.readTime} read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-montserrat font-bold text-[#0F172A] text-lg leading-snug mb-3 group-hover:text-[#F97316] transition-colors duration-200 flex-1">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-sm leading-relaxed font-inter mb-5">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-lg font-inter">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400 font-inter">
                      {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:gap-2.5 transition-all duration-200 font-inter"
                    >
                      Read <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
