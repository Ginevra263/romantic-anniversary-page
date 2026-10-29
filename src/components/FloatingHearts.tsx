import { CuteIcon, type CuteIconName } from "@/components/CuteIcons";

// Fixed positions so the layout doesn't jump between renders
const floaters: { icon: CuteIconName; left: string; size: string; duration: string; delay: string }[] = [
  { icon: "heart", left: "4%", size: "w-6 h-6", duration: "14s", delay: "0s" },
  { icon: "sparkle", left: "14%", size: "w-5 h-5", duration: "18s", delay: "4s" },
  { icon: "heart", left: "26%", size: "w-4 h-4", duration: "12s", delay: "7s" },
  { icon: "twoHearts", left: "38%", size: "w-7 h-7", duration: "20s", delay: "2s" },
  { icon: "heart", left: "52%", size: "w-5 h-5", duration: "16s", delay: "9s" },
  { icon: "flower", left: "64%", size: "w-6 h-6", duration: "19s", delay: "5s" },
  { icon: "heart", left: "76%", size: "w-8 h-8", duration: "15s", delay: "1s" },
  { icon: "sparkle", left: "86%", size: "w-4 h-4", duration: "13s", delay: "8s" },
  { icon: "heart", left: "94%", size: "w-5 h-5", duration: "17s", delay: "3s" },
];

const FloatingHearts = () => (
  <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden motion-reduce:hidden" aria-hidden="true">
    {floaters.map((f, i) => (
      <div
        key={i}
        className="absolute -bottom-10 animate-float-up opacity-0"
        style={{ left: f.left, animationDuration: f.duration, animationDelay: f.delay }}
      >
        <CuteIcon name={f.icon} className={f.size} />
      </div>
    ))}
  </div>
);

export default FloatingHearts;
