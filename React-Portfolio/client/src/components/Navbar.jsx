export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/70 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Abhishek Deshpande</h1>
        <ul className="flex gap-6 font-medium">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
