import {generateKeyPair,exportPKCS8,exportJWK} from 'jose';
import {execFileSync} from 'node:child_process';
const k=await generateKeyPair('RS256',{extractable:true});
const values={JWT_PRIVATE_KEY:(await exportPKCS8(k.privateKey)).trimEnd().replace(/\n/g,' '),JWKS:JSON.stringify({keys:[{use:'sig',...await exportJWK(k.publicKey)}]}),SITE_URL:'https://different-pelican-781.convex.site'};
for(const [name,value] of Object.entries(values)){execFileSync('npx',['convex','env','set',`${name}=${value}`],{stdio:'pipe'}); console.log(`${name} configured`);}
