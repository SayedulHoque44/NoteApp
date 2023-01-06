import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/Signup";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import PrivateRoute from "./PrivateRoute";

function App01() {
  const login = false;
  return (
    <Router>
      <Layout>
        {/*Layout er bitore je Component call hbe seta props e children nam e jabe */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/*" element={<PrivateRoute loginCheaker={login} />}>
            <Route path="Quiz/:id" element={<Quiz />} />
            <Route path="Result" element={<Result />} />
          </Route>

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App01;
