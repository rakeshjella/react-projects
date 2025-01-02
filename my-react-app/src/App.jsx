import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Counter from './components/counter';
// import Conditional from './components/Conditional';
import './App.css'
// import UseActionStateHook from './components/hooks/UseActionStateHook'
// import UseImperativeHandle1 from './components/hooks/UseImperativeHandle1'
// import UseDefferedHook from './components/hooks/UseDefferedHook'
// import UseHook2 from './components/hooks/UseHook2'
// import UseTransitionHook from './components/hooks/UseTransitionHook'
// import UseHook1 from './components/hooks/UseIdHook1'
// import UseLayoutEffectHook3 from './components/hooks/UseLayoutEffectHook3'
// import UseCallbackHook1 from './components/hooks/UseCallbackHook1'
// import UseMemoHook1 from './components/hooks/UseMemoHook1'
// import USeContextExample2 from './components/hooks/UseContextExample2';
// import Ternary from './components/Ternary';
// import RenderList from './components/RenderList';
// import UseStateExample from './components/hooks/UseSateExample';
// import UseRefExample from './components/hooks/UseRefExample';
// import UseEffectExample from './components/hooks/UseEffectExample';
// import CustomUseHook from './components/hooks/CustomUseHook'

// import UseReducerExample1 from './components/hooks/UseReducerExample1'

// Simulate an authentication status
const isAuthenticated = true;

// Protected route component
function PrivateRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}
function Home() {
  return <h2>Home Page</h2>;
}

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Dashboard</h2>      
      <button onClick={() => navigate("/")}>Go Home</button>;

      <nav>
        <Link to="analytics">Analytics</Link> | <Link to="reports">Reports</Link>
      </nav>
      <Outlet /> {/* This is where child routes will be rendered */}
    </div>
  );
}

function Analytics() {
  return <h3>Analytics Page</h3>;
}

function Reports() {
  return <h3>Reports Page</h3>;
}

function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <p>Please log in to access the dashboard.</p>
    </div>
  );
}
function NotFound() {
  return <h3>404 - Page Not Found</h3>;
}

function App() {
  return (
    <>
      <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Home />} />

        {/* Protected  Nested routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Analytics />} /> {/* Default child route */}
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="/login" element={<Login />} />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
      <div className="card">
        {/* <Counter/>
        <h3>conditional example</h3>    
        <Conditional/>
        <h3>Ternary component</h3>
        <Ternary/> 

        <RenderList/>

        <UseStateExample/>
        <UseRefExample/>
        <UseEffectExample/>
        <CustomUseHook/>
        <USeContextExample2/>
        <UseReducerExample1/>
        <UseMemoHook1/>
        <UseCallbackHook1/>
        <UseLayoutEffectHook3/>
        <UseHook1/>
        <UseHook2/>
        <UseTransitionHook/>
        <UseDefferedHook/>
        <UseImperativeHandle1/>
        <UseActionStateHook/>*/}
      </div>
    </>
  )
}

export default App
