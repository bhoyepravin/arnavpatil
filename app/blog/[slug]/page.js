
// import { notFound } from "next/navigation";
// import { blogPosts, coachInfo } from "@/lib/data";
// import { buildBlogMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
// import Link from "next/link";
// import { FaWhatsapp } from "react-icons/fa";
// import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";

// export async function generateStaticParams() {
//   return blogPosts.map((p) => ({ slug: p.slug }));
// }

// export async function generateMetadata({ params }) {
//   // ✅ Await params here too
//   const { slug } = await params;
//   const post = blogPosts.find((p) => p.slug === slug);
//   if (!post) return {};
//   return buildBlogMetadata(post);
// }

// export default async function BlogPostPage({ params }) {  // ✅ Make component async
//   // ✅ Await params before using it
//   const { slug } = await params;
  
//   const post = blogPosts.find((p) => p.slug === slug);
//   if (!post) notFound();

//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "Blog", href: "/blog" },
//     { name: post.title, href: `/blog/${post.slug}` },
//   ]);

//   const articleSchema = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline: post.title,
//     description: post.excerpt,
//     datePublished: post.date,
//     author: { "@type": "Person", name: "Arnav Patil" },
//     publisher: {
//       "@type": "Organization",
//       name: "Arnav Patil & Co.",
//     },
//     keywords: post.tags.join(", "),
//   };

//   return (
//     <>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

//       {/* Hero */}
//       <section
//         className="pt-32 pb-16 relative overflow-hidden"
//         style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
//       >
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 right-0 w-80 h-80 opacity-15" style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }} />
//         </div>

//         <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
//           <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 font-inter transition-colors">
//             <ArrowLeft size={14} /> Back to Blog
//           </Link>

//           <div className="flex flex-wrap gap-2 mb-5">
//             <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F97316]/20 text-orange-300 font-inter">
//               <Tag size={10} /> {post.category}
//             </span>
//             <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/10 text-slate-300 font-inter">
//               <Clock size={10} /> {post.readTime} read
//             </span>
//             <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/10 text-slate-300 font-inter">
//               <Calendar size={10} />
//               {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
//             </span>
//           </div>

//           <h1
//             className="font-montserrat font-extrabold text-white leading-tight mb-4"
//             style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
//           >
//             {post.title}
//           </h1>
//           <p className="text-slate-400 text-lg font-inter">{post.excerpt}</p>
//         </div>
//       </section>

//       {/* Content */}
//       <article className="py-16 bg-white">
//         <div className="max-w-3xl mx-auto px-6 lg:px-8">
//           <div className="prose prose-slate max-w-none">
//             {post.content.map((block, i) => {
//               if (block.type === "intro") {
//                 return (
//                   <p key={i} className="text-slate-600 text-lg leading-relaxed font-inter mb-8 border-l-4 border-[#F97316] pl-5 italic">
//                     {block.text}
//                   </p>
//                 );
//               }
//               if (block.type === "heading") {
//                 return (
//                   <h2 key={i} className="font-montserrat font-bold text-2xl text-[#0F172A] mt-10 mb-4">
//                     {block.text}
//                   </h2>
//                 );
//               }
//               if (block.type === "paragraph") {
//                 return (
//                   <p key={i} className="text-slate-600 text-base leading-relaxed font-inter mb-5">
//                     {block.text}
//                   </p>
//                 );
//               }
//               if (block.type === "list") {
//                 return (
//                   <ul key={i} className="space-y-2 mb-6 pl-0 list-none">
//                     {block.items.map((item, j) => (
//                       <li key={j} className="flex items-start gap-3 text-slate-600 text-sm font-inter">
//                         <span className="w-2 h-2 rounded-full bg-[#F97316] mt-2 flex-shrink-0" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 );
//               }
//               if (block.type === "callout") {
//                 return (
//                   <div
//                     key={i}
//                     className="my-8 p-6 rounded-2xl border border-orange-200"
//                     style={{ background: "linear-gradient(135deg, #FFF7ED, #FEF3C7)" }}
//                   >
//                     <p className="text-slate-700 font-inter font-medium text-sm leading-relaxed">
//                       💡 {block.text}
//                     </p>
//                   </div>
//                 );
//               }
//               return null;
//             })}
//           </div>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-100">
//             <span className="text-sm text-slate-400 font-inter mr-2">Tags:</span>
//             {post.tags.map((tag) => (
//               <span key={tag} className="text-sm px-3 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-lg font-inter">
//                 #{tag}
//               </span>
//             ))}
//           </div>

