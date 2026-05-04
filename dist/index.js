"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=t(function(D,c){
var v=require('@stdlib/number-float64-base-to-float32/dist'),w=require('@stdlib/complex-float32-ctor/dist'),y=require('@stdlib/complex-float32-real/dist'),C=require('@stdlib/complex-float32-imag/dist');function R(e,r){return new w(v(y(r)*e),v(C(r)*e))}c.exports=R
});var m=t(function(E,g){
var x=require('@stdlib/number-float64-base-to-float32/dist');function b(e,r,u,i,s,n){return i[n]=x(r*e),i[n+s]=x(u*e),i}g.exports=b
});var l=t(function(F,p){
var f=require('@stdlib/number-float64-base-to-float32/dist');function j(e,r,u,i,s,n,q){return s[q]=f(e*r[i]),s[q+n]=f(e*r[i+u]),s}p.exports=j
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=d(),k=m(),A=l();o(a,"assign",k);o(a,"strided",A);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
