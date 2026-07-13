export default function Header({ menuOpen, onMenuToggle }) {
  const links = [["About", "#about"], ["Work", "#work"], ["Skills", "#skills"], ["Contact", "#contact"]];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Seksan Chaina home">SC<span>.</span></a>
      <nav id="primary-navigation" className={menuOpen ? "open" : ""} aria-label="Primary navigation">
        {links.map(([label, href]) => <a href={href} key={label} onClick={() => menuOpen && onMenuToggle()}>{label}</a>)}
      </nav>
      <button
        className="menu-button"
        type="button"
        onClick={onMenuToggle}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
    </header>
  );
}
