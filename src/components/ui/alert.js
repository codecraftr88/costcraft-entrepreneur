export function Alert({ children, className }) {
  return <div className={`bg-yellow-50 p-4 rounded-lg ${className}`}>{children}</div>
}

export function AlertTitle({ children }) {
  return <h4 className="font-semibold mb-2">{children}</h4>
}

export function AlertDescription({ children }) {
  return <div className="text-sm">{children}</div>
}
