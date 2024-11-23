function Card({ children, className = '' }) {
  return <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>{children}</div>;
}

function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

function CardTitle({ children }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

function CardFooter({ children }) {
  return <div className="border-t mt-6 pt-6">{children}</div>;
}
