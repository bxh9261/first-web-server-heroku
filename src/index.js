// 1 - pull in the HTTP server module
const http = require('http');

// 2 - locally this will be 3000, on Heroku it will be assigned
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// 3 - process.env is an environmental variable
// https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env
//console.log(process.env);

// 4 - Here is the hard-coded web page we will send back
// note that we enclosed the string of HTML in back-ticks so that we could have a nicely formatted and readable multi-line string

const index = `
    <html>
        <head>
            <title>First Node Page</title>
        </head>
        <body>
            <h1>Today is gonna be the day
		That they're gonna throw it back to you
		By now you should've somehow
		Realized what you gotta do
		I don't believe that anybody
		Feels the way I do about you now
		Backbeat, the word is on the street
		That the fire in your heart is out
		I'm sure you've heard it all before
		But you never really had a doubt
		I don't believe that anybody
		Feels the way I do about you now
		And all the roads we have to walk are winding
		And all the lights that lead us there are blinding
		There are many things that I
		Would like to say to you but I don't know how
		Because maybe
		You're gonna be the one that saves me
		And after all
		You're my wonderwall
		Today was gonna be the day
		But they'll never throw it back to you
		By now you should've somehow
		Realized what you're not to do
		I don't believe that anybody
		Feels the way I do about you now
		And all the roads that lead you there were winding
		And all the lights that light the way are blinding
		There are many things that I
		Would like to say to you but I don't know how
		I said maybe
		You're gonna be the one that saves me
		And after all
		You're my wonderwall
		I said maybe (I said maybe)
		You're gonna be the one that saves me
		And after all
		You're my wonderwall
		I said maybe (I said maybe)
		You're gonna be the one that saves me (saves me)
		You're gonna be the one that saves me (that saves me)
		You're gonna be the one that saves me (that saves me)</h1>
        </body>
    </html>
`;
      

// 5 - this is the function that will be called every time a client request comes in
// note that in this course we'll be using arrow functions 100% of the time in our server-side code
const onRequest = (request, response) => {
    console.log(request.url);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(index);
    response.end();
}

// 6 - create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);