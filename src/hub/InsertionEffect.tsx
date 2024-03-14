import { useInsertionEffect } from "react";

// useInsertionEffect is for CSS-in-JS library authors. Unless you are working on a CSS-in-JS library and need a place to inject the styles, you probably want useEffect or useLayoutEffect instead.

// useInsertionEffect allows inserting elements into the DOM before any layout effects fire.

// Inside your CSS-in-JS library

export function InsertionEffect() {
  let isInsert = new Set();
  // Inside your CSS-in-JS library
  function useCSS(rule: string) {
    useInsertionEffect(() => {
      if (!isInsert.has(rule)) {
      }
      // ... inject <style> tags here ...
    });
    return rule;
  }
  return <div>InsertionEffect</div>;
}
