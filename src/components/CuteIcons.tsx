import { useId, type ReactNode } from "react";

type IconProps = {
  className?: string;
};

// useId() returns ids like ":r1:", which are unsafe inside url(#...)
const useGradientId = () => useId().replace(/:/g, "");

const HEART =
  "M32 55C30 53.6 6 39 6 21.5 6 13.5 12.3 7.5 20 7.5c5 0 9.4 2.7 12 6.8 2.6-4.1 7-6.8 12-6.8 7.7 0 14 6 14 14C58 39 34 53.6 32 55Z";

const INK = "#5b2333";

// Kawaii face: two shiny eyes, blush and a little smile
const Face = ({ x, y, gap = 7, smile = true, ink = INK }: { x: number; y: number; gap?: number; smile?: boolean; ink?: string }) => (
  <g>
    <circle cx={x - gap} cy={y} r={2.4} fill={ink} />
    <circle cx={x + gap} cy={y} r={2.4} fill={ink} />
    <circle cx={x - gap + 0.8} cy={y - 0.8} r={0.8} fill="#fff" />
    <circle cx={x + gap + 0.8} cy={y - 0.8} r={0.8} fill="#fff" />
    <ellipse cx={x - gap - 3.5} cy={y + 5} rx={3.4} ry={2} fill="#ff6f9f" opacity={0.5} />
    <ellipse cx={x + gap + 3.5} cy={y + 5} rx={3.4} ry={2} fill="#ff6f9f" opacity={0.5} />
    {smile && (
      <path
        d={`M${x - 3} ${y + 4} Q${x} ${y + 7.5} ${x + 3} ${y + 4}`}
        stroke={ink}
        strokeWidth={1.8}
        fill="none"
        strokeLinecap="round"
      />
    )}
  </g>
);

