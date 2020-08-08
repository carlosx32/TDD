const {expect}=require('chai');
const {fizzbuzz} = require('../src/functions')


describe('FizBuzz',()=>{

    it('Shuld return fizz for 3*x',()=>{
        expect(fizzbuzz(21)).to.eql('fizz');
    });
    it('Shuld return buzz for 5*x',()=>{
        expect(fizzbuzz(10)).to.eql('buzz');
    });
    it('Shuld return fizzbuzz for 5*3*x',()=>{
        expect(fizzbuzz(15)).to.eql('fizzbuzz');
    });
});
