export default function ScrollTimeline({ steps }: { steps: { label: string; title: string; text: string }[] }) {
  return <ol>{steps.map((s) => <li key={s.label}>{s.title}</li>)}</ol>;
}
