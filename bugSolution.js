```javascript
// pages/index.js

export default function Home() {
  // Use a try-catch block to handle potential errors gracefully
  try {
    // Your existing code here
    return (
      <div>Hello World!</div>
    );
  } catch (error) {
    // Log the error for debugging
    console.error('Error rendering page:', error);

    // Return a fallback component or error message
    return (
      <div>An error occurred. Please try again later.</div>
    );
  }
}
```