import './App.css';
import { NotificationsComp } from './components/NotificationsComp/NotificationsComp';
import { VendingMachineLayoutComp } from './components/VendingMachineLayoutComp/VendingMachineLayoutComp';
function App() {
  return (
    <div className="App">
      < VendingMachineLayoutComp className="Offered-beverages"/>
      < NotificationsComp />
    </div>
  );
}

export default App;
