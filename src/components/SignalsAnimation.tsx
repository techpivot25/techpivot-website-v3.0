const SignalsAnimation = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0E121B] via-[#211736] to-[#401C34] flex items-center justify-center">
      <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-[10px] font-semibold tracking-[0.2em] uppercase">
        <span className="text-white/70">Signals in</span>
        <span className="text-primary">Action out</span>
      </div>
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
        <defs>
          <path id="sa-path-in-1" d="M 140 150 Q 280 150 400 300" />
          <path id="sa-path-in-2" d="M 140 300 L 400 300" />
          <path id="sa-path-in-3" d="M 140 450 Q 280 450 400 300" />
          <path id="sa-path-out-1" d="M 400 300 Q 520 150 660 150" />
          <path id="sa-path-out-2" d="M 400 300 L 660 300" />
          <path id="sa-path-out-3" d="M 400 300 Q 520 450 660 450" />
        </defs>

        <use href="#sa-path-in-1" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <use href="#sa-path-in-2" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <use href="#sa-path-in-3" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <use href="#sa-path-out-1" stroke="hsl(var(--primary) / 0.35)" strokeWidth="1" fill="none" />
        <use href="#sa-path-out-2" stroke="hsl(var(--primary) / 0.35)" strokeWidth="1" fill="none" />
        <use href="#sa-path-out-3" stroke="hsl(var(--primary) / 0.35)" strokeWidth="1" fill="none" />

        {/* Source nodes */}
        <g>
          <rect x="40" y="125" width="160" height="50" rx="8" fill="#2E1A46" stroke="rgba(255,255,255,0.3)" />
          <text x="58" y="148" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="Inter,sans-serif">Data Sources</text>
          <text x="58" y="164" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter,sans-serif">Structured + unstructured</text>
        </g>
        <g>
          <rect x="40" y="275" width="160" height="50" rx="8" fill="#2E1A46" stroke="rgba(255,255,255,0.3)" />
          <text x="58" y="298" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="Inter,sans-serif">Systems</text>
          <text x="58" y="314" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter,sans-serif">Cloud + on-premise</text>
        </g>
        <g>
          <rect x="40" y="425" width="160" height="50" rx="8" fill="#2E1A46" stroke="rgba(255,255,255,0.3)" />
          <text x="58" y="448" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="Inter,sans-serif">Signals</text>
          <text x="58" y="464" fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter,sans-serif">Events + telemetry</text>
        </g>

        {/* AI Layer */}
        <circle cx="400" cy="300" r="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="r" values="80;92;80" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="300" r="68" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="r" values="68;78;68" dur="3s" repeatCount="indefinite" begin="0.3s" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle cx="400" cy="300" r="56" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.8">
          <animate attributeName="r" values="56;64;56" dur="3s" repeatCount="indefinite" begin="0.6s" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" begin="0.6s" />
        </circle>
        <circle cx="400" cy="300" r="44" fill="#2E1A46" stroke="hsl(var(--primary))" strokeWidth="2" />
        <text x="400" y="298" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif" letterSpacing="1.5" textAnchor="middle">AI LAYER</text>
        <text x="400" y="314" fill="hsl(var(--primary))" fontSize="9" fontWeight="600" fontFamily="Inter,sans-serif" letterSpacing="1" textAnchor="middle">TECHPIVOT</text>

        {/* Output nodes */}
        <g>
          <rect x="600" y="125" width="160" height="50" rx="8" fill="#211531" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <text x="618" y="146" fill="hsl(var(--primary))" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif" letterSpacing="0.3">01 · DISCOVER</text>
          <text x="618" y="164" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="Inter,sans-serif">Continuous insight</text>
        </g>
        <g>
          <rect x="600" y="275" width="160" height="50" rx="8" fill="#211531" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <text x="618" y="296" fill="hsl(var(--primary))" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif" letterSpacing="0.3">02 · PRIORITISE</text>
          <text x="618" y="314" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="Inter,sans-serif">Ranked actions</text>
        </g>
        <g>
          <rect x="600" y="425" width="160" height="50" rx="8" fill="#211531" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <text x="618" y="446" fill="hsl(var(--primary))" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif" letterSpacing="0.3">03 · AUTOMATE</text>
          <text x="618" y="464" fill="#FFFFFF" fontSize="12" fontWeight="600" fontFamily="Inter,sans-serif">Routed outcomes</text>
        </g>

        {/* Input particles */}
        {[
          { path: "sa-path-in-1", begin: "0s" },
          { path: "sa-path-in-2", begin: "0.8s" },
          { path: "sa-path-in-3", begin: "1.6s" },
          { path: "sa-path-in-1", begin: "0.4s" },
          { path: "sa-path-in-2", begin: "1.2s" },
          { path: "sa-path-in-3", begin: "2s" },
        ].map((p, i) => (
          <circle key={`in-${i}`} r="3" fill="#FFFFFF" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.9))" }}>
            <animateMotion dur="2.4s" repeatCount="indefinite" begin={p.begin}>
              <mpath href={`#${p.path}`} />
            </animateMotion>
          </circle>
        ))}

        {/* Output particles */}
        {[
          { path: "sa-path-out-1", begin: "0s" },
          { path: "sa-path-out-2", begin: "2s" },
          { path: "sa-path-out-3", begin: "4s" },
        ].map((p, i) => (
          <circle key={`out-${i}`} r="3.5" fill="hsl(var(--primary))" style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.9))" }}>
            <animateMotion dur="6s" repeatCount="indefinite" begin={p.begin}>
              <mpath href={`#${p.path}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default SignalsAnimation;
