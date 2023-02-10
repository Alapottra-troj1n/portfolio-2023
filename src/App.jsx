import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'
import AnimatedCursor from 'react-animated-cursor'


function App() {


  return (
    <div>
      <AnimatedCursor 
      color='40, 41, 31'
     innerSize={5}
     outerSize={35}
     innerScale={1}
     outerScale={1.7}
     trailingSpeed={5}
     clickables={[
      'li', 'a', '.click'
     ]}
  
      />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
