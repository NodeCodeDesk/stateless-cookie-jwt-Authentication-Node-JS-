# Stateless-Cookie+JWT-Authentication-Node-JS-
Simple Way to create stateless authentication for api's with Cookies + JsonWebToken

- Create main directory 
- Init npm
- Installed required packages 
- like: express, jsonwebtoken, cookie-parser, body-parser, mongoose
- We use cookie-parser for:-
-   Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- Here we use Five method: login, logout, emailExist, generateToken, verifyToken
- login():- checke given email or user are exist or not in collection if exist return result data. (i used static value for email you can pass it in req body)
- Then, we passed Id and Firstname to generate jsonwebtoken.
- generateToken():- generate the token using jwt sign() method with given data and SECRET keyword 
- And then, set generated token in cookies with expiration time, secure, httpOnly
- **Note: you can't view the cookie on client side if you set the following 
({ secure:true, httpOnly:true}) -secure means it should only use the cookie 
over an https network while -httpOnly means the cookie should be read by 
any client side Javascript**

- verifyToken():- we get back token from cookies and verify using jwt verify() method with SECRET keyword 
- If its matched then return decoded data from token whatever we pass earlier at time of token creation.
- logout():- clears the cookies.

- Cookies are comes with every request so,
- we pass verifyToken method to default route in Server.js file to authenticate the every single request before processing it.
