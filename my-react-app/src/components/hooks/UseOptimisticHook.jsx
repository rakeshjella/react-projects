import React from "react";
import { useOptimistic } from "react";

const UseOptimisticHook = () => {
  // Initial state and reducer function
  const [likes, setLikes] = useOptimistic(
    { count: 0 },
    (state, action) => {
      switch (action.type) {
        case "increment":
          return { count: state.count + 1 };
        case "rollback":
          return { count: action.payload }; // Roll back to previous state
        default:
          return state;
      }
    }
  );

  const handleLike = async () => {
    const previousCount = likes.count;

    // Optimistically update the like count
    setLikes({ type: "increment" });

    try {
      // Simulate a network request
      await fetch("/api/like", { method: "POST" });
    } catch (error) {
      console.error("Failed to update likes:", error);
      // Roll back the optimistic update
      setLikes({ type: "rollback", payload: previousCount });
    }
  };

  return (
    <div>
      <p>Likes: {likes.count}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

export default UseOptimisticHook;
