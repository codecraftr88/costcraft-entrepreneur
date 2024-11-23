function Alert({ children }) {
  return <div className="bg-yellow-50 p-4 rounded-lg">{children}</div>;
}

function AlertTitle({ children }) {
  return <h4 className="font-bold mb-2">{children}</h4>;
}

function AlertDescription({ children }) {
  return <p>{children}</p>;
}

