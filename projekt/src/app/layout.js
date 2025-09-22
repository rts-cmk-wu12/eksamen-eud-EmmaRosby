import "./globals.scss";

export const metadata = {
  title: {
    template: "%s | SwapHub",
    default: "SwapHub",
  },
  description: "En side hvor du kan bytte dig til nye ting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