const Svg = ({ className, children }: IconProps & { children: ReactNode }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

export const HeartIcon = ({ className, face = false }: IconProps & { face?: boolean }) => {
  const id = useGradientId();
  return (
    <Svg className={className}>
      <defs>
        <linearGradient id={`${id}h`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffa3c8" />
          <stop offset="1" stopColor="#ff4f8b" />
        </linearGradient>
      </defs>
      <path d={HEART} fill={`url(#${id}h)`} />
      <ellipse cx="18" cy="17" rx="5.5" ry="3.2" transform="rotate(-35 18 17)" fill="#fff" opacity="0.65" />
      {face && <Face x={32} y={27} gap={7} />}
    </Svg>
  );
};

export const TwoHeartsIcon = ({ className }: IconProps) => {
  const id = useGradientId();
  return (
    <Svg className={className}>
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffa3c8" />
          <stop offset="1" stopColor="#ff4f8b" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dcc3ff" />
          <stop offset="1" stopColor="#a77bff" />
        </linearGradient>
      </defs>
      <path d={HEART} transform="translate(28 4) scale(0.55)" fill={`url(#${id}b)`} />
      <path d={HEART} transform="translate(2 20) scale(0.72)" fill={`url(#${id}a)`} />
      <ellipse cx="17" cy="33" rx="3.6" ry="2.2" transform="rotate(-35 17 33)" fill="#fff" opacity="0.65" />
      <ellipse cx="41" cy="14" rx="2.6" ry="1.6" transform="rotate(-35 41 14)" fill="#fff" opacity="0.65" />
    </Svg>
  );
};

export const SparkleIcon = ({ className }: IconProps) => {
  const id = useGradientId();
  const star = "M32 4C34 22 42 30 60 32 42 34 34 42 32 60 30 42 22 34 4 32 22 30 30 22 32 4Z";
  return (
    <Svg className={className}>
      <defs>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1a8" />
          <stop offset="1" stopColor="#ffb347" />
        </linearGradient>
      </defs>
      <path d={star} transform="translate(2 8) scale(0.8)" fill={`url(#${id}s)`} />
      <path d={star} transform="translate(42 0) scale(0.32)" fill="#ffa3c8" />
      <path d={star} transform="translate(46 44) scale(0.22)" fill="#c9a7ff" />
    </Svg>
  );
};

export const StarIcon = ({ className }: IconProps) => {
  const id = useGradientId();
  return (
    <Svg className={className}>
      <defs>
        <linearGradient id={`${id}t`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff1a8" />
          <stop offset="1" stopColor="#ffc24d" />
        </linearGradient>
      </defs>
      <path
        d="M32 8 39 24.3 56.7 26 43.4 37.7 47.3 55 32 46 16.7 55 20.6 37.7 7.3 26 25 24.3Z"
        fill={`url(#${id}t)`}
        stroke="#ffb84d"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <Face x={32} y={32} gap={5.5} />
    </Svg>
  );
};

export const RainbowIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <g fill="none" strokeLinecap="round" strokeWidth="6">
      <path d="M8 46A24 24 0 0 1 56 46" stroke="#ff8fb8" />
      <path d="M14 46A18 18 0 0 1 50 46" stroke="#ffd36e" />
      <path d="M20 46A12 12 0 0 1 44 46" stroke="#8fd3ff" />
    </g>
    {[10, 54].map((cx) => (
      <g key={cx} fill="#fff" stroke="#f6c9d9" strokeWidth="1.5">
        <circle cx={cx - 5} cy={49} r={5} />
        <circle cx={cx + 5} cy={49} r={5} />
        <circle cx={cx} cy={45} r={6} />
      </g>
    ))}
  </Svg>
);

export const SmileIcon = ({ className }: IconProps) => {
  const id = useGradientId();
  return (
    <Svg className={className}>
      <defs>
        <radialGradient id={`${id}m`} cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#fff3b8" />
          <stop offset="1" stopColor="#ffc94d" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="33" r="24" fill={`url(#${id}m)`} />
      <Face x={32} y={31} gap={8} />
      <path d={HEART} transform="translate(44 2) scale(0.28)" fill="#ff6f9f" />
    </Svg>
  );
};

export const SunIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <g stroke="#ffc24d" strokeWidth="4" strokeLinecap="round">
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={32 + Math.cos(a) * 21}
            y1={32 + Math.sin(a) * 21}
            x2={32 + Math.cos(a) * 28}
            y2={32 + Math.sin(a) * 28}
          />
        );
      })}
    </g>
    <circle cx="32" cy="32" r="16" fill="#ffd96b" />
    <Face x={32} y={30} gap={6} />
  </Svg>
);

export const FlowerIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    {Array.from({ length: 5 }, (_, i) => {
      const a = ((-90 + i * 72) * Math.PI) / 180;
      return <circle key={i} cx={32 + Math.cos(a) * 14} cy={32 + Math.sin(a) * 14} r={11} fill="#ffb3cf" />;
    })}
    <circle cx="32" cy="32" r="9.5" fill="#ffd96b" />
    <circle cx="28.5" cy="31" r="1.6" fill={INK} />
    <circle cx="35.5" cy="31" r="1.6" fill={INK} />
    <path d="M30 34.5Q32 36.5 34 34.5" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </Svg>
);

export const CameraIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="18" y="11" width="16" height="10" rx="4" fill="#ff9ec4" />
    <rect x="7" y="17" width="50" height="38" rx="11" fill="#ffc8dc" />
    <circle cx="32" cy="36" r="12" fill="#fff" stroke="#ff6f9f" strokeWidth="3" />
    <circle cx="32" cy="36" r="5.5" fill="#7a4b5c" />
    <circle cx="34" cy="34" r="1.8" fill="#fff" />
    <circle cx="48" cy="25" r="3" fill="#fff" />
    <path d={HEART} transform="translate(10 22) scale(0.16)" fill="#ff4f8b" />
  </Svg>
);

