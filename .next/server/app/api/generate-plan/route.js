"use strict";(()=>{var e={};e.id=790,e.ids=[790],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7354:(e,t,n)=>{n.r(t),n.d(t,{originalPathname:()=>el,patchFetch:()=>ec,requestAsyncStorage:()=>eo,routeModule:()=>ea,serverHooks:()=>er,staticGenerationAsyncStorage:()=>es});var i,a,o,s,r,l,c,d,u,h,p,f={};n.r(f),n.d(f,{POST:()=>en});var g=n(9303),m=n(8716),y=n(670);(function(e){e.STRING="STRING",e.NUMBER="NUMBER",e.INTEGER="INTEGER",e.BOOLEAN="BOOLEAN",e.ARRAY="ARRAY",e.OBJECT="OBJECT"})(i||(i={})),function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"}(a||(a={})),function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"}(o||(o={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E=["user","model","function","system"];(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(s||(s={})),function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"}(r||(r={})),function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"}(l||(l={})),function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"}(c||(c={})),function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER"}(d||(d={})),function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"}(u||(u={})),function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"}(h||(h={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class C extends w{constructor(e,t){super(e),this.response=t}}class v extends w{constructor(e,t,n,i){super(e),this.status=t,this.statusText=n,this.errorDetails=i}}class I extends w{}!function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"}(p||(p={}));class b{constructor(e,t,n,i,a){this.model=e,this.task=t,this.apiKey=n,this.stream=i,this.requestOptions=a}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",i=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",a=`${i}/${n}/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}async function O(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.15.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let i=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(i){if(!(i instanceof Headers))try{i=new Headers(i)}catch(e){throw new I(`unable to convert customHeaders value ${JSON.stringify(i)} to Headers: ${e.message}`)}for(let[e,t]of i.entries()){if("x-goog-api-key"===e)throw new I(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new I(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function A(e,t,n,i,a,o){let s=new b(e,t,n,i,o);return{url:s.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.timeout)>=0){let n=new AbortController,i=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=i}return t}(o)),{method:"POST",headers:await O(s),body:a})}}async function _(e,t,n,i,a,o,s=fetch){let{url:r,fetchOptions:l}=await A(e,t,n,i,a,o);return R(r,l,s)}async function R(e,t,n=fetch){let i;try{i=await n(e,t)}catch(t){(function(e,t){let n=e;throw e instanceof v||e instanceof I||((n=new w(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n})(t,e)}return i.ok||await N(i,e),i}async function N(e,t){let n,i="";try{let t=await e.json();i=t.error.message,t.error.details&&(i+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new v(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${i}`,e.status,e.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),M(e.candidates[0]))throw new C(`${x(e)}`,e);return function(e){var t,n,i,a;let o=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(a=null===(i=e.candidates)||void 0===i?void 0:i[0].content)||void 0===a?void 0:a.parts)t.text&&o.push(t.text),t.executableCode&&o.push("\n```python\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&o.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return o.length>0?o.join(""):""}(e)}if(e.promptFeedback)throw new C(`Text not available. ${x(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),M(e.candidates[0]))throw new C(`${x(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),k(e)[0]}if(e.promptFeedback)throw new C(`Function call not available. ${x(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),M(e.candidates[0]))throw new C(`${x(e)}`,e);return k(e)}if(e.promptFeedback)throw new C(`Function call not available. ${x(e)}`,e)},e}function k(e){var t,n,i,a;let o=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(a=null===(i=e.candidates)||void 0===i?void 0:i[0].content)||void 0===a?void 0:a.parts)t.functionCall&&o.push(t.functionCall);return o.length>0?o:void 0}let S=[d.RECITATION,d.SAFETY,d.LANGUAGE];function M(e){return!!e.finishReason&&S.includes(e.finishReason)}function x(e){var t,n,i;let a="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)a+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(a+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(a+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(i=e.candidates)||void 0===i?void 0:i[0]){let t=e.candidates[0];M(t)&&(a+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(a+=`: ${t.finishMessage}`))}return a}function $(e){return this instanceof $?(this.v=e,this):new $(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function L(e){let t=[],n=e.getReader();for(;;){let{done:e,value:i}=await n.read();if(e)return T(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let i={};for(let a of e.content.parts)a.text&&(i.text=a.text),a.functionCall&&(i.functionCall=a.functionCall),a.executableCode&&(i.executableCode=a.executableCode),a.codeExecutionResult&&(i.codeExecutionResult=a.codeExecutionResult),0===Object.keys(i).length&&(i.text=""),n.candidates[t].content.parts.push(i)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D(e,t,n,i){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function i(){return t.read().then(({value:t,done:a})=>{let o;if(a){if(n.trim()){e.error(new w("Failed to parse stream"));return}e.close();return}let s=(n+=t).match(P);for(;s;){try{o=JSON.parse(s[1])}catch(t){e.error(new w(`Error parsing JSON response: "${s[1]}"`));return}e.enqueue(o),s=(n=n.substring(s[0].length)).match(P)}return i()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var i,a=n.apply(e,t||[]),o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(e){a[e]&&(i[e]=function(t){return new Promise(function(n,i){o.push([e,t,n,i])>1||r(e,t)})})}function r(e,t){try{var n;(n=a[e](t)).value instanceof $?Promise.resolve(n.value.v).then(l,c):d(o[0][2],n)}catch(e){d(o[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),o.shift(),o.length&&r(o[0][0],o[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield $(t.read());if(n)break;yield yield $(T(e))}})}(t),response:L(n)}}(await _(t,p.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),i))}async function F(e,t,n,i){let a=await _(t,p.GENERATE_CONTENT,e,!1,JSON.stringify(n),i);return{response:T(await a.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function H(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},i=!1,a=!1;for(let o of e)"functionResponse"in o?(n.parts.push(o),a=!0):(t.parts.push(o),i=!0);if(i&&a)throw new w("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!a)throw new w("No content is provided for sending chat message.");return i?t:n}(t)}function U(e){let t;return t=e.contents?e:{contents:[H(e)]},e.systemInstruction&&(t.systemInstruction=G(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],B={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},j="SILENT_ERROR";class Y{constructor(e,t,n,i){this.model=t,this.params=n,this.requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:i}=n;if(!t&&"user"!==e)throw new w(`First content should be with role 'user', got ${e}`);if(!E.includes(e))throw new w(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(E)}`);if(!Array.isArray(i))throw new w("Content should have 'parts' property with an array of Parts");if(0===i.length)throw new w("Each Content should have at least one part");let a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of i)for(let t of K)t in e&&(a[t]+=1);let o=B[e];for(let t of K)if(!o.includes(t)&&a[t]>0)throw new w(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,n,i,a,o,s;let r;await this._sendPromise;let l=H(e),c={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(a=this.params)||void 0===a?void 0:a.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,cachedContent:null===(s=this.params)||void 0===s?void 0:s.cachedContent,contents:[...this._history,l]};return this._sendPromise=this._sendPromise.then(()=>F(this._apiKey,this.model,c,this.requestOptions)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(l);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=x(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}r=e}),await this._sendPromise,r}async sendMessageStream(e){var t,n,i,a,o,s;await this._sendPromise;let r=H(e),l={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(a=this.params)||void 0===a?void 0:a.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,cachedContent:null===(s=this.params)||void 0===s?void 0:s.cachedContent,contents:[...this._history,r]},c=D(this._apiKey,this.model,l,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>c).catch(e=>{throw Error(j)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(r);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=x(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==j&&console.error(e)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t,n,i){return(await _(t,p.COUNT_TOKENS,e,!1,JSON.stringify(n),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t,n,i){return(await _(t,p.EMBED_CONTENT,e,!1,JSON.stringify(n),i)).json()}async function z(e,t,n,i){let a=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await _(t,p.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:a}),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=G(t.systemInstruction),this.cachedContent=t.cachedContent,this.requestOptions=n||{}}async generateContent(e){var t;let n=U(e);return F(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},n),this.requestOptions)}async generateContentStream(e){var t;let n=U(e);return D(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},n),this.requestOptions)}startChat(e){var t;return new Y(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this.requestOptions)}async countTokens(e){let t=function(e,t){var n;let i={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},a=null!=e.generateContentRequest;if(e.contents){if(a)throw new I("CountTokensRequest must have one of contents or generateContentRequest, not both.");i.contents=e.contents}else if(a)i=Object.assign(Object.assign({},i),e.generateContentRequest);else{let t=H(e);i.contents=[t]}return{generateContentRequest:i}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent});return q(this.apiKey,this.model,t,this.requestOptions)}async embedContent(e){let t="string"==typeof e||Array.isArray(e)?{content:H(e)}:e;return V(this.apiKey,this.model,t,this.requestOptions)}async batchEmbedContents(e){return z(this.apiKey,this.model,e,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new w("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new J(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t){if(!e.name)throw new I("Cached content must contain a `name` field.");if(!e.model)throw new I("Cached content must contain a `model` field.");let n={model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e};return new J(this.apiKey,n,t)}}let X={"Tamil Nadu":{breakfast:["Idli with sambar and coconut chutney","Dosa with tomato chutney","Pongal with ghee and pepper","Upma with vegetables","Appam with coconut milk","Rava idli with coriander chutney"],lunch:["Brown rice with vegetable sambar and poriyal","Rasam rice with papad","Curd rice with pickle","Koottu curry with rice","Morkozhambhu with rice","Puliyodarai"],dinner:["Light dosa with tomato chutney","Chapati with vegetable kurma","Vegetable soup with multigrain roti","Ven pongal","Idiyappam with coconut milk"],snacks:["Sundal (chickpea or lentil)","Buttermilk (mor)","Fresh fruit bowl","Murukku (small portion)","Kozhukattai","Tender coconut water"],description:"Tamil Nadu"},Kerala:{breakfast:["Appam with vegetable stew","Puttu with kadala curry","Idiyappam with coconut milk","Pathiri with egg curry","Dosa with fish curry"],lunch:["Kerala red rice with avial and sambar","Fish curry with brown rice","Olan (ash gourd with coconut)","Thoran with rice","Erissery with rice"],dinner:["Chapati with vegetable stew","Appam with chicken curry","Kanji (rice porridge)","Matta rice with fish curry","Vegetable ishtu"],snacks:["Banana chips (small portion)","Pazham pori (banana fritters)","Coconut water","Chakka (jackfruit)","Roasted nuts"],description:"Kerala"},Karnataka:{breakfast:["Akki roti with chutney","Ragi mudde with sambar","Benne dosa with chutney","Uppit (upma)","Set dosa with sagu"],lunch:["Jolada roti with bassaru","Bisibele bath","Vangi bath","Chitranna","Ragi sankati with sambar"],dinner:["Chapati with dal palya","Ragi roti with chutney","Rice with rasam","Set dosa with chutney","Vegetable curry with roti"],snacks:["Chikki (peanut sweet)","Roasted corn","Tender coconut","Groundnut boiled","Fresh fruits"],description:"Karnataka"},"Andhra Pradesh":{breakfast:["Pesarattu with ginger chutney","Upma with vegetables","Rava dosa with chutney","Bamboo rice kanji","Idli with peanut chutney"],lunch:["Andhra rice with gongura chutney","Tomato rice with raita","Vegetable pulao","Dal with rice and pickle","Sambar rice with poriyal"],dinner:["Roti with dal fry","Vegetable biryani (small portion)","Chapati with mixed vegetable curry","Pesarattu","Rice with rasam"],snacks:["Chilli bajji","Roasted chana","Tender coconut","Fruit salad","Buttermilk"],description:"Andhra Pradesh"},"North India":{breakfast:["Whole wheat paratha with curd","Poha with peanuts","Besan cheela with chutney","Oats upma","Moong dal cheela"],lunch:["Dal makhani with brown rice","Rajma with roti","Chole with bhatura (small)","Paneer curry with roti","Vegetable pulao with raita"],dinner:["Roti with dal tadka","Khichdi with vegetables","Palak paneer with roti","Mixed dal with rice","Vegetable sabzi with roti"],snacks:["Roasted makhana","Chana chaat","Fresh lassi","Mixed nuts","Fruit chaat"],description:"North India"}},Q={Diabetes:"Prioritize low glycemic index foods. Avoid refined carbohydrates, white rice in large portions, and sugary drinks. Include whole grains, leafy vegetables, and fiber-rich foods. Choose brown rice over white rice. Limit fruit portions.",Hypertension:"Reduce sodium intake. Avoid pickles, papads, processed foods, and excess salt. Include potassium-rich foods like bananas, sweet potatoes, and leafy greens. Choose low-fat dairy. Increase magnesium through nuts and seeds.",Obesity:"Create a caloric deficit while maintaining nutrition. Focus on high-volume, low-calorie foods. Increase protein intake for satiety. Reduce portion sizes. Choose steamed or boiled preparations over fried. Include more vegetables and fiber.","Heart Disease":"Avoid saturated fats, trans fats, and high-cholesterol foods. Choose heart-healthy oils (olive, coconut in moderation). Include omega-3 rich foods. Limit red meat. Choose lean proteins. Increase fiber and antioxidant-rich foods.",None:"Maintain a balanced diet with all macronutrients. Focus on whole foods, adequate protein, healthy fats, and complex carbohydrates."};var Z=n(7070);let ee=process.env.GEMINI_API_KEY&&"your_gemini_api_key_here"!==process.env.GEMINI_API_KEY&&process.env.GEMINI_API_KEY.length>10,et=ee?new W(process.env.GEMINI_API_KEY):null;async function en(e){try{let t;let{name:n,age:i,weight:a,height:o,gender:s,medicalCondition:r,region:l,dietPreference:c,activityLevel:d,naturalLanguageInput:u}=await e.json(),h=o/100,p=(a/(h*h)).toFixed(1),f="Normal",g=parseFloat(p);g<18.5?f="Underweight":g>=25&&g<30?f="Overweight":g>=30&&(f="Obese");let m=X[l]||X["Tamil Nadu"],y=Q[r]||Q.None,E=`You are ArogyaAI, an expert AI nutritionist specializing in South Indian and regional Indian cuisine. 
Generate a personalized diet and lifestyle plan for the following patient:

PATIENT PROFILE:
- Name: ${n}
- Age: ${i} years
- Weight: ${a} kg
- Height: ${o} cm
- Gender: ${s}
- BMI: ${p} (${f})
- Medical Condition: ${r}
- Region: ${l}
- Diet Preference: ${c}
- Activity Level: ${d}
- Natural Language Preferences: "${u||"No specific preferences mentioned"}"

MEDICAL DIETARY GUIDELINES FOR ${r}:
${y}

REGIONAL FOOD KNOWLEDGE FOR ${l}:
Available breakfast options: ${m.breakfast.join(", ")}
Available lunch options: ${m.lunch.join(", ")}
Available dinner options: ${m.dinner.join(", ")}
Available snack options: ${m.snacks.join(", ")}

INSTRUCTIONS:
1. Analyze the natural language input and extract food preferences, restrictions, and health goals
2. Create a personalized meal plan using ${l} regional foods
3. Adjust meals based on the medical condition guidelines
4. Account for BMI category and activity level
5. If the patient speaks Tamil or another language in their preferences, understand and respond in English
6. Calculate an appropriate health score (0-100) based on their profile

Return ONLY a valid JSON object with this exact structure (no markdown, no explanation):
{
  "health_score": <number 0-100>,
  "health_status": "<Poor/Fair/Moderate/Good/Excellent>",
  "health_summary": "<2-3 sentence personalized health assessment>",
  "diet_plan": {
    "breakfast": ["<meal 1>", "<meal 2>", "<meal 3>"],
    "lunch": ["<meal 1>", "<meal 2>", "<meal 3>"],
    "dinner": ["<meal 1>", "<meal 2>", "<meal 3>"],
    "snacks": ["<snack 1>", "<snack 2>", "<snack 3>"]
  },
  "nutrition_insights": {
    "calories": "<estimated daily calorie range>",
    "protein": "<protein recommendation with grams>",
    "carbs": "<carbohydrate guidance>",
    "fiber": "<fiber intake recommendation>"
  },
  "lifestyle_recommendations": {
    "exercise": "<specific exercise plan with duration and type for ${d} activity level>",
    "hydration": "<specific water intake recommendation>",
    "sleep": "<sleep recommendation>",
    "tips": "<3-4 personalized health tips specific to their medical condition>"
  },
  "ai_insights": "<A personalized 2-3 sentence message addressing their natural language input and explaining why this plan works for them>"
}`;if(ee&&et)try{let e=et.getGenerativeModel({model:"gemini-2.0-flash"}),n=(await e.generateContent(E)).response.text().trim().replace(/```json\n?/g,"").replace(/```\n?/g,"").trim();t=JSON.parse(n)}catch(e){console.warn("Gemini AI unavailable, using mock plan:",e.message?.slice(0,80)),t=ei(n,i,g,f,r,l,c,d,u,m)}else t=ei(n,i,g,f,r,l,c,d,u,m);return Z.NextResponse.json({success:!0,plan:t})}catch(e){return console.error("Plan generation error:",e),Z.NextResponse.json({success:!1,error:"Failed to generate plan"},{status:500})}}function ei(e,t,n,i,a,o,s,r,l,c){let d=Math.max(45,Math.min(92,80-("None"!==a?15:0)-(n>30?10:n>25?5:0)-("Low"===r?8:"Moderate"===r?3:0)+(t<30?5:t>60?-5:0))),u="Good";return d<55?u="Fair":d<65?u="Moderate":d>=85&&(u="Excellent"),{health_score:d,health_status:u,health_summary:`Based on your profile, you have a BMI of ${n.toFixed(1)} (${i}) at age ${t}. ${"None"!==a?`Managing ${a} requires mindful food choices.`:"Your health baseline is good."} This personalized ${o} diet plan is designed to optimize your wellbeing.`,diet_plan:{breakfast:[c.breakfast[0],c.breakfast[1],c.breakfast[2]],lunch:[c.lunch[0],c.lunch[1],c.lunch[2]],dinner:[c.dinner[0],c.dinner[1],c.dinner[2]],snacks:[c.snacks[0],c.snacks[1],c.snacks[2]]},nutrition_insights:{calories:({Low:"1600-1800 kcal/day",Moderate:"1900-2200 kcal/day",High:"2300-2700 kcal/day"})[r]||"1800-2000 kcal/day",protein:`${Math.round(70+(n>25?10:0))}–${Math.round(90+(n>25?10:0))}g/day from lentils, legumes, dairy${"Non-Vegetarian"===s?", and lean meats":""}`,carbs:"Diabetes"===a?"Low GI carbs only: 45–55% of total calories from whole grains and millets":"50–60% of total calories from complex carbohydrates and whole grains",fiber:"25–35g/day through vegetables, legumes, and whole grains"},lifestyle_recommendations:{exercise:({Low:"20-30 minutes of brisk walking daily. Start with gentle yoga or stretching 3x/week. Gradually increase intensity.",Moderate:"45 minutes of mixed cardio (walking + cycling) 5 days/week. Add strength training 2-3 times/week.",High:"60 minutes of vigorous activity daily. Include HIIT 3x/week, strength training 3x/week, and active recovery yoga."})[r],hydration:`Drink ${Math.round(2.5+("High"===r?.5:0))}–${Math.round(3+("High"===r?.5:0))} liters of water daily. Include buttermilk or coconut water for electrolytes.`,sleep:"7–8 hours of quality sleep per night. Maintain consistent sleep and wake times. Avoid heavy meals 2 hours before bed.",tips:"Diabetes"===a?"Monitor blood sugar before and after meals. Eat small, frequent meals every 3-4 hours. Avoid sugary drinks and opt for buttermilk or tender coconut water. Include cinnamon and fenugreek in cooking.":"Hypertension"===a?"Reduce salt intake to less than 5g/day. Avoid pickles and papad. Include banana, sweet potato, and spinach for potassium. Practice meditation and breathing exercises for stress management.":"Eat mindfully and chew food thoroughly. Avoid skipping meals. Include a variety of colorful vegetables. Limit processed and packaged foods."},ai_insights:l?`I noticed you prefer ${l.slice(0,60)}... Your plan has been tailored accordingly with ${o} regional foods that align with your preferences while supporting your health goals. The meals are designed to be both culturally familiar and nutritionally optimized.`:`Your personalized ${o} diet plan has been crafted to align with your health profile and cultural food preferences. Each meal choice is optimized for your specific needs.`}}let ea=new g.AppRouteRouteModule({definition:{kind:m.x.APP_ROUTE,page:"/api/generate-plan/route",pathname:"/api/generate-plan",filename:"route",bundlePath:"app/api/generate-plan/route"},resolvedPagePath:"/Users/mukundankandasamy/ArogyAI/app/api/generate-plan/route.ts",nextConfigOutput:"",userland:f}),{requestAsyncStorage:eo,staticGenerationAsyncStorage:es,serverHooks:er}=ea,el="/api/generate-plan/route";function ec(){return(0,y.patchFetch)({serverHooks:er,staticGenerationAsyncStorage:es})}}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),i=t.X(0,[948,972],()=>n(7354));module.exports=i})();