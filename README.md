## Animations(framer-motion)

---

[framer-motion Docs](https://www.framer.com/docs/)

framer-motion 사용시 motion.tagName으로 사용하며  
styled-components와 사용시 styled(motion.tagName)으로 사용할것.

---

### 1. Variants

    animation 설정을 javascript Object로 옮긴 뒤
    animation을 사용할 tag에 props형태로 사용한다.

```javascript
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: 'spring', delay: 0.5 } },
};

...

<Box variants={myVars} initial="start" animate="end" />
```

### 2. Motion Value

    animation의 수치를 트래킹 할 수 있다.

```javascript
const x = useMotionValue(0);
  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);

  ...

<Box style={{ x }} drag="x" dragSnapToOrigin></Box>

```

#### 2-1. useTransForm()

    x의 값과 제한값(ex: x의 좌표값(?) 등)을 useTransform에서 받고
    출력값을 받는다.

```javascript
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);

  ...


      <Box style={{ x, scale }} drag="x" dragSnapToOrigin></Box>

-------------------

  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);

  ...

      <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin></Box>


```