export const PenguinIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <ellipse cx="14" cy="38" rx="5" ry="11" transform="rotate(20 14 38)" fill="#3a3d56" />
    <ellipse cx="50" cy="38" rx="5" ry="11" transform="rotate(-20 50 38)" fill="#3a3d56" />
    <ellipse cx="32" cy="34" rx="19" ry="23" fill="#4a4e69" />
    <ellipse cx="32" cy="38" rx="13.5" ry="17" fill="#fff" />
    <Face x={32} y={30} gap={5.5} smile={false} ink="#2b2d42" />
    <path d="M29 34.5H35L32 38.5Z" fill="#ffb347" strokeLinejoin="round" />
    <ellipse cx="25" cy="58" rx="5.5" ry="2.6" fill="#ffb347" />
    <ellipse cx="39" cy="58" rx="5.5" ry="2.6" fill="#ffb347" />
    <path d={HEART} transform="translate(44 4) scale(0.24)" fill="#ff6f9f" />
  </Svg>
);

export const PartyIcon = ({ className }: IconProps) => {
  const id = useGradientId();
  return (
    <Svg className={className}>
      <defs>
        <linearGradient id={`${id}p`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ff8fb8" />
          <stop offset="1" stopColor="#ffd36e" />
        </linearGradient>
      </defs>
      <path d="M8 57 21 21 43 43Z" fill={`url(#${id}p)`} strokeLinejoin="round" />
      <path d="M14 40 27 32M11 49 33 37" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <circle cx="44" cy="12" r="3" fill="#8fd3ff" />
      <circle cx="54" cy="26" r="2.5" fill="#c9a7ff" />
      <rect x="30" y="8" width="5" height="5" rx="1" transform="rotate(20 32 10)" fill="#ffd36e" />
      <rect x="50" y="38" width="5" height="5" rx="1" transform="rotate(-25 52 40)" fill="#ff8fb8" />
      <path d="M36 22Q40 16 44 20T52 18" stroke="#ff6f9f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d={HEART} transform="translate(52 4) scale(0.18)" fill="#ff4f8b" />
    </Svg>
  );
};

export const PlaneIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M4 50Q14 44 20 46" stroke="#ffb3cf" strokeWidth="2.5" strokeDasharray="1 5" strokeLinecap="round" fill="none" />
    <path d="M14 27 9 14H18L26 27Z" fill="#ff9ec4" />
    <rect x="9" y="25" width="47" height="15" rx="7.5" fill="#fff" stroke="#ff9ec4" strokeWidth="2.5" />
    <path d="M27 34H41L31 51H23Z" fill="#ff7aa2" />
    {[30, 37, 44].map((cx) => (
      <circle key={cx} cx={cx} cy={31.5} r={2.2} fill="#8fd3ff" />
    ))}
    <path d={HEART} transform="translate(2 54) scale(0.14)" fill="#ff4f8b" />
  </Svg>
);

export const BeachIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <ellipse cx="32" cy="56" rx="26" ry="5" fill="#ffe2a8" />
    <line x1="32" y1="28" x2="32" y2="55" stroke="#c98b6b" strokeWidth="3" strokeLinecap="round" />
    <path d="M8 30A24 21 0 0 1 56 30Q50 26 44 30 38 26 32 30 26 26 20 30 14 26 8 30Z" fill="#ff8fb8" />
    <path d="M32 9Q24 18 20 30 26 26 32 30Z" fill="#fff" opacity="0.85" />
    <path d="M32 9Q40 18 44 30 38 26 32 30Z" fill="#ffd36e" />
    <circle cx="52" cy="10" r="5" fill="#ffd96b" />
  </Svg>
);

