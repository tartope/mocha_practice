var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', () => { 
    beforeEach(function settingUpRoles(){
        console.log('running before each');
        authController.setRoles(['users']);
    })
    
    describe('isAuthorized', () => { 
        it('Should return false if not authorized', ()=>{
            authController.setRoles(['user']);
            assert.equal(false, authController.isAuthorized('admin'));
        })
        it('Should return true if authorized', ()=>{
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
        })
        it('should not allow a GET if not authorized');
        it('should allow GET if authorized');
     })

    describe.skip('isAuthorizedAsync', function(){ 
        
        it('Should return false if not authorized', function(done){
            // authController.setRoles(['user']);
            // Have to call the function
            authController.isAuthorizedAsync('admin',
            // This function returns true or false 
            function(isAuth){
                assert.equal(false, isAuth);
                done();
            })
        })
     })
})


// mocha "./tests/**/*.spec.js" <-- Can run in command line and tells mocha to run everything in the test directory, and below, with ".spec.js"