import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Admin';

const App = () => {
  // 直接设置为已登录状态，跳过登录页面
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // 登录状态变化时同步到 localStorage
    if (isLogin) {
      localStorage.setItem('isLogin', 'true');
    } else {
      localStorage.removeItem('isLogin');
    }
  }, [isLogin]);

  return (
    <Router>
      <Routes>
        {/* 注释掉登录路由，因为不需要登录页面 */}
        {/* <Route
          path="/login"
          element={<Login onLogin={() => setIsLogin(true)} />}
        /> */}
        <Route
          path="/"
          element={<Admin />}
        />
      </Routes>
    </Router>
  );
};
export default App;
