import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import AnimatedCursor from 'react-animated-cursor';


function App() {


  return (
    <div>
      <AnimatedCursor 
     innerSize={5}
     outerSize={35}
     innerScale={1}
     outerScale={1.7}
     trailingSpeed={5}
     clickables={[
      'li', 'a', '.click', 'button', 'img'
     ]}
     outerStyle={{
      backgroundColor: 'var(--cursor-bg-color)'
    }}
    innerStyle={{
      backgroundColor: 'var(--cursor-color)'
    }}
  
      />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
