import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player name ="AAA" symbol="X"/>
          </li>
          <li>
            <Player name ="BBB" symbol="O"/>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App;
