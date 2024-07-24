import ProfilePreview from "./components/ProfilePreview";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen bg-gray-light max-w-[1440px] w-full mx-auto">
      <Navbar />
      <div className="flex justify-between gap-6 px-6">
        <ProfilePreview />

        {children}


      </div>
    </main>
  );
}