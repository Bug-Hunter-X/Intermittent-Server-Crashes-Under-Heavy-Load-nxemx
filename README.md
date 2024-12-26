# Node.js Server Crashing Under Load

This repository demonstrates a scenario where a Node.js server intermittently crashes under heavy load. The issue stems from unhandled exceptions that can occur due to resource exhaustion or race conditions.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution.

## Problem

The server, handling simple requests, becomes unstable when subjected to a large number of concurrent requests. This is because it fails to gracefully handle potential errors or resource limitations.

## Solution

The solution involves implementing proper error handling and resource management techniques to prevent crashes and enhance stability under stress.