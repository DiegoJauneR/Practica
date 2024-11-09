import "./App.css";
export function App() {
  return (
    <article className="md-twitter">
      <header>
        <img
          src="https://unavatar.io/DiegoJaune"
          alt="El avatar de la página"
        />
        <div>
          <strong>Cualquiera</strong>
          <span>@Cualquiera.com</span>
        </div>
      </header>

      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
}
