export const metadata = {
  title: "Rawat Auto Auctions — India's Largest Vehicle & Equipment Auction",
  description: "Cars, two-wheelers, commercial vehicles & construction heavy machinery auctions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
