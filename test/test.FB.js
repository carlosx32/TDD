const {expect}=require('chai');
const {fizzbuzz} = require('../src/functions')


describe('FizBuzz',()=>{
    it('Shuld return a number as a string',()=>{
        expect(fizzbuzz(3)).to.eql('3');
    });
    it('Shuld return fizz for 3*x',()=>{
        expect(fizzbuzz(3)).to.eql('fizz');
    });
    it('Shuld return fizz for 3*x',()=>{
        expect(fizzbuzz(3)).to.eql('buzz');
    });

});
