import { Container } from './components/layout';
import { Game } from './features/game';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="py-12">
          <Game />
        </div>
      </Container>
    </div>
  );
}

export default App
