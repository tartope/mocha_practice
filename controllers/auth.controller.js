// Synchronous code
// const AuthController = ()=>{

//     // Pass a role and the role it needs
//     const isAuthorized = (roles, neededRole)=>{
//         // Check to see if role exists
//         return roles.indexOf(neededRole) >= 0;
//     }
//     return {isAuthorized};
// }


// Asynchronous code
// const AuthController = ()=>{

//     // Pass a role and the role it needs
//     const isAuthorized = (roles, neededRole)=>{
//         // Check to see if role exists
//         return roles.indexOf(neededRole) >= 0;
//     }

//     // Same function.  Takes a cb
//     const isAuthorizedAsync = (roles, neededRole, cb)=>{
//         // Uses setTimeout() to make it asynchronous (calls the cb when everything else is done)
//         setTimeout(()=> cb(roles.indexOf(neededRole) >=0), 2100);
//     }
//     return {isAuthorized, isAuthorizedAsync};
// }


// Non arrow functions
function AuthController(){

    var roles;
    // Sets the roles of the user
    function setRoles(role){
        roles = role;
    }

    // Pass a role and the role it needs
    function isAuthorized(neededRole){
        // Check to see if role exists
        return roles.indexOf(neededRole) >= 0;
    }

    // Same function.  Takes a cb
    function isAuthorizedAsync(neededRole, cb){
        // Uses setTimeout() to make it asynchronous (calls the cb when everything else is done)
        setTimeout(function(){cb(roles.indexOf(neededRole) >=0)}, 0);
    }
    return {isAuthorized, isAuthorizedAsync, setRoles};
}


module.exports = AuthController();