type MarqueeProps = {
  items: readonly string[]
}

export function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <div className="marquee-item" key={`${item}-${index}`}>
            {item}
            <span>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
