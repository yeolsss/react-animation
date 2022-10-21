import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 200px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: rgba(49, 178, 238, 0.664);
`;

function App() {
  const [clicked, setClicked] = useState(true);
  const onClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={onClicked}>
      <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
      <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
    </Wrapper>
  );
}

export default App;
