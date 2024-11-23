function Tabs({ children }) {
  return <div>{children}</div>;
}

function TabsList({ children }) {
  return <div className="flex gap-2 mb-4">{children}</div>;
}

function TabsTrigger({ children, value, onClick }) {
  return (
    <button
      className="px-4 py-2 rounded-lg hover:bg-gray-100"
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}

function TabsContent({ children }) {
  return <div>{children}</div>;
}
