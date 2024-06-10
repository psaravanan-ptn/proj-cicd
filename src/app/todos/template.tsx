export default function Template({ children }: { children: React.ReactNode }) {
    return <div>
        <div>Todo Template for example START</div>
        <div>{children}</div>
        <div>Todo Template for example END</div>
    </div>
  }
  