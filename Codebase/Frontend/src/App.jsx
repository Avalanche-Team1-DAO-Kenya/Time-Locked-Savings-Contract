import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}