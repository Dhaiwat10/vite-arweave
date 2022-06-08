import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <ConnectButton />
      </div>

      <h1 style={{ textAlign: 'center' }}>Woot woot</h1>
    </div>
  );
}

export default App;
