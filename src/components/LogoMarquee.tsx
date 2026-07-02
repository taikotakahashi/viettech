interface LogoMarqueeProps {
  logos: { name: string; image: string }[]
}

function LogoItem({ name, image }: { name: string; image: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center px-8 sm:px-10"
      title={name}
    >
      <div className="partner-logo-shell flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="h-6 w-auto max-w-[90px] object-contain sm:h-7 sm:max-w-[110px]"
          draggable={false}
        />
      </div>
    </div>
  )
}

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const loop = [...logos, ...logos]

  return (
    <div className="logo-marquee relative overflow-hidden py-1">
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-10 bg-gradient-to-r from-page to-transparent sm:w-14" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-10 bg-gradient-to-l from-page to-transparent sm:w-14" />
      <div className="logo-marquee-track flex w-max items-center">
        {loop.map((partner, i) => (
          <LogoItem key={`${partner.name}-${i}`} name={partner.name} image={partner.image} />
        ))}
      </div>
    </div>
  )
}
