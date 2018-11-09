# Review Questions

## What is Node.js?
is is runtime environment. An awesome way to execute JavaScript outside the browser.

## What is Express?
is a node framework that sits on top of the node.js server.

## Mention two parts of Express that you learned about this week.
middleware and routing

## What is Middleware?
middleware are functions that take the req and res and do something with them or dont and then can call the next middleware.

## What is a Resource?
everything is a resource

## What can the API return to help clients know if a request was successful?
status code of 200 is what you'd return if something was successful

## How can we partition our application into sub-applications?
express has routing abilities so that we can break code up into modules

## What is express.json() and why do we need it?
built in middleware function for express that is built on bodyparser