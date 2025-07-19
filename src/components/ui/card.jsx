export const Card = ({ children }) => (
  <div className="rounded-xl bg-black/40 p-4 shadow-lg border border-cyan-500">
    {children}
  </div>
)

export const CardContent = ({ children }) => (
  <div className="text-base text-white">{children}</div>
)
