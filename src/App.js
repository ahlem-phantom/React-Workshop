import './App.css';

function App() {
  const menu = (<div>
    <ul id="nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
    </div>
     );
    
  return (
  <div>
     {menu}
     <div>
     [Page content here]
     </div>
</div>

  );
}

export default App;