//           {/* Author card */}
//           <div className="mt-10 p-6 bg-[#F8FAFC] rounded-3xl border border-slate-100">
//             <div className="flex items-center gap-4 mb-4">
//               <div
//                 className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg font-montserrat"
//                 style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
//               >
//                 A
//               </div>
//               <div>
//                 <div className="font-montserrat font-bold text-[#0F172A]">Arnav Patil</div>
//                 <div className="text-sm text-slate-500 font-inter">International Business Coach & Strategist</div>
//               </div>
//             </div>
//             <p className="text-slate-500 text-sm font-inter">
//               Arnav Patil has helped 1000+ business owners across India and 5 countries grow their businesses with proven strategies and systems.
//             </p>
//           </div>
//         </div>
//       </article>

//       {/* CTA */}
//       <section className="py-16 bg-[#0F172A] text-center px-6">
//         <h2 className="font-montserrat font-extrabold text-2xl text-white mb-3">
//           Want Personalised Business Advice?
//         </h2>
//         <p className="text-slate-400 font-inter mb-8">
//           Book a free consultation with Arnav Sir and get advice tailored to your specific business.
//         </p>
//         <div className="flex justify-center gap-4 flex-wrap">
//           <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
//             <FaWhatsapp size={17} /> Book Free Consultation
//           </a>
//           <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors font-inter">
//             <ArrowLeft size={14} /> More Articles
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }

// import { notFound } from "next/navigation";
// import { blogPosts, coachInfo } from "@/lib/data";
// import { buildBlogMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
// import Link from "next/link";
// import { FaWhatsapp } from "react-icons/fa";
// import { ArrowLeft } from "lucide-react";

// export async function generateStaticParams() {
//   return blogPosts.map((p) => ({ slug: p.slug }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const post = blogPosts.find((p) => p.slug === slug);
//   if (!post) return {};
//   return buildBlogMetadata(post);
// }

// export default async function BlogPostPage({ params }) {
//   const { slug } = await params;

//   const post = blogPosts.find((p) => p.slug === slug);
//   if (!post) notFound();

//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "Blog", href: "/blog" },
//     { name: post.title, href: `/blog/${post.slug}` },
//   ]);

//   const articleSchema = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline: post.title,
//     description: post.excerpt,
//     datePublished: post.date,
//     author: { "@type": "Person", name: "Arnav Patil" },
//     publisher: {
//       "@type": "Organization",
//       name: "Arnav Patil & Co.",
//     },
//     keywords: post.tags.join(", "),
//   };

//   return (
//     <>
//       {/* SEO Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
//       />

//       {/* ================= HERO SECTION ================= */}
//       <section className="pt-28 pb-12 bg-white">
//         <div className="max-w-4xl mx-auto px-6">

//           {/* Back */}
//           <Link
//             href="/blog"
//             className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#F97316] mb-6"
//           >
//             <ArrowLeft size={14} />
//             Back to Blog
//           </Link>

//           {/* Featured Image */}
//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full h-[320px] object-cover rounded-2xl mb-6"
//           />

//           {/* Meta */}
//           <div className="text-sm text-slate-400 mb-3">
//             Published by{" "}
//             <span className="text-[#F97316] font-medium">
//               CA Rahul Malodia
//             </span>{" "}
//             •{" "}
//             {new Date(post.date).toLocaleDateString("en-IN", {
//               day: "numeric",
//               month: "long",
//               year: "numeric",
//             })}
//           </div>

//           {/* Title */}
//           <h1 className="font-montserrat font-extrabold text-3xl text-[#0F172A] mb-4 leading-tight">
//             {post.title}
//           </h1>

//           {/* Excerpt */}
//           <p className="text-slate-500 text-lg leading-relaxed">
//             {post.excerpt}
//           </p>
//         </div>
//       </section>

//       {/* ================= CONTENT ================= */}
//       <article className="py-12 bg-white">
//         <div className="max-w-3xl mx-auto px-6">

//           <div className="space-y-6 text-slate-600 leading-relaxed font-inter">

