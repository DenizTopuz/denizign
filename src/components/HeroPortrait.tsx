export function HeroPortrait() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/deniz-topuz.jpg"
      alt="Deniz Topuz"
      style={{
        height: "100%",
        width: "auto",
        maxWidth: "none",
        objectFit: "cover",
        objectPosition: "top center",
        display: "block",
        // B&W conversion
        filter: "grayscale(1) contrast(1.08) brightness(1.05)",
        // Smooth radial fade: fully visible center (face), fades at all edges
        // Face is upper-center of photo: center at ~50% x, ~28% y
        maskImage:
          "radial-gradient(ellipse 78% 75% at 50% 28%, black 0%, black 32%, rgba(0,0,0,0.55) 52%, transparent 72%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 78% 75% at 50% 28%, black 0%, black 32%, rgba(0,0,0,0.55) 52%, transparent 72%)",
      }}
    />
  );
}
