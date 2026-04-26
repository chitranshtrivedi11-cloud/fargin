export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Nav */}
      <header className="relative z-10">
        <nav className="flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <span
            className="text-3xl tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Velorah<sup className="text-xs">®</sup>
          </span>

          <ul className="hidden md:flex items-center gap-8">
            {[
              { label: 'Home', active: true },
              { label: 'Studio' },
              { label: 'About' },
              { label: 'Journal' },
              { label: 'Reach Us' },
            ].map(({ label, active }) => (
              <li key={label}>
                <a
                  href="#"
                  className={`text-sm transition-colors ${
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer">
            Begin Journey
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40 py-[90px]">
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-7xl font-normal text-foreground"
          style={{
            fontFamily: "'Instrument Serif', serif",
            letterSpacing: '-2.46px',
          }}
        >
          Where{' '}
          <em className="not-italic text-muted-foreground">dreams</em> rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          We're designing tools for deep thinkers, bold creators, and quiet
          rebels. Amid the chaos, we build digital spaces for sharp focus and
          inspired work.
        </p>

        <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] transition-transform cursor-pointer">
          Begin Journey
        </button>
      </section>
    </div>
  )
}
