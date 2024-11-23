export function Tabs({ value, onValueChange, children, className }) {
  return <div className={className}>{children}</div>
}

export function TabsList({ children, className }) {
  return <div className={`flex space-x-2 ${className}`}>{children}</div>
}

export function TabsTrigger({ value, children, className }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg hover:bg-gray-100 ${className}`}
      onClick={() => onValueChange(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children, className }) {
  return <div className={className}>{children}</div>
}