//             {post.content.map((block, i) => {

//               if (block.type === "intro") {
//                 return (
//                   <p
//                     key={i}
//                     className="text-lg border-l-4 border-[#F97316] pl-5 italic text-slate-700"
//                   >
//                     {block.text}
//                   </p>
//                 );
//               }

//               if (block.type === "heading") {
//                 return (
//                   <h2
//                     key={i}
//                     className="text-xl font-bold text-[#0F172A] mt-8"
//                   >
//                     {block.text}
//                   </h2>
//                 );
//               }

//               if (block.type === "paragraph") {
//                 return <p key={i}>{block.text}</p>;
//               }

//               if (block.type === "list") {
//                 return (
//                   <ul key={i} className="list-disc pl-5 space-y-2">
//                     {block.items.map((item, j) => (
//                       <li key={j}>{item}</li>
//                     ))}
//                   </ul>
//                 );
//               }

//               if (block.type === "callout") {
//                 return (
//                   <div
//                     key={i}
//                     className="p-5 rounded-xl border border-orange-200 bg-orange-50"
//                   >
//                     <p className="text-sm font-medium text-slate-700">
//                       💡 {block.text}
//                     </p>
//                   </div>
//                 );
//               }

//               return null;
//             })}
//           </div>

//           {/* ================= TAGS ================= */}
//           <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-100">
//             <span className="text-sm text-slate-400">Tags:</span>
//             {post.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-lg"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>

