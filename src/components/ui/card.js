export function Card({ children, className }) {
  return <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
}

export function CardHeader({ children, className }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardTitle({ children, className }) {
  return <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>
}

export function CardContent({ children, className }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardFooter({ children, className }) {
  return <div className={`p-6 border-t ${className}`}>{children}</div>
}
