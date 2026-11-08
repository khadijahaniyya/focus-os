import "./globals.css";
import { StudyProvider } from "../context/StudyContext";

export const metadata = {
  title: "Focus OS",
  description: "A focused study workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StudyProvider>
          {children}
        </StudyProvider>
      </body>
    </html>
  );
}