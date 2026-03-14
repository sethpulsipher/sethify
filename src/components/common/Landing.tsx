"use client";

interface LandingProps extends React.HTMLAttributes<HTMLElement> {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  centered?: boolean;
}

export default function Landing({
  tag,
  title,
  description,
  className,
  children,
  centered = false,
}: LandingProps) {
  return (
    <section
      className={`pt-32 md:pt-40 pb-16 bg-cream relative overflow-hidden
        ${className ? className : ""}`}
    >
      {/* Decorative elements */}
      <div className="absolute top-32 right-12 w-48 h-48 border border-coral/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className={`max-w-3xl ${centered ? "mx-auto text-center justify-items-center" : ""}`}>
          {tag && (
						<>
							<span className="label-tag">{tag}</span>
							<div className="line-accent animate-line-grow mt-4 mb-6" />
						</>
					)}

          <h1 className="max-w-2xl text-ink dark:text-cream mb-6">
            {title}
          </h1>


          {description && (
						<p className="text-xl text-stone max-w-xl">
							{description}
						</p>
					)}

					{children}
        </div>
      </div>
    </section>
  );
}
