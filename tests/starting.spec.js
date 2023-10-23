var assert = require('assert');

// Describe the test (takes a function)
describe('Basic Mocha Test', ()=>{
    // Give it a list of things that it does (takes a function too)
    it('should throw errors', ()=>{
        //  It throws errors through this assertion (this assert() will fail)
        assert.equal(3,3)

    });

});