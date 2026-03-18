export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">
        {title}
      </h1>

      <p className="text-gray-400 max-w-xl">
        This section is currently under development.
        I'm building something powerful here 🚀
      </p>

      <p className="mt-4 text-sm text-gray-500">
        Stay tuned. More content coming soon.
      </p>
    </div>
  );
}