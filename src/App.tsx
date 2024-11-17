import './App.css';
import Dashboard from './components/UI/Dashboard';
import Footer from './components/layout/Footer';
import Header from './components/layout/Headre';

function App() {
  return (
    <>
      <div className='mb-4'>
        <Header />
      </div>
      <div className='mb-4'>
        <Dashboard />
      </div>
      <Footer />
    </>
  );
}

export default App;