//           {/* ================= AUTHOR ================= */}
//           <div className="mt-10 p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100">
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-12 h-12 rounded-xl bg-[#F97316] text-white flex items-center justify-center font-bold">
//                 A
//               </div>
//               <div>
//                 <div className="font-bold text-[#0F172A]">
//                   Arnav Patil
//                 </div>
//                 <div className="text-sm text-slate-500">
//                   Business Coach
//                 </div>
//               </div>
//             </div>

//             <p className="text-sm text-slate-500">
//               Helping business owners scale with proven systems, marketing strategies, and execution frameworks.
//             </p>
//           </div>
//         </div>
//       </article>

//       {/* ================= CTA ================= */}
//       <section className="py-14 bg-[#0F172A] text-center px-6">
//         <h2 className="text-2xl font-bold text-white mb-3">
//           Want Personalised Business Advice?
//         </h2>

//         <p className="text-slate-400 mb-6">
//           Get expert guidance tailored to your business.
//         </p>

//         <a
//           href={coachInfo.whatsapp}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#EA580C] transition"
//         >
//           <FaWhatsapp />
//           Book Free Consultation
//         </a>
//       </section>
//     </>
//   );
// }

import { notFound } from "next/navigation";
import { blogPosts, coachInfo } from "@/lib/data";
import { buildBlogMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import Link from "next/link";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { ArrowLeft, Clock, Tag, Calendar, User, Heart, Share2, Bookmark, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildBlogMetadata(post);
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Get related posts (excluding current)
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

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
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Reading Progress Bar */}
      <div 
        className="reading-progress-bar" 
        style={{ 
          height: "3px", 
          background: "#0891B2", 
          width: "0%", 
          position: "fixed", 
          top: 0, 
          left: 0, 
          zIndex: 1000, 
          transition: "width 0.1s ease-out" 
        }} 
      />

      {/* ================= HERO SECTION ================= */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6">

          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#F97316] mb-6 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Category and Meta */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F97316]/10 text-[#F97316]">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock size={12} /> {post.readTime} read
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl text-[#0F172A] mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <div className="font-semibold text-[#0F172A] text-sm">Arnav Patil</div>
              <div className="text-xs text-slate-400">International Business Coach & Strategist</div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
            <img
              src={post.image || `https://placehold.co/1200x600/F97316/white?text=${encodeURIComponent(post.title.split(" ").slice(0, 3).join(" "))}`}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Excerpt */}
          <div className="text-slate-600 text-lg leading-relaxed border-l-4 border-[#F97316] pl-5 italic font-medium">
            {post.excerpt}
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          <div className="space-y-6 text-slate-600 leading-relaxed font-inter">

            {post.content.map((block, i) => {

              if (block.type === "intro") {
                return (
                  <p
                    key={i}
                    className="text-lg border-l-4 border-[#F97316] pl-5 italic text-slate-700"
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-[#0F172A] mt-8 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return <p key={i} className="mb-4">{block.text}</p>;
              }

              if (block.type === "list") {
                return (
                  <ul key={i} className="list-disc pl-5 space-y-2 mb-4">
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "callout") {
                return (
                  <div
                    key={i}
                    className="p-5 rounded-xl border-l-4 border-[#0891B2] bg-teal-50 my-6"
                  >
                    <p className="text-sm font-medium text-slate-700">
                      💡 {block.text}
                    </p>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* ================= TAGS ================= */}
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-slate-100">
            <span className="text-sm text-slate-400">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full hover:bg-[#F97316] hover:text-white transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* ================= ENGAGEMENT SECTION ================= */}
          <div className="flex items-center justify-center gap-6 mt-8 py-6 border-y border-slate-100">
            <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-semibold transition-all hover:scale-105">
              <Heart size={18} className="text-[#F97316]" /> Like (24)
            </button>
            <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-semibold transition-all hover:scale-105">
              <Share2 size={18} className="text-[#0891B2]" /> Share
            </button>
            <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-semibold transition-all hover:scale-105">
              <Bookmark size={18} className="text-[#F97316]" /> Save
            </button>
          </div>

          {/* ================= AUTHOR CARD (UPGRADED) ================= */}
          <div className="mt-10 p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0">
                A
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="font-montserrat font-bold text-xl text-[#0F172A]">Arnav Patil</div>
                    <div className="text-sm text-slate-500">International Business Coach & Strategist</div>
                  </div>
                  <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-[#F97316] text-[#F97316] text-sm font-semibold hover:bg-[#F97316] hover:text-white transition-all">
                    Follow <ChevronRight size={14} />
                  </button>
                </div>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Arnav Patil has helped 1000+ business owners across India and 5 countries grow their businesses with proven strategies and systems.
                </p>
                <div className="flex gap-3 mt-4">
                  <a href="#" className="text-slate-400 hover:text-[#0891B2] transition-colors"><FaTwitter size={18} /></a>
                  <a href="#" className="text-slate-400 hover:text-[#0891B2] transition-colors"><FaLinkedin size={18} /></a>
                  <a href="#" className="text-slate-400 hover:text-[#0891B2] transition-colors"><FaFacebook size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ================= RELATED ARTICLES ================= */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-wide">Keep Reading</span>
              <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mt-2">Related Articles</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-teal-100 flex items-center justify-center">
                    <span className="text-4xl">📘</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#F97316] bg-orange-50 px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock size={10} /> {relatedPost.readTime}
                      </span>
                    </div>
                    <h3 className="font-montserrat font-bold text-[#0F172A] text-base leading-snug mb-2 group-hover:text-[#F97316] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= NEWSLETTER SECTION ================= */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 text-center shadow-xl"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
          >
            <span className="text-[#F97316] text-sm font-semibold font-inter tracking-wide uppercase">Newsletter</span>
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-white mt-2 mb-3">The Morning Briefing</h3>
            <p className="text-slate-300 font-inter text-base max-w-md mx-auto mb-6">
              Start your day with actionable business insights, strategies, and trends — delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-5 py-3 rounded-xl border-0 outline-none font-inter text-sm bg-white/10 text-white placeholder:text-slate-400 focus:bg-white/20 transition-all"
              />
              <button className="px-6 py-3 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm transition-all hover:scale-105">
                Subscribe Free
              </button>
            </div>
            <p className="text-xs text-slate-500 font-inter mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-14 bg-[#0F172A] text-center px-6">
        <h2 className="text-2xl font-bold text-white mb-3">
          Want Personalised Business Advice?
        </h2>

        <p className="text-slate-400 mb-6">
          Get expert guidance tailored to your business.
        </p>

        <a
          href={coachInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#EA580C] transition"
        >
          <FaWhatsapp />
          Book Free Consultation
        </a>
      </section>

      {/* Progress Bar Script */}
      <script dangerouslySetInnerHTML={{ __html: `
        window.addEventListener('scroll', function() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          var progressBar = document.querySelector('.reading-progress-bar');
          if (progressBar) {
            progressBar.style.width = scrolled + '%';
          }
        });
      ` }} />
    </>
  );
}