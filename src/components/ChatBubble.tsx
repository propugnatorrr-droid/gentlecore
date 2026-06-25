export default function ChatBubble() {
  return (
    <button
      aria-label="Customer service"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#C8102E] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform"
      style={{ borderRadius: "9999px" }}
    >
      <span className="font-serif italic text-[26px] leading-none -mt-0.5">C</span>
    </button>
  );
}
