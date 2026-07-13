export default function Header({ menuOpen, onMenuToggle }) {
  const links = [["About", "#about"], ["Work", "#work"], ["Skills", "#skills"], ["Contact", "#contact"]];
  return <header className="site-header"><a className="brand" href="#home">SC<span>.</span></a><nav className={menuOpen ? "open" : ""}>{links.map(([label, href]) => <a href={href} key={label} onClick={() => menuOpen && onMenuToggle()}>{label}</a>)}</nav><button className="menu-button" onClick={onMenuToggle} aria-expanded={menuOpen}>{menuOpen ? "Close" : "Menu"}</button></header>;
}
