
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
// import Signup from '../components/Signup'
// // import SignUp from '@/pages/SignUp'
// import Login from '../components/Login'
import AuthForm from '../pages/AuthForm'
import StudentDashboard from '../pages/StudentDashboard'
import TeacherDashboard from '../pages/TeacherDashboard'
// import About from '@/pages/About'
// import Contact from '@/pages/Contact'
const router = createBrowserRouter([
    {
        path: "/",
        element :<App/>,
        children :[
            {
              path:"/",
              element: <Home/>  
         },
    //      {
    //         path:"/about",
    //         element: <About/>  
    //    },
    //    {
    //      path:"/contact",
    //      element: <Contact/>  
    // },
        //  {
        //     path:"/signup",
        //     element:<Signup/>  
        //  },
        //  {
        //     path:"/login",
        //     element:<Login/>  
        //  },
         {
            path:"/student-dashboard",
            element:<StudentDashboard/>
         },
         {
            path:"/teacher-dashboard",
            element:<TeacherDashboard/>
         },
         {
            path:"/authform",
            element:<AuthForm/>
         }
        ]
    }
])

export default router