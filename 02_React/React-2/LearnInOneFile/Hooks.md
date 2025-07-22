# Leaning Hooks

## useEffect hook

1. what is use of useEffect hook
2. Syntax of useEffect hook
3. useEffect with State
4. useEffect with Peops
5. Inriview Question

```javascript
const UseEffectHook = () => {
  const [count, setCount] = useState(0); // this is state
  const [number, setNumber] = useState(7676); // this is state
  const CountNumber = () => {
    let sum = 0;
    for (let index = 0; index < 100000000; index++) {
      sum = Math.random() * 10000 * index;
    }
    return sum;
  };
  useEffect(() => {
    console.log(CountNumber());
  }, []);

  useEffect(() => {
    // call every time or this is by defualt
  });

  useEffect(() => {
    // this is call only Once
  }, []);

  useEffect(() => {
    // this is call or change based on dependancy or single state
  }, [count]);

  useEffect(() => {
    // this is call or change based on multipal depencency or multipal state
  }, [count, number, add_more_dependancy]);

  useEffect(() => {
    //this is call or change  based on props
  }, [props1, props2, add_more_props]);
};
```
