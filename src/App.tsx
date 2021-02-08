import './App.css';
import Navigation from './component/Navigation'
import Main from './component/Main'
import { motion } from 'framer-motion';

export type Movie = {
  id: number,
  original_title: string,
  poster_path: string,
  vote_average: number
}

function App() {

  return (
    <>
      <motion.nav
      animate={{opacity:1}}
      initial={{opacity:0}}
      transition={{duration:1.5, type: 'tween', ease:'easeIn'}}
      className="nav"
      >
        <Navigation/>
      </motion.nav>
      <motion.main
      animate={{opacity:1, y:0}}
      initial={{opacity:0, y:0}}
      transition={{duration:1, type: 'tween'}}
      className="main"
      >
        <Main/>
      </motion.main>
    </>
  );
}

export default App;
