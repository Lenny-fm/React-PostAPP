// TODO: // TODO: ADD YOUR ACTION HERE

// Here is an example of a action but you don't have to use it

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => (
    { 
        type: INCREMENT
    }
);

export const decrement = () => (
    { 
        type: DECREMENT
    }
);