import './App.css';
import {
  HashRouter,
  NavLink, 
  Route, 
  Routes,
  useNavigate,
  useParams,
  Outlet,
} from 'react-router-dom';


const Todo = () => {
  let navigate = useNavigate();
  return <> 
  <p>這是 Todo 頁面 </p>
  <button onClick={ ()=>{ 
    navigate('/login')
  }}>回到登入</button>
  </>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Post = () => {
  return <div>
    <h3>POST 頁面</h3>
    <Outlet />
  </div>
}
const PostId = () => {
  let params = useParams();
  return <p>PostId : {params.postId }</p>;
}
function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/Post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="Post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
           {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
