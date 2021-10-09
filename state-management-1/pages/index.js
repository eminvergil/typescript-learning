import { proxy, useSnapshot } from "valtio";
import { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <Times />
      <Home2 />
    </div>
  );
}

const state = proxy({
  count: 0,
  times: 0,
});

function Times() {
  const snap = useSnapshot(state);

  useEffect(() => {
    const interval = setInterval(() => {
      state.times++;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>This is snap : {snap.times}</h2>
    </div>
  );
}

function Home2() {
  const snap = useSnapshot(state);

  return (
    <div>
      <h2>This is home : {snap.count}</h2>
      <button
        onClick={() => {
          state.count += 10;
        }}
      >
        increase count
      </button>
    </div>
  );
}
