import{_ as a,r as n,o as t,c as o,a as e,d as l,e as r,b as c}from"./app.1ed9f00f.js";var i="/gateway/assets/go-replay.4ded95d6.jpg";const p={},d=r(`<h1 id="http-flow" tabindex="-1"><a class="header-anchor" href="#http-flow" aria-hidden="true">#</a> Http Flow</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">tcpdump -XvvennSs 0 -i eth0 tcp[20:2]=0x4745 or tcp[20:2]=0x4854</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 0x4745 \u4E3A&quot;GET&quot;\u524D\u4E24\u4E2A\u5B57\u6BCD&quot;GE&quot;</span></span>
<span class="line"><span style="color:#6A9955;"># 0x4854 \u4E3A&quot;HTTP&quot;\u524D\u4E24\u4E2A\u5B57\u6BCD&quot;HT&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u={href:"https://github.com/buger/goreplay",target:"_blank",rel:"noopener noreferrer"},h=c("goreplay"),_=e("p",null,[e("img",{src:i,alt:""})],-1);function m(v,b){const s=n("ExternalLinkIcon");return t(),o("div",null,[d,e("p",null,[e("a",u,[h,l(s)])]),_])}var g=a(p,[["render",m],["__file","http.html.vue"]]);export{g as default};