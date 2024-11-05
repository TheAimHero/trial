export default function Home() {
  return (
    <div className="flex justify-center">
      <pre className="text-xl">{JSON.stringify(process.env, null, 2)}</pre>
    </div>
  );
}
