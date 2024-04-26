# NgJwtToken

FEATURES OF ng-jwt-token:

1. On login stores 'access-token' (library's memory) and 'refresh-token' (local storage).
2. On browser refresh identifies user to be in login state.
3. Returns tokens.  
4. Validates the token structure.
5. Decodes the tokens.
6. Returns token's payload (or) specific value for a key/keys in the token's payload.
7. Tracks validity (or) expiry time of the token.
8. Set token to header with various configuration options.
9. Clears data on user log out.

# JWT service methods and functionalities:

1. On login success or refreshing browser:

   Call: __doLoginUser(username?: string, tokens?: any): Observable<boolean>__

   Parameters: On login pass username and tokens of format [Access-Token: 'value', Refresh-Token: 'value];
               On browser refresh need not pass any parameters, library will check for refresh token in local storage and return the login state of user.

   Functionality: Store tokens and user-login details. Returns the login-state of user.
                  Returns true if tokens are stored and valid otherwise false.

2. On logout:

   Call: __doLogoutUser()__

   Functionality: Clears tokens and user-login details,

3. To get token's full payload (or) a set of values for the keys in the payload 

   Call :  __getTokenPayloadValueFor(tokenType: string, key?: string)__

   Parameters: tokenType - 'accessToken' (or) 'refreshToken'

               key (optional) - ['key1'] (or) ['key1', 'key2', 'key3']

                                If a key is passed respective values are returned in an object format {key1: value1} 

                                If key is not passed, which is optional, full payload from token is returned.

   Functionality: Returns entire payload from token (or) values for specific keys in token payload.
                        
4. To check token's validity (or) expiry status

   Call:  __isTokenExpired(tokenType: string): Observable<boolean>__

   Parameters: tokenType - 'accessToken' (or) 'refreshToken'.

   Functionality: Checks if token is expired with time difference early of 2 mins for access-token and 5 mins for refresh-token.

5. Before making an API call, attach token to the request with customized configOptions

   Call: __addTokenToRequest(request: HttpRequest<any>, configOptions?: any)__

    Parameter - configOptions is of type object  -  {}

                @configOptions keys & values; headerName - header name to be attached in request payload,

                                              authScheme - authentication scheme,

                                              excludeURL - URL's to which headers need not be set.

                                              (Incase of any initial requests you don't want to send tokens)

                @configOptions default keys & values; headerName - Access-Token

                                              authScheme - '' (empty)

                                              excludeURL - no default

    Functionality: Attaches and returns the request by attaching an access token to the header of the request.

                   Call it just before making an API call to the server.


This is my first library. Incase of any queries, please write to vyndev@gmail.com. Will be happy to help :)
