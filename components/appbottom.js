"use client";

export default function AppBottom() {
  return (
    <div className="absolute left-7 right-7 bottom-5 flex items-center justify-between h-20 bg-white/20 backdrop-blur-xl backdrop-saturate-[1.8] rounded-[18px] p-3 text-white">
      <button className="flex flex-col items-center gap-1.5 group">
        <span
          className="w-[60px] h-[60px] rounded-[15px] grid place-items-center
               shadow-[0_5px_14px_rgba(0,0,0,.28)]
               transition-transform duration-200 ease-[cubic-bezier(.32,.72,0,1)]
               group-active:scale-90
               bg-gradient-to-br from-[#6ee787] to-[#30d158]"
        >
          <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="#fff">
            <path d="M7.8 3.2c.7-.5 1.7-.3 2.2.4l1.8 2.6c.4.6.3 1.5-.3 2l-1.2 1c-.2.2-.3.5-.2.8.6 1.5 2.3 3.2 3.9 3.9.3.1.6 0 .8-.2l1-1.2c.5-.6 1.4-.7 2-.3l2.6 1.8c.7.5.9 1.5.4 2.2l-1.3 1.8c-.6.8-1.6 1.2-2.6 1-3-.5-5.8-2-8-4.2-2.2-2.2-3.7-5-4.2-8-.2-1 .2-2 1-2.6Z" />
          </svg>
        </span>
        
      </button>
      <button className="flex flex-col items-center gap-1.5 group">
        <span
          className="w-[60px] h-[60px] rounded-[15px] grid place-items-center
               shadow-[0_5px_14px_rgba(0,0,0,.28)]
               transition-transform duration-200 ease-[cubic-bezier(.32,.72,0,1)]
               group-active:scale-90
               bg-gradient-to-br from-[#64d2ff] to-[#0a84ff]"
        >
          <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5.5" width="18" height="13" rx="3" fill="#fff" />
            <path
              d="M4.4 7.4 12 13l7.6-5.6"
              stroke="#0a84ff"
              strokeWidth="1.9"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <button className="flex flex-col items-center gap-1.5 group">
        <span
          className="w-[60px] h-[60px] rounded-[15px] grid place-items-center
               shadow-[0_5px_14px_rgba(0,0,0,.28)]
               transition-transform duration-200 ease-[cubic-bezier(.32,.72,0,1)]
               group-active:scale-90
               bg-gradient-to-br from-[#5ac8fa] to-[#0a66c2]"
        >
          <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="#fff">
            <rect x="3.5" y="9" width="3.4" height="11.5" rx="0.6" />
            <circle cx="5.2" cy="4.8" r="2.1" />
            <path d="M10.3 9h3.3v1.7h.05c.46-.85 1.6-1.74 3.3-1.74 3.5 0 4.15 2.2 4.15 5.1v6.44h-3.4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.46-2.2 3v5.8h-3.3Z" />
          </svg>
        </span>
      </button>
      <button className="flex flex-col items-center gap-1.5 group">
        <span
          className="w-[60px] h-[60px] rounded-[15px] grid place-items-center
               shadow-[0_5px_14px_rgba(0,0,0,.28)]
               transition-transform duration-200 ease-[cubic-bezier(.32,.72,0,1)]
               group-active:scale-90
               bg-gradient-to-br from-[#ffd60a] to-[#ff9f0a]"
        >
          <svg
            className="w-[34px] h-[34px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v12" />
            <path d="M7 10.5 12 15.5 17 10.5" />
            <path d="M4.5 19.5h15" />
          </svg>
        </span>
      </button>
    </div>
  );
}
