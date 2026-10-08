import { BookingProvider } from "@/components/booking/BookingProvider";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </BookingProvider>
  );
}