export const CloudIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <g fill="#e3ebf8">
      <circle cx="22" cy="32" r="12" />
      <circle cx="36" cy="26" r="15" />
      <circle cx="47" cy="34" r="10" />
      <rect x="12" y="32" width="44" height="12" rx="6" />
    </g>
    <Face x={33} y={32} gap={6} smile={false} ink="#5a6b8c" />
    <path d="M30 39.5Q33 37.5 36 39.5" stroke="#5a6b8c" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    {[20, 32, 44].map((x, i) => (
      <path key={x} d={`M${x} ${50 + i % 2 * 3}q-2 4 0 5.5q2-1.5 0-5.5Z`} fill="#8fd3ff" />
    ))}
  </Svg>
);

export const EnvelopeIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="7" y="15" width="50" height="36" rx="7" fill="#fff" stroke="#ff9ec4" strokeWidth="2.5" />
    <path d="M9 19 32 36 55 19" stroke="#ff9ec4" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <path d={HEART} transform="translate(23 27.5) scale(0.28)" fill="#ff4f8b" />
  </Svg>
);

export const CupIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d={HEART} transform="translate(25 0) scale(0.24)" fill="#ff8fb8" />
    <path d="M44 30Q54 30 53 38 52 45 43 44" stroke="#e8b48f" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M14 22H48L44 52Q43 57 38 57H24Q19 57 18 52Z" fill="#fff" stroke="#e8b48f" strokeWidth="2.5" strokeLinejoin="round" />
    <ellipse cx="31" cy="23" rx="16" ry="3" fill="#b07a55" />
    <Face x={31} y={38} gap={6} />
  </Svg>
);

export const MusicIcon = ({ className }: IconProps) => {
  const id = useGradientId();
  return (
    <Svg className={className}>
      <defs>
        <linearGradient id={`${id}n`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffa3c8" />
          <stop offset="1" stopColor="#a77bff" />
        </linearGradient>
      </defs>
      <path d="M24 16 48 9V40M24 16V46" stroke="#7a4b8c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M24 16 48 9V16L24 23Z" fill="#7a4b8c" />
      <ellipse cx="18" cy="47" rx="7.5" ry="6" transform="rotate(-20 18 47)" fill={`url(#${id}n)`} />
      <ellipse cx="42" cy="41" rx="7.5" ry="6" transform="rotate(-20 42 41)" fill={`url(#${id}n)`} />
      <path d={HEART} transform="translate(50 46) scale(0.2)" fill="#ff4f8b" />
    </Svg>
  );
};

export const GiftIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="10" y="28" width="44" height="28" rx="6" fill="#ffb3cf" />
    <rect x="7" y="20" width="50" height="11" rx="4.5" fill="#ff8fb8" />
    <rect x="28" y="20" width="8" height="36" fill="#fff3a8" />
    <g fill="none" stroke="#ffd36e" strokeWidth="4">
      <ellipse cx="24" cy="14" rx="8" ry="5.5" transform="rotate(25 24 14)" />
      <ellipse cx="40" cy="14" rx="8" ry="5.5" transform="rotate(-25 40 14)" />
    </g>
    <circle cx="32" cy="18" r="3.5" fill="#ffc24d" />
    <Face x={32} y={41} gap={9} />
  </Svg>
);

export const cuteIcons = {
  heart: HeartIcon,
  heartFace: (props: IconProps) => <HeartIcon {...props} face />,
  twoHearts: TwoHeartsIcon,
  sparkle: SparkleIcon,
  star: StarIcon,
  rainbow: RainbowIcon,
  smile: SmileIcon,
  sun: SunIcon,
  flower: FlowerIcon,
  camera: CameraIcon,
  penguin: PenguinIcon,
  party: PartyIcon,
  plane: PlaneIcon,
  beach: BeachIcon,
  cloud: CloudIcon,
  envelope: EnvelopeIcon,
  cup: CupIcon,
  music: MusicIcon,
  gift: GiftIcon,
};

export type CuteIconName = keyof typeof cuteIcons;

export const CuteIcon = ({ name, className }: IconProps & { name: CuteIconName }) => {
  const Icon = cuteIcons[name];
  return <Icon className={className} />;
};
