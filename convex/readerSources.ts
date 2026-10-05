// Accept source annotations and the provider-executed web-search source list.
// Never turn URLs invented in the written answer into trusted sources.
export function readerSources(result:any){
 const annotated=(result.sources??[]).filter((s:any)=>s.sourceType==='url');
 const tools=[...(result.toolResults??[]),...(result.steps??[]).flatMap((s:any)=>s.toolResults??[])];
 const searched=tools.filter((t:any)=>t.toolName==='web_search').flatMap((t:any)=>{const output=t.output?.type==='json'?t.output.value:t.output;return output?.sources??output?.action?.sources??[];});
 const seen=new Set<string>();const summary=result.text??'';
 return [...annotated,...searched].filter((s:any)=>typeof s.url==='string'&&/^https?:\/\//.test(s.url)&&!seen.has(s.url)&&seen.add(s.url)).sort((a:any,b:any)=>Number(summary.includes(b.url))-Number(summary.includes(a.url))).slice(0,16).map((s:any)=>({url:s.url,title:typeof s.title==='string'?s.title.slice(0,180):s.url.slice(0,180)}));
}
