import React, { useState, useTransition } from 'react';

export default function UseTransitionHook() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isPending, startTransition] = useTransition();
    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        // this will slow the application while input changes
     
        // const newResults = Array(10000)
        //     .fill()
        //     .map((_, i) => `${term} result ${i}`);
        //   setResults(newResults);

        // in order to fix the issue use this logic
        startTransition(() => {
          // Simulate a computationally expensive operation
          const newResults = Array(10000)
            .fill()
            .map((_, i) => `${term}`);
          setResults(newResults);
        });
      };
    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange} />
            {isPending && <p>Loading...</p>}
            <ul>
            {results.map((result, index) => (
                <li key={index}>{result}</li>
            ))}
            </ul>
         </div>
    )
}