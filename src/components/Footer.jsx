import { Coffee } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-amber-100 flex justify-between p-10 mt-4">
      <div>
        <Coffee size={50} />
        <span className="text-amber-700 font-bold text-3xl">Raksha Cafe</span>

        <p>&copy; All rights reserved</p>
      </div>
      <h2>hi</h2>
    </footer>
  );
}

export default Footer;
