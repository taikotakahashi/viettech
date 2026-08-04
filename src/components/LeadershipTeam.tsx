import { useState } from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa6'
import { team } from '../data/siteData'
import { SectionLabel, Container } from './ui/Shared'
import { FadeIn } from './ui/Animate'

type TeamMember = (typeof team)[number]

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article className="team-card hover-lift rounded-xl p-1">
      <div className={`team-card__photo relative${hovered ? ' is-hovered' : ''}`}>
        <div className="team-card__photo-inner">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            draggable={false}
          />
        </div>
        <span
          className="team-card__hover-zone"
          aria-hidden="true"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>
      <h3 className="mt-2.5 text-[13px] font-bold text-heading min-[375px]:mt-3 min-[375px]:text-sm sm:mt-4 sm:text-base lg:text-lg">
        {member.name}
      </h3>
      <p className="mt-0.5 text-[11px] text-body min-[375px]:text-xs sm:text-sm">
        {member.title}
      </p>
      <p className="mt-2 hidden text-xs leading-relaxed text-body lg:block">
        {member.bio}
      </p>
      <div className="mt-2 hidden items-center gap-2 lg:mt-3 lg:flex">
        {[FaLinkedin, FaTwitter, FaGithub].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-muted transition-colors hover:bg-accent hover:text-heading"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </article>
  )
}

export function LeadershipTeam() {
  return (
    <section id="team" className="section-pad bg-page">
      <Container>
        <FadeIn>
          <SectionLabel>Meet Our Leadership Team</SectionLabel>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 min-[375px]:gap-5 min-[425px]:gap-6 lg:grid-cols-4 lg:gap-8">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 100}>
              <TeamMemberCard member={member} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
