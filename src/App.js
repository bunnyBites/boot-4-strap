import TableComponent from './shared/components/table-component/table-component';
import './App.css';

function App() {
  return (
    <section>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand text-white h-1">Code Write</div>
        </div>
      </nav>
      <TableComponent />
    </section>
  );
}

export default App;
