export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6 text-center text-sm text-gray-500">
      <p>© {currentYear} Polialfa Expert Contab. Toate drepturile rezervate.</p>
    </footer>
  );
}