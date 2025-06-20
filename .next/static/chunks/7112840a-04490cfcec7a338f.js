"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,n){n.d(t,{Bt:function(){return s9},ET:function(){return s2},IO:function(){return sP},JU:function(){return si},PL:function(){return s0},QT:function(){return sJ},Xo:function(){return s$},ad:function(){return sh},cf:function(){return s3},hJ:function(){return sr},pl:function(){return s1}});var r,i,s,a,o=n(5816),l=n(8463),u=n(3333),h=n(1683),c=n(5062),d=n(4489);n(3454);var f=n(1876).Buffer;let m="@firebase/firestore",g="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class p{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}p.UNAUTHENTICATED=new p(null),p.GOOGLE_CREDENTIALS=new p("google-credentials-uid"),p.FIRST_PARTY=new p("first-party-uid"),p.MOCK_USER=new p("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let y="11.9.0",v=new u.Yd("@firebase/firestore");function w(){return v.logLevel}function E(e,...t){if(v.logLevel<=u.in.DEBUG){let n=t.map(I);v.debug(`Firestore (${y}): ${e}`,...n)}}function _(e,...t){if(v.logLevel<=u.in.ERROR){let n=t.map(I);v.error(`Firestore (${y}): ${e}`,...n)}}function T(e,...t){if(v.logLevel<=u.in.WARN){let n=t.map(I);v.warn(`Firestore (${y}): ${e}`,...n)}}function I(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
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
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function C(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,S(e,r,n)}function S(e,t,n){let r=`FIRESTORE (${y}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw _(r),Error(r)}function A(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||S(t,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class k{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class D{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(p.UNAUTHENTICATED))}shutdown(){}}class R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class V{constructor(e){this.t=e,this.currentUser=p.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){A(void 0===this.o,42304);let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new k;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new k,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new k)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(A("string"==typeof t.accessToken,31837,{l:t}),new D(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return A(null===e||"string"==typeof e,2055,{h:e}),new p(e)}}class L{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=p.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class M{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new L(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(p.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,o.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){A(void 0===this.o,3512);let n=e=>{null!=e.error&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.m;return this.m=e.token,E("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?r(e):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new O(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(A("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new O(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function P(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function q(e,t){return e<t?-1:e>t?1:0}function B(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=e.codePointAt(n),i=t.codePointAt(n);if(r!==i){if(r<128&&i<128)return q(r,i);{let s=P(),a=function(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return q(e[n],t[n]);return q(e.length,t.length)}(s.encode($(e,n)),s.encode($(t,n)));return 0!==a?a:q(r,i)}}n+=r>65535?2:1}return q(e.length,t.length)}function $(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function z(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}class K{static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new K(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new b(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new b(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new K(0,0))}static max(){return new Q(new K(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let G="__name__";class j{constructor(e,t,n){void 0===t?t=0:t>e.length&&C(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&C(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===j.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof j?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=j.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return q(e.length,t.length)}static compareSegments(e,t){let n=j.isNumericId(e),r=j.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?j.extractNumericId(e).compare(j.extractNumericId(t)):B(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return c.z8.fromString(e.substring(4,e.length-2))}}class H extends j{construct(e,t,n){return new H(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new b(N.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new H(t)}static emptyPath(){return new H([])}}let Y=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends j{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return Y.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===G}static keyField(){return new W([G])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new b(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new b(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new b(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new b(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(H.fromString(e))}static fromName(e){return new X(H.fromString(e).popFirst(5))}static empty(){return new X(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===H.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new H(e.slice()))}}class J{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}J.UNKNOWN_ID=-1;class Z{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Z(Q.min(),X.empty(),-1)}static max(){return new Z(Q.max(),X.empty(),-1)}}class ee{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function et(e){if(e.code!==N.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class en{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new en((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof en?t:en.resolve(t)}catch(e){return en.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):en.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):en.reject(t)}static resolve(e){return new en((t,n)=>{t(e)})}static reject(e){return new en((t,n)=>{n(e)})}static waitFor(e){return new en((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=en.resolve(!1);for(let n of e)t=t.next(e=>e?en.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new en((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new en((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function er(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ei{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ue(e),this.ce=e=>t.writeSequenceNumber(e))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ce&&this.ce(e),e}}function es(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ea(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function eo(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function el(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}ei.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class eu{constructor(e,t){this.comparator=e,this.root=t||ec.EMPTY}insert(e,t){return new eu(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ec.BLACK,null,null))}remove(e){return new eu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ec.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eh(this.root,e,this.comparator,!1)}getReverseIterator(){return new eh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eh(this.root,e,this.comparator,!0)}}class eh{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ec{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ec.RED,this.left=null!=r?r:ec.EMPTY,this.right=null!=i?i:ec.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ec(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ec.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ec.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ec.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ec.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw C(43730,{key:this.key,value:this.value});if(this.right.isRed())throw C(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw C(27949);return e+(this.isRed()?0:1)}}ec.EMPTY=null,ec.RED=!0,ec.BLACK=!1,ec.EMPTY=new class{constructor(){this.size=0}get key(){throw C(57766)}get value(){throw C(16141)}get color(){throw C(16727)}get left(){throw C(29726)}get right(){throw C(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new ec(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ed{constructor(e){this.comparator=e,this.data=new eu(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ef(this.data.getIterator())}getIteratorFrom(e){return new ef(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ed)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ed(this.comparator);return t.data=e,t}}class ef{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class em{constructor(e){this.fields=e,e.sort(W.comparator)}static empty(){return new em([])}unionWith(e){let t=new ed(W.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new em(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return z(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class eg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ep{constructor(e){this.binaryString=e}static fromBase64String(e){return new ep(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eg("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new ep(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ep.EMPTY_BYTE_STRING=new ep("");let ey=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ev(e){if(A(!!e,39018),"string"==typeof e){let t=0,n=ey.exec(e);if(A(!!n,46558,{timestamp:e}),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:ew(e.seconds),nanos:ew(e.nanos)}}function ew(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eE(e){return"string"==typeof e?ep.fromBase64String(e):ep.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let e_="server_timestamp",eT="__type__",eI="__previous_value__",eC="__local_write_time__";function eS(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[eT])||void 0===n?void 0:n.stringValue)===e_}function eA(e){let t=e.mapValue.fields[eI];return eS(t)?eA(t):t}function eN(e){let t=ev(e.mapValue.fields[eC].timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class eb{constructor(e,t,n,r,i,s,a,o,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u}}let ek="(default)";class eD{constructor(e,t){this.projectId=e,this.database=t||ek}static empty(){return new eD("","")}get isDefaultDatabase(){return this.database===ek}isEqual(e){return e instanceof eD&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let ex="__type__",eR="__max__",eV={mapValue:{fields:{__type__:{stringValue:eR}}}},eL="__vector__",eM="value";function eO(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eS(e)?4:eX(e)?9007199254740991:eY(e)?10:11:C(28295,{value:e})}function eF(e,t){if(e===t)return!0;let n=eO(e);if(n!==eO(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eN(e).isEqual(eN(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=ev(e.timestampValue),r=ev(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eE(e.bytesValue).isEqual(eE(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return ew(e.geoPointValue.latitude)===ew(t.geoPointValue.latitude)&&ew(e.geoPointValue.longitude)===ew(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ew(e.integerValue)===ew(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=ew(e.doubleValue),r=ew(t.doubleValue);return n===r?es(n)===es(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return z(e.arrayValue.values||[],t.arrayValue.values||[],eF);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ea(n)!==ea(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eF(n[e],r[e])))return!1;return!0}(e,t);default:return C(52216,{left:e})}}function eP(e,t){return void 0!==(e.values||[]).find(e=>eF(e,t))}function eU(e,t){if(e===t)return 0;let n=eO(e),r=eO(t);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=ew(e.integerValue||e.doubleValue),r=ew(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eq(e.timestampValue,t.timestampValue);case 4:return eq(eN(e),eN(t));case 5:return B(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eE(e),r=eE(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=q(n[e],r[e]);if(0!==t)return t}return q(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=q(ew(e.latitude),ew(t.latitude));return 0!==n?n:q(ew(e.longitude),ew(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eB(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let a=e.fields||{},o=t.fields||{},l=null===(n=a[eM])||void 0===n?void 0:n.arrayValue,u=null===(r=o[eM])||void 0===r?void 0:r.arrayValue,h=q((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:eB(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===eV.mapValue&&t===eV.mapValue)return 0;if(e===eV.mapValue)return 1;if(t===eV.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=B(r[e],s[e]);if(0!==t)return t;let a=eU(n[r[e]],i[s[e]]);if(0!==a)return a}return q(r.length,s.length)}(e.mapValue,t.mapValue);default:throw C(23264,{Pe:n})}}function eq(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return q(e,t);let n=ev(e),r=ev(t),i=q(n.seconds,r.seconds);return 0!==i?i:q(n.nanos,r.nanos)}function eB(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eU(n[e],r[e]);if(t)return t}return q(n.length,r.length)}function e$(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ev(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eE(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,X.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=e$(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${e$(e.fields[i])}`;return n+"}"}(e.mapValue):C(61005,{value:e})}function ez(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eK(e){return!!e&&"integerValue"in e}function eQ(e){return!!e&&"arrayValue"in e}function eG(e){return!!e&&"nullValue"in e}function ej(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eH(e){return!!e&&"mapValue"in e}function eY(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[ex])||void 0===n?void 0:n.stringValue)===eL}function eW(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return eo(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eW(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eW(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eX(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===eR}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class eJ{constructor(e){this.value=e}static empty(){return new eJ({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eH(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eW(t)}setAll(e){let t=W.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eW(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());eH(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eF(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eH(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(eo(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eJ(eW(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class eZ{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new eZ(e,0,Q.min(),Q.min(),Q.min(),eJ.empty(),0)}static newFoundDocument(e,t,n,r){return new eZ(e,1,t,Q.min(),n,r,0)}static newNoDocument(e,t){return new eZ(e,2,t,Q.min(),Q.min(),eJ.empty(),0)}static newUnknownDocument(e,t){return new eZ(e,3,t,Q.min(),Q.min(),eJ.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(Q.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eJ.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eJ.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eZ&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eZ(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class e0{constructor(e,t){this.position=e,this.inclusive=t}}function e1(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?X.comparator(X.fromName(a.referenceValue),n.key):eU(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function e2(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eF(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class e3{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class e4{}class e6 extends e4{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new e7(e,t,n):"array-contains"===t?new tr(e,n):"in"===t?new ti(e,n):"not-in"===t?new ts(e,n):"array-contains-any"===t?new ta(e,n):new e6(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new te(e,n):new tt(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(eU(t,this.value)):null!==t&&eO(this.value)===eO(t)&&this.matchesComparison(eU(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return C(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e9 extends e4{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new e9(e,t)}matches(e){return e5(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Te||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function e5(e){return"and"===e.op}function e8(e){for(let t of e.filters)if(t instanceof e9)return!1;return!0}class e7 extends e6{constructor(e,t,n){super(e,t,n),this.key=X.fromName(n.referenceValue)}matches(e){let t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class te extends e6{constructor(e,t){super(e,"in",t),this.keys=tn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tt extends e6{constructor(e,t){super(e,"not-in",t),this.keys=tn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tn(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>X.fromName(e.referenceValue))}class tr extends e6{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eQ(t)&&eP(t.arrayValue,this.value)}}class ti extends e6{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eP(this.value.arrayValue,t)}}class ts extends e6{constructor(e,t){super(e,"not-in",t)}matches(e){if(eP(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!eP(this.value.arrayValue,t)}}class ta extends e6{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eQ(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eP(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class to{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.Ie=null}}function tl(e,t=null,n=[],r=[],i=null,s=null,a=null){return new to(e,t,n,r,i,s,a)}function tu(e){if(null===e.Ie){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof e6)return t.field.canonicalString()+t.op.toString()+e$(t.value);if(e8(t)&&e5(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>e$(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>e$(e)).join(",")),e.Ie=t}return e.Ie}function th(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof e6?n instanceof e6&&t.op===n.op&&t.field.isEqual(n.field)&&eF(t.value,n.value):t instanceof e9?n instanceof e9&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void C(19439)}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!e2(e.startAt,t.startAt)&&e2(e.endAt,t.endAt)}function tc(e){return X.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class td{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function tf(e){return new td(e)}function tm(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tg(e){return null!==e.collectionGroup}function tp(e){if(null===e.Ee){let t;e.Ee=[];let n=new Set;for(let t of e.explicitOrderBy)e.Ee.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ed(W.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.Ee.push(new e3(t,r))}),n.has(W.keyField().canonicalString())||e.Ee.push(new e3(W.keyField(),r))}return e.Ee}function ty(e){return e.de||(e.de=function(e,t){if("F"===e.limitType)return tl(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new e3(e.field,t)});let n=e.endAt?new e0(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new e0(e.startAt.position,e.startAt.inclusive):null;return tl(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,tp(e))),e.de}function tv(e,t){let n=e.filters.concat([t]);return new td(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tw(e,t,n){return new td(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tE(e,t){return th(ty(e),ty(t))&&e.limitType===t.limitType}function t_(e){return`${tu(ty(e))}|lt:${e.limitType}`}function tT(e){var t;let n;return`Query(target=${n=(t=ty(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof e6?`${t.field.canonicalString()} ${t.op} ${e$(t.value)}`:t instanceof e9?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>e$(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>e$(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tI(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):X.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tp(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=e1(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tp(e),t))&&(!e.endAt||!!function(e,t,n){let r=e1(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tp(e),t))}function tC(e){return(t,n)=>{let r=!1;for(let i of tp(e)){let e=function(e,t,n){let r=e.field.isKeyField()?X.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eU(r,i):C(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return C(19790,{direction:e.dir})}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tS{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){eo(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return el(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let tA=new eu(X.comparator),tN=new eu(X.comparator);function tb(...e){let t=tN;for(let n of e)t=t.insert(n.key,n);return t}function tk(e){let t=tN;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tD(){return new tS(e=>e.toString(),(e,t)=>e.isEqual(t))}let tx=new eu(X.comparator),tR=new ed(X.comparator);function tV(...e){let t=tR;for(let n of e)t=t.add(n);return t}let tL=new ed(q);/**
 * @license
 * Copyright 2020 Google LLC
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
 */function tM(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:es(t)?"-0":t}}function tO(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class tF{constructor(){this._=void 0}}function tP(e,t){return e instanceof tK?eK(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tU extends tF{}class tq extends tF{constructor(e){super(),this.elements=e}}function tB(e,t){let n=tG(t);for(let t of e.elements)n.some(e=>eF(e,t))||n.push(t);return{arrayValue:{values:n}}}class t$ extends tF{constructor(e){super(),this.elements=e}}function tz(e,t){let n=tG(t);for(let t of e.elements)n=n.filter(e=>!eF(e,t));return{arrayValue:{values:n}}}class tK extends tF{constructor(e,t){super(),this.serializer=e,this.Re=t}}function tQ(e){return ew(e.integerValue||e.doubleValue)}function tG(e){return eQ(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tj{constructor(e,t){this.field=e,this.transform=t}}class tH{constructor(e,t){this.version=e,this.transformResults=t}}class tY{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tY}static exists(e){return new tY(void 0,e)}static updateTime(e){return new tY(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tW(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tX{}function tJ(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new t9(e.key,tY.none()):new t1(e.key,e.data,tY.none());{let n=e.data,r=eJ.empty(),i=new ed(W.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new t2(e.key,r,new em(i.toArray()),tY.none())}}function tZ(e,t,n,r){return e instanceof t1?function(e,t,n,r){if(!tW(e.precondition,t))return n;let i=e.value.clone(),s=t6(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof t2?function(e,t,n,r){if(!tW(e.precondition,t))return n;let i=t6(e.fieldTransforms,r,t),s=t.data;return(s.setAll(t3(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tW(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function t0(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&z(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tq&&r instanceof tq||n instanceof t$&&r instanceof t$?z(n.elements,r.elements,eF):n instanceof tK&&r instanceof tK?eF(n.Re,r.Re):n instanceof tU&&r instanceof tU)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class t1 extends tX{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class t2 extends tX{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function t3(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function t4(e,t,n){let r=new Map;A(e.length===n.length,32656,{Ve:n.length,me:e.length});for(let s=0;s<n.length;s++){var i;let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof tq?tB(o,l):o instanceof t$?tz(o,l):i))}return r}function t6(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tU?function(e,t){let n={fields:{[eT]:{stringValue:e_},[eC]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eS(t)&&(t=eA(t)),t&&(n.fields[eI]=t),{mapValue:n}}(t,s):e instanceof tq?tB(e,s):e instanceof t$?tz(e,s):function(e,t){let n=tP(e,t),r=tQ(n)+tQ(e.Re);return eK(n)&&eK(e.Re)?tO(r):tM(e.serializer,r)}(e,s))}return r}class t9 extends tX{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t5 extends tX{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class t8{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof t1?function(e,t,n){let r=e.value.clone(),i=t4(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof t2?function(e,t,n){if(!tW(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=t4(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(t3(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tZ(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tZ(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tD();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=tJ(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(Q.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tV())}isEqual(e){return this.batchId===e.batchId&&z(this.mutations,e.mutations,(e,t)=>t0(e,t))&&z(this.baseMutations,e.baseMutations,(e,t)=>t0(e,t))}}class t7{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){A(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let r=tx,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new t7(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ne{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nt{constructor(e,t){this.count=e,this.unchangedNames=t}}function nn(e){if(void 0===e)return _("GRPC error has no .code"),N.UNKNOWN;switch(e){case r.OK:return N.OK;case r.CANCELLED:return N.CANCELLED;case r.UNKNOWN:return N.UNKNOWN;case r.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case r.INTERNAL:return N.INTERNAL;case r.UNAVAILABLE:return N.UNAVAILABLE;case r.UNAUTHENTICATED:return N.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case r.NOT_FOUND:return N.NOT_FOUND;case r.ALREADY_EXISTS:return N.ALREADY_EXISTS;case r.PERMISSION_DENIED:return N.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case r.ABORTED:return N.ABORTED;case r.OUT_OF_RANGE:return N.OUT_OF_RANGE;case r.UNIMPLEMENTED:return N.UNIMPLEMENTED;case r.DATA_LOSS:return N.DATA_LOSS;default:return C(39323,{code:e})}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
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
 */let nr=new c.z8([4294967295,4294967295],0);function ni(e){let t=P().encode(e),n=new c.V8;return n.update(t),new Uint8Array(n.digest())}function ns(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c.z8([n,r],0),new c.z8([i,s],0)]}class na{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new no(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new no(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new no(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=c.z8.fromNumber(this.pe)}we(e,t,n){let r=e.add(t.multiply(c.z8.fromNumber(n)));return 1===r.compare(nr)&&(r=new c.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.pe)return!1;let[t,n]=ns(ni(e));for(let e=0;e<this.hashCount;e++){let r=this.we(t,n,e);if(!this.be(r))return!1}return!0}static create(e,t,n){let r=new na(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.pe)return;let[t,n]=ns(ni(e));for(let e=0;e<this.hashCount;e++){let r=this.we(t,n,e);this.Se(r)}}Se(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class no extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nl{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nl(Q.min(),r,new eu(q),tA,tV())}}class nu{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nu(n,t,tV(),tV(),tV())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nh{constructor(e,t,n,r){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=r}}class nc{constructor(e,t){this.targetId=e,this.Ce=t}}class nd{constructor(e,t,n=ep.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nf{constructor(){this.Fe=0,this.Me=np(),this.xe=ep.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return 0!==this.Fe}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=tV(),t=tV(),n=tV();return this.Me.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:C(38017,{changeType:i})}}),new nu(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=np()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,A(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class nm{constructor(e){this.ze=e,this.je=new Map,this.He=tA,this.Je=ng(),this.Ye=ng(),this.Ze=new eu(q)}Xe(e){for(let t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(let t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{let n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:C(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((e,n)=>{this.it(n)&&t(n)})}ot(e){let t=e.targetId,n=e.Ce.count,r=this._t(t);if(r){let i=r.target;if(tc(i)){if(0===n){let e=new X(i.path);this.tt(t,e,eZ.newNoDocument(e,Q.min()))}else A(1===n,20013,{expectedCount:n})}else{let r=this.ut(t);if(r!==n){let n=this.ct(e),i=n?this.lt(n,e,r):1;0!==i&&(this.st(t),this.Ze=this.Ze.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}ct(e){let t,n;let r=e.Ce.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=eE(i).toUint8Array()}catch(e){if(e instanceof eg)return T("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new na(t,s,a)}catch(e){return T(e instanceof no?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.pe?null:n}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){let n=this.ze.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.ze.Pt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.tt(t,n,null),r++)}),r}It(e){let t=new Map;this.je.forEach((n,r)=>{let i=this._t(r);if(i){if(n.current&&tc(i.target)){let t=new X(i.target.path);this.Et(t).has(r)||this.dt(r,t)||this.tt(r,t,eZ.newNoDocument(t,e))}n.Le&&(t.set(r,n.qe()),n.Qe())}});let n=tV();this.Ye.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this._t(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.He.forEach((t,n)=>n.setReadTime(e));let r=new nl(e,t,this.Ze,this.He,n);return this.He=tA,this.Je=ng(),this.Ye=ng(),this.Ze=new eu(q),r}et(e,t){if(!this.it(e))return;let n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;let r=this.rt(e);this.dt(e,t)?r.$e(t,1):r.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){let t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new nf,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ed(q),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ed(q),this.Je=this.Je.insert(e,t)),t}it(e){let t=null!==this._t(e);return t||E("WatchChangeAggregator","Detected inactive target",e),t}_t(e){let t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new nf),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ng(){return new eu(X.comparator)}function np(){return new eu(X.comparator)}let ny={asc:"ASCENDING",desc:"DESCENDING"},nv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nw={and:"AND",or:"OR"};class nE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function n_(e,t){return e.useProto3Json||null==t?t:{value:t}}function nT(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nI(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nC(e){return A(!!e,49232),Q.fromTimestamp(function(e){let t=ev(e);return new K(t.seconds,t.nanos)}(e))}function nS(e,t){return nA(e,t).canonicalString()}function nA(e,t){let n=new H(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nN(e){let t=H.fromString(e);return A(nO(t),10190,{key:t.toString()}),t}function nb(e,t){return nS(e.databaseId,t.path)}function nk(e,t){let n=nN(t);if(n.get(1)!==e.databaseId.projectId)throw new b(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new X(nR(n))}function nD(e,t){return nS(e.databaseId,t)}function nx(e){return new H(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nR(e){return A(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function nV(e,t,n){return{name:nb(e,t),fields:n.value.mapValue.fields}}function nL(e){return{fieldPath:e.canonicalString()}}function nM(e){return W.fromServerFormat(e.fieldPath)}function nO(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nF{constructor(e,t,n,r,i=Q.min(),s=Q.min(),a=ep.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new nF(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nF(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nF(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nF(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nP{constructor(e){this.wt=e}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */class nU{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(ew(e.integerValue));else if("doubleValue"in e){let n=ew(e.doubleValue);isNaN(n)?this.Mt(t,13):(this.Mt(t,15),es(n)?t.xt(0):t.xt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Mt(t,20),"string"==typeof n&&(n=ev(n)),t.Ot(`${n.seconds||""}`),t.xt(n.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(eE(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Mt(t,45),t.xt(n.latitude||0),t.xt(n.longitude||0)}else"mapValue"in e?eX(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):eY(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):C(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){let n=e.fields||{};for(let e of(this.Mt(t,55),Object.keys(n)))this.Nt(e,t),this.Ct(n[e],t)}qt(e,t){var n,r;let i=e.fields||{};this.Mt(t,53);let s=(null===(r=null===(n=i[eM].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Mt(t,15),t.xt(ew(s)),this.Nt(eM,t),this.Ct(i[eM],t)}$t(e,t){let n=e.values||[];for(let e of(this.Mt(t,50),n))this.Ct(e,t)}kt(e,t){this.Mt(t,37),X.fromName(e).path.forEach(e=>{this.Mt(t,60),this.Kt(e,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}nU.Wt=new nU;/**
 * @license
 * Copyright 2019 Google LLC
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
 */class nq{constructor(){this.Cn=new nB}addToCollectionParentIndex(e,t){return this.Cn.add(t),en.resolve()}getCollectionParents(e,t){return en.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return en.resolve()}deleteFieldIndex(e,t){return en.resolve()}deleteAllFieldIndexes(e){return en.resolve()}createTargetIndexes(e,t){return en.resolve()}getDocumentsMatchingTarget(e,t){return en.resolve(null)}getIndexType(e,t){return en.resolve(0)}getFieldIndexes(e,t){return en.resolve([])}getNextCollectionGroupToUpdate(e){return en.resolve(null)}getMinOffset(e,t){return en.resolve(Z.min())}getMinOffsetFromCollectionGroup(e,t){return en.resolve(Z.min())}updateCollectionGroup(e,t,n){return en.resolve()}updateIndexEntries(e,t){return en.resolve()}}class nB{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ed(H.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ed(H.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */let n$={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nz{static withCacheSize(e){return new nz(e,nz.DEFAULT_COLLECTION_PERCENTILE,nz.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */nz.DEFAULT_COLLECTION_PERCENTILE=10,nz.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nz.DEFAULT=new nz(41943040,nz.DEFAULT_COLLECTION_PERCENTILE,nz.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nz.DISABLED=new nz(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nK{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new nK(0)}static lr(){return new nK(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let nQ="LruGarbageCollector";function nG([e,t],[n,r]){let i=q(e,n);return 0===i?q(t,r):i}class nj{constructor(e){this.Er=e,this.buffer=new ed(nG),this.dr=0}Ar(){return++this.dr}Rr(e){let t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>nG(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nH{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Vr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return null!==this.Vr}mr(e){E(nQ,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){er(e)?E(nQ,"Ignoring IndexedDB error during garbage collection: ",e):await et(e)}await this.mr(3e5)})}}class nY{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return en.resolve(ei.le);let n=new nj(t);return this.gr.forEachTarget(e,e=>n.Rr(e.sequenceNumber)).next(()=>this.gr.yr(e,e=>n.Rr(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.gr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector","Garbage collection skipped; disabled"),en.resolve(n$)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),n$):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let n,r,i,s,a,o,l;let h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(E("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),w()<=u.in.DEBUG&&E("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-h}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-h}ms`),en.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nW{constructor(){this.changes=new tS(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eZ.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?en.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class nX{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nJ{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tZ(n.mutation,e,em.empty(),K.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tV()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tV()){let r=tD();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tb();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tD();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tV()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=tA,s=tD(),a=tD();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof t2)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tZ(a.mutation,t,a.mutation.getFieldMask(),K.now())):s.set(t.key,em.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new nX(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=tD(),r=new eu((e,t)=>e-t),i=tV();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||em.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||tV()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tD();l.forEach(e=>{if(!i.has(e)){let r=tJ(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return en.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return X.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):en.resolve(tD()),a=-1,o=i;return s.next(t=>en.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?en.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tV())).next(e=>({batchId:a,changes:tk(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(e=>{let t=tb();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tb();return this.indexManager.getCollectionParents(e,i).next(a=>en.forEach(a,a=>{let o=new td(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eZ.newInvalidDocument(r)))});let n=tb();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tZ(s.mutation,r,em.empty(),K.now()),tI(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class nZ{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return en.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,{id:t.id,version:t.version,createTime:nC(t.createTime)}),en.resolve()}getNamedQuery(e,t){return en.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=nN(e);return 4===t.length?H.emptyPath():nR(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){A(1===s,65062);let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nM(e.unaryFilter.field);return e6.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nM(e.unaryFilter.field);return e6.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nM(e.unaryFilter.field);return e6.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nM(e.unaryFilter.field);return e6.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return C(61313);default:return C(60726)}}(t):void 0!==t.fieldFilter?e6.create(nM(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return C(58110);default:return C(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e9.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return C(1026)}}(t.compositeFilter.op)):C(30097,{filter:t})}(e);return n instanceof e9&&e8(t=n)&&e5(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new e3(nM(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new e0(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new e0(e.values||[],t)}(i.endAt)),new td(r,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tw(t,t.limit,"L"):t}(t.bundledQuery),readTime:nC(t.readTime)}),en.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class n0{constructor(){this.overlays=new eu(X.comparator),this.Qr=new Map}getOverlay(e,t){return en.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tD();return en.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),en.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Qr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Qr.delete(n)),en.resolve()}getOverlaysForCollection(e,t,n){let r=tD(),i=t.length+1,s=new X(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return en.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new eu((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tD(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tD(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return en.resolve(a)}St(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Qr.get(r.largestBatchId).delete(n.key);this.Qr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ne(t,n));let i=this.Qr.get(t);void 0===i&&(i=tV(),this.Qr.set(t,i)),this.Qr.set(t,i.add(n.key))}}/**
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
 */class n1{constructor(){this.sessionToken=ep.EMPTY_BYTE_STRING}getSessionToken(e){return en.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,en.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class n2{constructor(){this.$r=new ed(n3.Ur),this.Kr=new ed(n3.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){let n=new n3(e,t);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.zr(new n3(e,t))}jr(e,t){e.forEach(e=>this.removeReference(e,t))}Hr(e){let t=new X(new H([])),n=new n3(t,e),r=new n3(t,e+1),i=[];return this.Kr.forEachInRange([n,r],e=>{this.zr(e),i.push(e.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){let t=new X(new H([])),n=new n3(t,e),r=new n3(t,e+1),i=tV();return this.Kr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new n3(e,0),n=this.$r.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class n3{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return X.comparator(e.key,t.key)||q(e.Zr,t.Zr)}static Wr(e,t){return q(e.Zr,t.Zr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class n4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ed(n3.Ur)}checkEmpty(e){return en.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new t8(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Xr=this.Xr.add(new n3(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return en.resolve(s)}lookupMutationBatch(e,t){return en.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ti(t+1),r=n<0?0:n;return en.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return en.resolve(0===this.mutationQueue.length?-1:this.nr-1)}getAllMutationBatches(e){return en.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new n3(t,0),r=new n3(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([n,r],e=>{let t=this.ei(e.Zr);i.push(t)}),en.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ed(q);return t.forEach(e=>{let t=new n3(e,0),r=new n3(e,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([t,r],e=>{n=n.add(e.Zr)})}),en.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;X.isDocumentKey(i)||(i=i.child(""));let s=new n3(new X(i),0),a=new ed(q);return this.Xr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Zr)),!0)},s),en.resolve(this.ni(a))}ni(e){let t=[];return e.forEach(e=>{let n=this.ei(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){A(0===this.ri(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Xr;return en.forEach(t.mutations,r=>{let i=new n3(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Xr=n})}sr(e){}containsKey(e,t){let n=new n3(t,0),r=this.Xr.firstAfterOrEqual(n);return en.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,en.resolve()}ri(e,t){return this.ti(e)}ti(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ei(e){let t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class n6{constructor(e){this.ii=e,this.docs=new eu(X.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ii(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return en.resolve(n?n.document.mutableCopy():eZ.newInvalidDocument(t))}getEntries(e,t){let n=tA;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eZ.newInvalidDocument(e))}),en.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tA,s=t.path,a=new X(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=X.comparator(e.documentKey,t.documentKey))?n:q(e.largestBatchId,t.largestBatchId)}(new Z(a.readTime,a.key,-1),n)||(r.has(a.key)||tI(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return en.resolve(i)}getAllFromCollectionGroup(e,t,n,r){C(9500)}si(e,t){return en.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new n9(this)}getSize(e){return en.resolve(this.size)}}class n9 extends nW{constructor(e){super(),this.Br=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Br.addEntry(e,r)):this.Br.removeEntry(n)}),en.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class n5{constructor(e){this.persistence=e,this.oi=new tS(e=>tu(e),th),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this._i=0,this.ai=new n2,this.targetCount=0,this.ui=nK.cr()}forEachTarget(e,t){return this.oi.forEach((e,n)=>t(n)),en.resolve()}getLastRemoteSnapshotVersion(e){return en.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return en.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),en.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this._i&&(this._i=t),en.resolve()}Tr(e){this.oi.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.ui=new nK(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,en.resolve()}updateTargetData(e,t){return this.Tr(t),en.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,en.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.oi.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.oi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),en.waitFor(i).next(()=>r)}getTargetCount(e){return en.resolve(this.targetCount)}getTargetData(e,t){let n=this.oi.get(t)||null;return en.resolve(n)}addMatchingKeys(e,t,n){return this.ai.Gr(t,n),en.resolve()}removeMatchingKeys(e,t,n){this.ai.jr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),en.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),en.resolve()}getMatchingKeysForTargetId(e,t){let n=this.ai.Yr(t);return en.resolve(n)}containsKey(e,t){return en.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class n8{constructor(e,t){this.ci={},this.overlays={},this.li=new ei(0),this.hi=!1,this.hi=!0,this.Pi=new n1,this.referenceDelegate=e(this),this.Ti=new n5(this),this.indexManager=new nq,this.remoteDocumentCache=new n6(e=>this.referenceDelegate.Ii(e)),this.serializer=new nP(t),this.Ei=new nZ(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ci[e.toKey()];return n||(n=new n4(t,this.referenceDelegate),this.ci[e.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,n){E("MemoryPersistence","Starting transaction:",e);let r=new n7(this.li.next());return this.referenceDelegate.di(),n(r).next(e=>this.referenceDelegate.Ai(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ri(e,t){return en.or(Object.values(this.ci).map(n=>()=>n.containsKey(e,t)))}}class n7 extends ee{constructor(e){super(),this.currentSequenceNumber=e}}class re{constructor(e){this.persistence=e,this.Vi=new n2,this.mi=null}static fi(e){return new re(e)}get gi(){if(this.mi)return this.mi;throw C(60996)}addReference(e,t,n){return this.Vi.addReference(n,t),this.gi.delete(n.toString()),en.resolve()}removeReference(e,t,n){return this.Vi.removeReference(n,t),this.gi.add(n.toString()),en.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),en.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(e=>this.gi.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.gi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return en.forEach(this.gi,n=>{let r=X.fromPath(n);return this.pi(e,r).next(e=>{e||t.removeEntry(r,Q.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(e=>{e?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return en.or([()=>en.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class rt{constructor(e,t){this.persistence=e,this.yi=new tS(e=>(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\x00":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new nY(this,t)}static fi(e,t){return new rt(e,t)}di(){}Ai(e){return en.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){let t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}br(e){let t=0;return this.yr(e,e=>{t++}).next(()=>t)}yr(e,t){return en.forEach(this.yi,(n,r)=>this.Dr(e,n,r).next(e=>e?en.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.si(e,r=>this.Dr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,Q.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),en.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),en.resolve()}removeReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),en.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),en.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(eO(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=eA(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return eE(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,eo(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw C(13486,{value:t})}}(e.data.value)),t}Dr(e,t,n){return en.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.yi.get(t);return en.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rn{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ds=n,this.As=r}static Rs(e,t){let n=tV(),r=tV();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new rn(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class rr{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ri{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=(0,h.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,h.z$)())>0?6:4}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ws(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.bs(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new rr;return this.Ss(e,t,n).next(r=>{if(i.result=r,this.fs)return this.Ds(e,t,n,r.size)})}).next(()=>i.result)}Ds(e,t,n,r){return n.documentReadCount<this.gs?(w()<=u.in.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",tT(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),en.resolve()):(w()<=u.in.DEBUG&&E("QueryEngine","Query:",tT(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ps*r?(w()<=u.in.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",tT(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ty(t))):en.resolve())}ws(e,t){if(tm(t))return en.resolve(null);let n=ty(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=ty(t=tw(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tV(...r);return this.ys.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.vs(t,r);return this.Cs(t,s,i,n.readTime)?this.ws(e,tw(t,null,"F")):this.Fs(e,s,t,n)}))})))}bs(e,t,n,r){return tm(t)||r.isEqual(Q.min())?en.resolve(null):this.ys.getDocuments(e,n).next(i=>{let s=this.vs(t,i);return this.Cs(t,s,n,r)?en.resolve(null):(w()<=u.in.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tT(t)),this.Fs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new Z(Q.fromTimestamp(1e9===r?new K(n+1,0):new K(n,r)),X.empty(),-1)}(r,0)).next(e=>e))})}vs(e,t){let n=new ed(tC(e));return t.forEach((t,r)=>{tI(e,r)&&(n=n.add(r))}),n}Cs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return w()<=u.in.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",tT(t)),this.ys.getDocumentsMatchingQuery(e,t,Z.min(),n)}Fs(e,t,n,r){return this.ys.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let rs="LocalStore";class ra{constructor(e,t,n,r){this.persistence=e,this.Ms=t,this.serializer=r,this.xs=new eu(q),this.Os=new tS(e=>tu(e),th),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(n)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nJ(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}async function ro(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Ls(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=tV();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({ks:e,removedBatchIds:i,addedBatchIds:s}))})})}function rl(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}async function ru(e,t,n){let r=e.xs.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!er(e))throw e;E(rs,`Failed to update sequence numbers for target ${t}: ${e}`)}e.xs=e.xs.remove(t),e.Os.delete(r.target)}function rh(e,t,n){let r=Q.min(),i=tV();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.Os.get(n);return void 0!==r?en.resolve(e.xs.get(r)):e.Ti.getTargetData(t,n)})(e,s,ty(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Ti.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ms.getDocumentsMatchingQuery(s,t,n?r:Q.min(),n?i:tV())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Ns.get(r)||Q.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Ns.set(r,s),{documents:n,$s:i}}))}class rc{constructor(){this.activeTargetIds=tL}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class rd{constructor(){this.xo=new rc,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,n){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new rc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class rf{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */let rm="ConnectivityMonitor";class rg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){for(let e of(E(rm,"Network connectivity changed: AVAILABLE"),this.Qo))e(0)}qo(){for(let e of(E(rm,"Network connectivity changed: UNAVAILABLE"),this.Qo))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let rp=null;function ry(){return null===rp?rp=268435456+Math.round(2147483648*Math.random()):rp++,"0x"+rp.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let rv="RestConnection",rw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rE{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${n}/databases/${r}`,this.Go=this.databaseId.database===ek?`project_id=${n}`:`project_id=${n}&database_id=${r}`}zo(e,t,n,r,i){let s=ry(),a=this.jo(e,t.toUriEncodedString());E(rv,`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(o,r,i);let{host:l}=new URL(a),u=(0,h.Xx)(l);return this.Jo(e,a,o,n,u).then(t=>(E(rv,`Received RPC '${e}' ${s}: `,t),t),t=>{throw T(rv,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Yo(e,t,n,r,i,s){return this.zo(e,t,n,r,i)}Ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+y,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}jo(e,t){let n=rw[e];return`${this.Ko}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class r_{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let rT="WebChannelConnection";class rI extends rE{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){let s=ry();return new Promise((i,a)=>{let o=new d.JJ;o.setWithCredentials(!0),o.listenOnce(d.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.jK.NO_ERROR:let t=o.getResponseJson();E(rT,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case d.jK.TIMEOUT:E(rT,`RPC '${e}' ${s} timed out`),a(new b(N.DEADLINE_EXCEEDED,"Request time out"));break;case d.jK.HTTP_ERROR:let n=o.getStatus();if(E(rT,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(t)>=0?t:N.UNKNOWN}(t.status);a(new b(e,t.message))}else a(new b(N.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new b(N.UNAVAILABLE,"Connection failed."));break;default:C(9055,{h_:e,streamId:s,P_:o.getLastErrorCode(),T_:o.getLastError()})}}finally{E(rT,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(r);E(rT,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}I_(e,t,n){let i=ry(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,d.UE)(),o=(0,d.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");E(rT,`Creating RPC '${e}' stream ${i}: ${h}`,l);let c=a.createWebChannel(h,l);this.E_(c);let f=!1,m=!1,g=new r_({Zo:t=>{m?E(rT,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(E(rT,`Opening RPC '${e}' stream ${i} transport.`),c.open(),f=!0),E(rT,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Xo:()=>c.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,d.ii.EventType.OPEN,()=>{m||(E(rT,`RPC '${e}' stream ${i} transport opened.`),g.__())}),p(c,d.ii.EventType.CLOSE,()=>{m||(m=!0,E(rT,`RPC '${e}' stream ${i} transport closed`),g.u_(),this.d_(c))}),p(c,d.ii.EventType.ERROR,t=>{m||(m=!0,T(rT,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),g.u_(new b(N.UNAVAILABLE,"The operation could not be completed")))}),p(c,d.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];A(!!s,16349);let a=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){E(rT,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nn(t)}(t),s=a.message;void 0===n&&(n=N.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,g.u_(new b(n,s)),c.close()}else E(rT,`RPC '${e}' stream ${i} received:`,s),g.c_(s)}}),p(o,d.ju.STAT_EVENT,t=>{t.stat===d.kN.PROXY?E(rT,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===d.kN.NOPROXY&&E(rT,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.a_()},0),g}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function rC(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function rS(e){return new nE(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rA{constructor(e,t,n=1e3,r=1.5,i=6e4){this.xi=e,this.timerId=t,this.A_=n,this.R_=r,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();let t=Math.floor(this.m_+this.w_()),n=Math.max(0,Date.now()-this.g_),r=Math.max(0,t-n);r>0&&E("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){null!==this.f_&&(this.f_.skipDelay(),this.f_=null)}cancel(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let rN="PersistentStream";class rb{constructor(e,t,n,r,i,s,a,o){this.xi=e,this.S_=n,this.D_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new rA(e,t)}O_(){return 1===this.state||5===this.state||this.N_()}N_(){return 2===this.state||3===this.state}start(){this.M_=0,4!==this.state?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&null===this.C_&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,4!==e?this.x_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(_(t.toString()),_("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===N.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;let e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.v_===t&&this.z_(e,n)},t=>{e(()=>{let e=new b(N.UNKNOWN,"Fetching auth token failed: "+t.message);return this.j_(e)})})}z_(e,t){let n=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(e=>{n(()=>this.j_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.M_?this.J_(e):this.onNext(e))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return E(rN,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(E(rN,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rk extends rb{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:C(39313,{state:r}),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(A(void 0===i||"string"==typeof i,58123),ep.fromBase64String(i||"")):(A(void 0===i||i instanceof f||i instanceof Uint8Array,16193),ep.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new nd(s,a,o,l&&new b(void 0===l.code?N.UNKNOWN:nn(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nk(e,r.document.name),s=nC(r.document.updateTime),a=r.document.createTime?nC(r.document.createTime):Q.min(),o=new eJ({mapValue:{fields:r.document.fields}}),l=eZ.newFoundDocument(i,s,a,o);n=new nh(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nk(e,r.document),s=r.readTime?nC(r.readTime):Q.min(),a=eZ.newNoDocument(i,s);n=new nh([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nk(e,r.document);n=new nh([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return C(11601,{Vt:t});{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nt(r,i);n=new nc(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Q.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?Q.min():t.readTime?nC(t.readTime):Q.min()}(e);return this.listener.Y_(t,n)}Z_(e){let t={};t.database=nx(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tc(r)?{documents:{documents:[nD(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=nD(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof e6?function(e){if("=="===e.op){if(ej(e.value))return{unaryFilter:{field:nL(e.field),op:"IS_NAN"}};if(eG(e.value))return{unaryFilter:{field:nL(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ej(e.value))return{unaryFilter:{field:nL(e.field),op:"IS_NOT_NAN"}};if(eG(e.value))return{unaryFilter:{field:nL(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nL(e.field),op:nv[e.op],value:e.value}}}(t):t instanceof e9?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:nw[t.op],filters:n}}}(t):C(54877,{filter:t})}(e9.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:nL(e.field),direction:ny[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=n_(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{gt:s,parent:i}}(e,r).gt}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nI(e,t.resumeToken);let r=n_(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Q.min())>0){n.readTime=nT(e,t.snapshotVersion.toTimestamp());let r=n_(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Q_(t)}X_(e){let t={};t.database=nx(this.serializer),t.removeTarget=e,this.Q_(t)}}class rD extends rb{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return A(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,A(!e.writeResults||0===e.writeResults.length,55816),this.listener.na()}onNext(e){var t,n;A(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(A(void 0!==n,14353),t.map(e=>{let t;return(t=e.updateTime?nC(e.updateTime):nC(n)).isEqual(Q.min())&&(t=nC(n)),new tH(t,e.transformResults||[])})):[]),i=nC(e.commitTime);return this.listener.ra(i,r)}ia(){let e={};e.database=nx(this.serializer),this.Q_(e)}ta(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof t1)r={update:nV(e,t.key,t.value)};else if(t instanceof t9)r={delete:nb(e,t.key)};else if(t instanceof t2)r={update:nV(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof t5))return C(16599,{ft:t.type});r={verify:nb(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tU)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tq)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof t$)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tK)return{fieldPath:t.field.canonicalString(),increment:n.Re};throw C(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nT(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:C(27497)),r})(this.serializer,e))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rx{}class rR extends rx{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.sa=!1}oa(){if(this.sa)throw new b(N.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,n,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.zo(e,nA(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(N.UNKNOWN,e.toString())})}Yo(e,t,n,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Yo(e,nA(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(N.UNKNOWN,e.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class rV{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){0===this._a&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){"Online"===this.state?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,"Online"===e&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(_(t),this.ua=!1):E("OnlineStateTracker",t)}Ta(){null!==this.aa&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let rL="RemoteStore";class rM{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(e=>{n.enqueueAndForget(async()=>{rK(this)&&(E(rL,"Restarting streams for network reachability change."),await async function(e){e.da.add(4),await rF(e),e.Va.set("Unknown"),e.da.delete(4),await rO(e)}(this))})}),this.Va=new rV(n,r)}}async function rO(e){if(rK(e))for(let t of e.Aa)await t(!0)}async function rF(e){for(let t of e.Aa)await t(!1)}function rP(e,t){e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),rz(e)?r$(e):r9(e).N_()&&rq(e,t))}function rU(e,t){let n=r9(e);e.Ea.delete(t),n.N_()&&rB(e,t),0===e.Ea.size&&(n.N_()?n.k_():rK(e)&&e.Va.set("Unknown"))}function rq(e,t){if(e.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Q.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}r9(e).Z_(t)}function rB(e,t){e.ma.Ke(t),r9(e).X_(t)}function r$(e){e.ma=new nm({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>e.Ea.get(t)||null,Pt:()=>e.datastore.serializer.databaseId}),r9(e).start(),e.Va.ca()}function rz(e){return rK(e)&&!r9(e).O_()&&e.Ea.size>0}function rK(e){return 0===e.da.size}async function rQ(e){e.Va.set("Online")}async function rG(e){e.Ea.forEach((t,n)=>{rq(e,t)})}async function rj(e,t){e.ma=void 0,rz(e)?(e.Va.Pa(t),r$(e)):e.Va.set("Unknown")}async function rH(e,t,n){if(e.Va.set("Online"),t instanceof nd&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.Ea.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ea.delete(r),e.ma.removeTarget(r))}(e,t)}catch(n){E(rL,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rY(e,n)}else if(t instanceof nh?e.ma.Xe(t):t instanceof nc?e.ma.ot(t):e.ma.nt(t),!n.isEqual(Q.min()))try{let t=await rl(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.ma.It(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.Ea.get(r);i&&e.Ea.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.Ea.get(t);if(!r)return;e.Ea.set(t,r.withResumeToken(ep.EMPTY_BYTE_STRING,r.snapshotVersion)),rB(e,t);let i=new nF(r.target,t,n,r.sequenceNumber);rq(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){E(rL,"Failed to raise snapshot:",t),await rY(e,t)}}async function rY(e,t,n){if(!er(t))throw t;e.da.add(1),await rF(e),e.Va.set("Offline"),n||(n=()=>rl(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E(rL,"Retrying IndexedDB access"),await n(),e.da.delete(1),await rO(e)})}function rW(e,t){return t().catch(n=>rY(e,n,t))}async function rX(e){let t=r5(e),n=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:-1;for(;rK(e)&&e.Ia.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Ia.length&&t.k_();break}n=r.batchId,function(e,t){e.Ia.push(t);let n=r5(e);n.N_()&&n.ea&&n.ta(t.mutations)}(e,r)}catch(t){await rY(e,t)}rJ(e)&&rZ(e)}function rJ(e){return rK(e)&&!r5(e).O_()&&e.Ia.length>0}function rZ(e){r5(e).start()}async function r0(e){r5(e).ia()}async function r1(e){let t=r5(e);for(let n of e.Ia)t.ta(n.mutations)}async function r2(e,t,n){let r=e.Ia.shift(),i=t7.from(r,t,n);await rW(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await rX(e)}async function r3(e,t){t&&r5(e).ea&&await async function(e,t){var n;if(function(e){switch(e){case N.OK:return C(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return C(15467,{code:e})}}(n=t.code)&&n!==N.ABORTED){let n=e.Ia.shift();r5(e).L_(),await rW(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await rX(e)}}(e,t),rJ(e)&&rZ(e)}async function r4(e,t){e.asyncQueue.verifyOperationInProgress(),E(rL,"RemoteStore received new credentials");let n=rK(e);e.da.add(3),await rF(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await rO(e)}async function r6(e,t){t?(e.da.delete(2),await rO(e)):t||(e.da.add(2),await rF(e),e.Va.set("Unknown"))}function r9(e){var t,n,r;return e.fa||(e.fa=(t=e.datastore,n=e.asyncQueue,r={e_:rQ.bind(null,e),n_:rG.bind(null,e),i_:rj.bind(null,e),Y_:rH.bind(null,e)},t.oa(),new rk(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Aa.push(async t=>{t?(e.fa.L_(),rz(e)?r$(e):e.Va.set("Unknown")):(await e.fa.stop(),e.ma=void 0)})),e.fa}function r5(e){var t,n,r;return e.ga||(e.ga=(t=e.datastore,n=e.asyncQueue,r={e_:()=>Promise.resolve(),n_:r0.bind(null,e),i_:r3.bind(null,e),na:r1.bind(null,e),ra:r2.bind(null,e)},t.oa(),new rD(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Aa.push(async t=>{t?(e.ga.L_(),await rX(e)):(await e.ga.stop(),e.Ia.length>0&&(E(rL,`Stopping write stream with ${e.Ia.length} pending writes`),e.Ia=[]))})),e.ga}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class r8{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new k,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new r8(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function r7(e,t){if(_("AsyncQueue",`${t}: ${e}`),er(e))return new b(N.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ie{static emptySet(e){return new ie(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||X.comparator(t.key,n.key):(e,t)=>X.comparator(e.key,t.key),this.keyedMap=tb(),this.sortedSet=new eu(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new ie;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class it{constructor(){this.pa=new eu(X.comparator)}track(e){let t=e.doc.key,n=this.pa.get(t);n?0!==e.type&&3===n.type?this.pa=this.pa.insert(t,e):3===e.type&&1!==n.type?this.pa=this.pa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.pa=this.pa.remove(t):1===e.type&&2===n.type?this.pa=this.pa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):C(63341,{Vt:e,ya:n}):this.pa=this.pa.insert(t,e)}wa(){let e=[];return this.pa.inorderTraversal((t,n)=>{e.push(n)}),e}}class ir{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new ir(e,t,ie.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tE(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ii{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class is{constructor(){this.queries=ia(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=ia(),n.forEach((e,n)=>{for(let e of n.Sa)e.onError(t)})}(this,new b(N.ABORTED,"Firestore shutting down"))}}function ia(){return new tS(e=>t_(e),tE)}async function io(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.Da()&&t.va()&&(n=2):(i=new ii,n=t.va()?0:1);try{switch(n){case 0:i.ba=await e.onListen(r,!0);break;case 1:i.ba=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=r7(n,`Initialization of query '${tT(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.Sa.push(t),t.Fa(e.onlineState),i.ba&&t.Ma(i.ba)&&ic(e)}async function il(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.Sa.indexOf(t);e>=0&&(i.Sa.splice(e,1),0===i.Sa.length?r=t.va()?0:1:!i.Da()&&t.va()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function iu(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.Sa)e.Ma(r)&&(n=!0);i.ba=r}}n&&ic(e)}function ih(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.Sa)e.onError(n);e.queries.delete(t)}function ic(e){e.Ca.forEach(e=>{e.next()})}(a=s||(s={})).xa="default",a.Cache="cache";class id{constructor(e,t,n){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=n||{}}Ma(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new ir(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){return!(e.fromCache&&this.va())||(!this.options.Qa||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}La(e){if(e.docChanges.length>0)return!0;let t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}qa(e){e=ir.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class im{constructor(e){this.key=e}}class ig{constructor(e){this.key=e}}class ip{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=tV(),this.mutatedKeys=tV(),this.Za=tC(e),this.Xa=new ie(this.Za)}get eu(){return this.Ha}tu(e,t){let n=t?t.nu:new it,r=t?t.Xa:this.Xa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tI(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.ru(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Za(h,o)>0||l&&0>this.Za(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Xa:s,nu:n,Cs:a,mutatedKeys:i}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;let s=e.nu.wa();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C(20277,{Vt:e})}};return n(e)-n(t)})(e.type,t.type)||this.Za(e.doc,t.doc)),this.iu(n),r=null!=r&&r;let a=t&&!r?this.su():[],o=0===this.Ya.size&&this.current&&!r?1:0,l=o!==this.Ja;return(this.Ja=o,0!==s.length||l)?{snapshot:new ir(this.query,e.Xa,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ou:a}:{ou:a}}Fa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new it,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=e.current)}su(){if(!this.current)return[];let e=this.Ya;this.Ya=tV(),this.Xa.forEach(e=>{this._u(e.key)&&(this.Ya=this.Ya.add(e.key))});let t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new ig(e))}),this.Ya.forEach(n=>{e.has(n)||t.push(new im(n))}),t}au(e){this.Ha=e.$s,this.Ya=tV();let t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return ir.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,0===this.Ja,this.hasCachedResults)}}let iy="SyncEngine";class iv{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class iw{constructor(e){this.key=e,this.cu=!1}}class iE{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.lu={},this.hu=new tS(e=>t_(e),tE),this.Pu=new Map,this.Tu=new Set,this.Iu=new eu(X.comparator),this.Eu=new Map,this.du=new n2,this.Au={},this.Ru=new Map,this.Vu=nK.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return!0===this.mu}}async function i_(e,t,n=!0){let r;let i=i$(e),s=i.hu.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.uu()):r=await iI(i,t,n,!0),r}async function iT(e,t){let n=i$(e);await iI(n,t,!0,!1)}async function iI(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=ty(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Ti.getTargetData(e,s).next(n=>n?(t=n,en.resolve(t)):i.Ti.allocateTargetId(e).next(n=>(t=new nF(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Ti.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.xs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.xs=i.xs.insert(e.targetId,e),i.Os.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(a=await iC(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&rP(e.remoteStore,o),a}async function iC(e,t,n,r,i){e.fu=(t,n,r)=>(async function(e,t,n,r){let i=t.view.tu(n);i.Cs&&(i=await rh(e.localStore,t.query,!1).then(({documents:e})=>t.view.tu(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return iF(e,t.targetId,o.ou),o.snapshot})(e,t,n,r);let s=await rh(e.localStore,t,!0),a=new ip(t,s.$s),o=a.tu(s.documents),l=nu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);iF(e,n,u.ou);let h=new iv(t,n,a);return e.hu.set(t,h),e.Pu.has(n)?e.Pu.get(n).push(t):e.Pu.set(n,[t]),u.snapshot}async function iS(e,t,n){let r=e.hu.get(t),i=e.Pu.get(r.targetId);if(i.length>1)return e.Pu.set(r.targetId,i.filter(e=>!tE(e,t))),void e.hu.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ru(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&rU(e.remoteStore,r.targetId),iM(e,r.targetId)}).catch(et)):(iM(e,r.targetId),await ru(e.localStore,r.targetId,!0))}async function iA(e,t){let n=e.hu.get(t),r=e.Pu.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),rU(e.remoteStore,n.targetId))}async function iN(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=ix.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iR.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=K.now(),s=t.reduce((e,t)=>e.add(t.key),tV());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tA,l=tV();return e.Bs.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tP(r.transform,e||null);null!=i&&(null===n&&(n=eJ.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new t2(e.key,t,function e(t){let n=[];return eo(t.fields,(t,r)=>{let i=new W([t]);if(eH(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new em(n)}(t.value.mapValue),tY.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tk(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Au[i.currentUser.toKey()])||(e=new eu(q)),e=e.insert(r,n),i.Au[i.currentUser.toKey()]=e,await iU(i,s.changes),await rX(i.remoteStore)}catch(t){let e=r7(t,"Failed to persist write");n.reject(e)}}async function ib(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.Bs.newChangeBuffer({trackRemovals:!0});r=e.xs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.Ti.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Ti.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(ep.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Ti.updateTargetData(i,h))});let h=tA,c=tV();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=tV(),o=tV(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=tA;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(Q.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):E(rs,"Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{qs:t,Qs:o}})).next(e=>{h=e.qs,c=e.Qs})),!n.isEqual(Q.min())){let t=e.Ti.getLastRemoteSnapshotVersion(i).next(t=>e.Ti.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return en.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.xs=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Eu.get(n);r&&(A(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.cu=!0:t.modifiedDocuments.size>0?A(r.cu,14607):t.removedDocuments.size>0&&(A(r.cu,42227),r.cu=!1))}),await iU(e,n,t)}catch(e){await et(e)}}function ik(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.hu.forEach((e,n)=>{let r=n.view.Fa(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Sa)e.Fa(t)&&(n=!0)}),n&&ic(r),i.length&&e.lu.Y_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function iD(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Eu.get(t),i=r&&r.key;if(i){let n=new eu(X.comparator);n=n.insert(i,eZ.newNoDocument(i,Q.min()));let r=tV().add(i),s=new nl(Q.min(),new Map,new eu(q),n,r);await ib(e,s),e.Iu=e.Iu.remove(i),e.Eu.delete(t),iP(e)}else await ru(e.localStore,t,!1).then(()=>iM(e,t,n)).catch(et)}async function ix(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=en.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);A(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tV();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});iL(e,r,null),iV(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await iU(e,i)}catch(e){await et(e)}}async function iR(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(A(null!==t,37113),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});iL(e,t,n),iV(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await iU(e,i)}catch(e){await et(e)}}function iV(e,t){(e.Ru.get(t)||[]).forEach(e=>{e.resolve()}),e.Ru.delete(t)}function iL(e,t,n){let r=e.Au[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Au[e.currentUser.toKey()]=r}}function iM(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Pu.get(t)))e.hu.delete(r),n&&e.lu.gu(r,n);e.Pu.delete(t),e.isPrimaryClient&&e.du.Hr(t).forEach(t=>{e.du.containsKey(t)||iO(e,t)})}function iO(e,t){e.Tu.delete(t.path.canonicalString());let n=e.Iu.get(t);null!==n&&(rU(e.remoteStore,n),e.Iu=e.Iu.remove(t),e.Eu.delete(n),iP(e))}function iF(e,t,n){for(let r of n)r instanceof im?(e.du.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.Iu.get(n)||e.Tu.has(r)||(E(iy,"New document in limbo: "+n),e.Tu.add(r),iP(e))}(e,r)):r instanceof ig?(E(iy,"Document no longer in limbo: "+r.key),e.du.removeReference(r.key,t),e.du.containsKey(r.key)||iO(e,r.key)):C(19791,{pu:r})}function iP(e){for(;e.Tu.size>0&&e.Iu.size<e.maxConcurrentLimboResolutions;){let t=e.Tu.values().next().value;e.Tu.delete(t);let n=new X(H.fromString(t)),r=e.Vu.next();e.Eu.set(r,new iw(n)),e.Iu=e.Iu.insert(n,r),rP(e.remoteStore,new nF(ty(tf(n.path)),r,"TargetPurposeLimboResolution",ei.le))}}async function iU(e,t,n){let r=[],i=[],s=[];e.hu.isEmpty()||(e.hu.forEach((a,o)=>{s.push(e.fu(o,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=rn.Rs(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.lu.Y_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>en.forEach(t,t=>en.forEach(t.ds,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>en.forEach(t.As,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!er(e))throw e;E(rs,"Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.xs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.xs=e.xs.insert(t,i)}}}(e.localStore,i))}async function iq(e,t){if(!e.currentUser.isEqual(t)){E(iy,"User change. New user:",t.toKey());let n=await ro(e.localStore,t);e.currentUser=t,e.Ru.forEach(e=>{e.forEach(e=>{e.reject(new b(N.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ru.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await iU(e,n.ks)}}function iB(e,t){let n=e.Eu.get(t);if(n&&n.cu)return tV().add(n.key);{let n=tV(),r=e.Pu.get(t);if(!r)return n;for(let t of r){let r=e.hu.get(t);n=n.unionWith(r.view.eu)}return n}}function i$(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=ib.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iD.bind(null,e),e.lu.Y_=iu.bind(null,e.eventManager),e.lu.gu=ih.bind(null,e.eventManager),e}class iz{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rS(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){var t;return t=this.persistence,new ra(t,new ri,e.initialUser,this.serializer)}Su(e){return new n8(re.fi,this.serializer)}bu(e){return new rd}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}iz.provider={build:()=>new iz};class iK extends iz{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){return A(this.persistence.referenceDelegate instanceof rt,46915),new nH(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Su(e){let t=void 0!==this.cacheSizeBytes?nz.withCacheSize(this.cacheSizeBytes):nz.DEFAULT;return new n8(e=>rt.fi(e,t),this.serializer)}}class iQ{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ik(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iq.bind(null,this.syncEngine),await r6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new is}createDatastore(e){let t=rS(e.databaseInfo.databaseId),n=new rI(e.databaseInfo);return new rR(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new rM(t,this.datastore,e.asyncQueue,e=>ik(this.syncEngine,e,0),rg.C()?new rg:new rf)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new iE(e,t,n,r,i,s);return a&&(o.mu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){E(rL,"RemoteStore shutting down."),e.da.add(5),await rF(e),e.Ra.shutdown(),e.Va.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}iQ.provider={build:()=>new iQ};/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class iG{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):_("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let ij="FirestoreClient";class iH{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=p.UNAUTHENTICATED,this.clientId=U.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{E(ij,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(E(ij,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new k;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=r7(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function iY(e,t){e.asyncQueue.verifyOperationInProgress(),E(ij,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await ro(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function iW(e,t){e.asyncQueue.verifyOperationInProgress();let n=await iX(e);E(ij,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>r4(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>r4(t.remoteStore,n)),e._onlineComponents=t}async function iX(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){E(ij,"Using user provided OfflineComponentProvider");try{await iY(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;T("Error using user provided cache. Falling back to memory cache: "+t),await iY(e,new iz)}}else E(ij,"Using default OfflineComponentProvider"),await iY(e,new iK(void 0))}return e._offlineComponents}async function iJ(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E(ij,"Using user provided OnlineComponentProvider"),await iW(e,e._uninitializedComponentsProvider._online)):(E(ij,"Using default OnlineComponentProvider"),await iW(e,new iQ))),e._onlineComponents}async function iZ(e){let t=await iJ(e),n=t.eventManager;return n.onListen=i_.bind(null,t.syncEngine),n.onUnlisten=iS.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=iT.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=iA.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function i0(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let i1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function i2(e,t,n){if(!n)throw new b(N.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function i3(e){if(!X.isDocumentKey(e))throw new b(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function i4(e){if(X.isDocumentKey(e))throw new b(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function i6(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":C(12329,{type:typeof e})}function i9(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=i6(e);throw new b(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let i5="firestore.googleapis.com";class i8{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new b(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=i5,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new b(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new b(N.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=i0(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new b(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new b(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new b(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class i7{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i8({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new b(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i8(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new x;switch(e.type){case"firstParty":return new M(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new b(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=i1.get(e);t&&(E("ComponentProvider","Removing Datastore"),i1.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class se{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new se(this.firestore,e,this._query)}}class st{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class sn extends se{constructor(e,t,n){super(e,t,tf(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new X(e))}withConverter(e){return new sn(this.firestore,e,this._path)}}function sr(e,t,...n){if(e=(0,h.m9)(e),i2("collection","path",t),e instanceof i7){let r=H.fromString(t,...n);return i4(r),new sn(e,null,r)}{if(!(e instanceof st||e instanceof sn))throw new b(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(H.fromString(t,...n));return i4(r),new sn(e.firestore,null,r)}}function si(e,t,...n){if(e=(0,h.m9)(e),1==arguments.length&&(t=U.newId()),i2("doc","path",t),e instanceof i7){let r=H.fromString(t,...n);return i3(r),new st(e,null,new X(r))}{if(!(e instanceof st||e instanceof sn))throw new b(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(H.fromString(t,...n));return i3(r),new st(e.firestore,e instanceof sn?e.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let ss="AsyncQueue";class sa{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new rA(this,"async_queue_retry"),this.rc=()=>{let e=rC();e&&E(ss,"Visibility state changed to "+e.visibilityState),this.x_.b_()},this.sc=e;let t=rC();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;let t=rC();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});let t=new k;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(0!==this.Ju.length){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!er(e))throw e;E(ss,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){let t=this.sc.then(()=>(this.ec=!0,e().catch(e=>{throw this.Xu=e,this.ec=!1,_("INTERNAL UNHANDLED ERROR: ",so(e)),e}).then(e=>(this.ec=!1,e))));return this.sc=t,t}enqueueAfterDelay(e,t,n){this.oc(),this.nc.indexOf(e)>-1&&(t=0);let r=r8.createAndSchedule(this,e,t,n,e=>this.uc(e));return this.Zu.push(r),r}oc(){this.Xu&&C(47125,{cc:so(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(let t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{for(let t of(this.Zu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Zu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){let t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function so(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function sl(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class su extends i7{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sa,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new sa(e),this._firestoreClient=void 0,await e}}}function sh(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||ek});if(!r._initialized){let e=(0,h.P0)("firestore");e&&function(e,t,n,r={}){var i;e=i9(e,i7);let s=(0,h.Xx)(t),a=e._getSettings(),o=Object.assign(Object.assign({},a),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;s&&((0,h.Uo)(`https://${l}`),(0,h.dp)("Firestore",!0)),a.host!==i5&&a.host!==l&&T("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!(0,h.vZ)(u,o)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=p.MOCK_USER;else{t=(0,h.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new b(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new p(s)}e._authCredentials=new R(new D(t,n))}}(r,...e)}return r}function sc(e){if(e._terminated)throw new b(N.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new eb(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,i0(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator));e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new iH(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class sd{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sd(ep.fromBase64String(e))}catch(e){throw new b(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new sd(ep.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class sf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new b(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class sm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new b(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new b(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
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
 */class sp{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let sy=/^__.*__$/;class sv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new t2(e,this.data,this.fieldMask,t,this.fieldTransforms):new t1(e,this.data,t,this.fieldTransforms)}}function sw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C(40011,{Ic:e})}}class sE{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new sE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.dc({path:n,Rc:!1});return r.Vc(e),r}mc(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.dc({path:n,Rc:!1});return r.Ec(),r}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return sx(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(0===e.length)throw this.gc("Document fields must not be empty");if(sw(this.Ic)&&sy.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class s_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||rS(e)}bc(e,t,n,r=!1){return new sE({Ic:e,methodName:t,wc:n,path:W.emptyPath(),Rc:!1,yc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sT(e){let t=e._freezeSettings(),n=rS(e._databaseId);return new s_(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sI(e,t,n,r,i,s={}){let a,o;let l=e.bc(s.merge||s.mergeFields?2:0,t,n,i);sb("Data must be an object, but it was:",l,r);let u=sA(r,l);if(s.merge)a=new em(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=function(e,t,n){if((t=(0,h.m9)(t))instanceof sf)return t._internalPath;if("string"==typeof t)return sD(e,t);throw sx("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,r,n);if(!l.contains(i))throw new b(N.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}a=new em(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new sv(new eJ(u),a,o)}class sC extends sm{_toFieldTransform(e){return new tj(e.path,new tU)}isEqual(e){return e instanceof sC}}function sS(e,t){if(sN(e=(0,h.m9)(e)))return sb("Unsupported field value:",t,e),sA(e,t);if(e instanceof sm)return function(e,t){if(!sw(t.Ic))throw t.gc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gc(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Rc&&4!==t.Ic)throw t.gc("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=sS(i,t.fc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i;if(null===(e=(0,h.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!es(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tO(r):tM(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=K.fromDate(e);return{timestampValue:nT(t.serializer,n)}}if(e instanceof K){let n=new K(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nT(t.serializer,n)}}if(e instanceof sg)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof sd)return{bytesValue:nI(t.serializer,e._byteString)};if(e instanceof st){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.gc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:nS(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof sp)return{mapValue:{fields:{[ex]:{stringValue:eL},[eM]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.gc("VectorValues must only contain numeric values.");return tM(t.serializer,e)})}}}}};throw t.gc(`Unsupported field value: ${i6(e)}`)}(e,t)}function sA(e,t){let n={};return el(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):eo(e,(e,r)=>{let i=sS(r,t.Ac(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function sN(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof K||e instanceof sg||e instanceof sd||e instanceof st||e instanceof sm||e instanceof sp)}function sb(e,t,n){if(!sN(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=i6(n);throw"an object"===r?t.gc(e+" a custom object"):t.gc(e+" "+r)}}let sk=RegExp("[~\\*/\\[\\]]");function sD(e,t,n){if(t.search(sk)>=0)throw sx(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sf(...t.split("."))._internalPath}catch(r){throw sx(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sx(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new b(N.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class sR{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(sL("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sV extends sR{data(){return super.data()}}function sL(e,t){return"string"==typeof t?sD(e,t):t instanceof sf?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sM(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new b(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sO{}class sF extends sO{}function sP(e,t,...n){let r=[];for(let i of(t instanceof sO&&r.push(t),function(e){let t=e.filter(e=>e instanceof sq).length,n=e.filter(e=>e instanceof sU).length;if(t>1||t>0&&n>0)throw new b(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class sU extends sF{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new sU(e,t,n)}_apply(e){let t=this._parse(e);return sQ(e._query,t),new se(e.firestore,e.converter,tv(e._query,t))}_parse(e){let t=sT(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new b(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){sK(a,s);let t=[];for(let n of a)t.push(sz(r,e,n));o={arrayValue:{values:t}}}else o=sz(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||sK(a,s),o=function(e,t,n,r=!1){return sS(n,e.bc(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return e6.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class sq extends sO{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sq(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:e9.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())sQ(n,e),n=tv(n,e)}(e._query,t),new se(e.firestore,e.converter,tv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class sB extends sF{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sB(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new b(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new b(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new e3(t,n)}(e._query,this._field,this._direction);return new se(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new td(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function s$(e,t="asc"){let n=sL("orderBy",e);return sB._create(n,t)}function sz(e,t,n){if("string"==typeof(n=(0,h.m9)(n))){if(""===n)throw new b(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tg(t)&&-1!==n.indexOf("/"))throw new b(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(H.fromString(n));if(!X.isDocumentKey(r))throw new b(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ez(e,new X(r))}if(n instanceof st)return ez(e,n._key);throw new b(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${i6(n)}.`)}function sK(e,t){if(!Array.isArray(e)||0===e.length)throw new b(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function sQ(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new b(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class sG{convertValue(e,t="none"){switch(eO(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ew(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eE(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw C(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return eo(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new sp(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[eM].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>ew(e.doubleValue)))}convertGeoPoint(e){return new sg(ew(e.latitude),ew(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eA(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eN(e));default:return null}}convertTimestamp(e){let t=ev(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=H.fromString(e);A(nO(n),9688,{name:e});let r=new eD(n.get(1),n.get(3)),i=new X(n.popFirst(5));return r.isEqual(t)||_(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sj(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class sH{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sY extends sR{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new sW(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(sL("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class sW extends sY{data(e={}){return super.data(e)}}class sX{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new sH(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new sW(this._firestore,this._userDataWriter,n.key,n,new sH(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new b(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new sW(e._firestore,e._userDataWriter,n.doc.key,n.doc,new sH(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new sW(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sH(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C(61501,{type:e})}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sJ(e){e=i9(e,st);let t=i9(e.firestore,su);return(function(e,t,n={}){let r=new k;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new iG({next:o=>{s.xu(),t.enqueueAndForget(()=>il(e,a));let l=o.docs.has(n);!l&&o.fromCache?i.reject(new b(N.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&r&&"server"===r.source?i.reject(new b(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new id(tf(n.path),s,{includeMetadataChanges:!0,Qa:!0});return io(e,a)})(await iZ(e),e.asyncQueue,t,n,r)),r.promise})(sc(t),e._key).then(n=>s6(t,e,n))}class sZ extends sG{constructor(e){super(),this.firestore=e}convertBytes(e){return new sd(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function s0(e){e=i9(e,se);let t=i9(e.firestore,su),n=sc(t),r=new sZ(t);return sM(e._query),(function(e,t,n={}){let r=new k;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new iG({next:n=>{s.xu(),t.enqueueAndForget(()=>il(e,a)),n.fromCache&&"server"===r.source?i.reject(new b(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new id(n,s,{includeMetadataChanges:!0,Qa:!0});return io(e,a)})(await iZ(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new sX(t,r,e,n))}function s1(e,t,n){e=i9(e,st);let r=i9(e.firestore,su),i=sj(e.converter,t,n);return s4(r,[sI(sT(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,tY.none())])}function s2(e,t){let n=i9(e.firestore,su),r=si(e),i=sj(e.converter,t);return s4(n,[sI(sT(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,tY.exists(!1))]).then(()=>r)}function s3(e,...t){var n,r,i;let s,a,o;e=(0,h.m9)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||sl(t[u])||(l=t[u],u++);let c={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(sl(t[u])){let e=t[u];t[u]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[u+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof st)a=i9(e.firestore,su),o=tf(e._key.path),s={next:n=>{t[u]&&t[u](s6(a,e,n))},error:t[u+1],complete:t[u+2]};else{let n=i9(e,se);a=i9(n.firestore,su),o=n._query;let r=new sZ(a);s={next:e=>{t[u]&&t[u](new sX(a,r,n,e))},error:t[u+1],complete:t[u+2]},sM(e._query)}return function(e,t,n,r){let i=new iG(r),s=new id(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>io(await iZ(e),s)),()=>{i.xu(),e.asyncQueue.enqueueAndForget(async()=>il(await iZ(e),s))}}(sc(a),o,c,s)}function s4(e,t){return function(e,t){let n=new k;return e.asyncQueue.enqueueAndForget(async()=>iN(await iJ(e).then(e=>e.syncEngine),t,n)),n.promise}(sc(e),t)}function s6(e,t,n){let r=n.docs.get(t._key),i=new sZ(e);return new sY(e,i,t._key,r,new sH(n.hasPendingWrites,n.fromCache),t.converter)}function s9(){return new sC("serverTimestamp")}new WeakMap,function(e=!0){y=o.Jn,(0,o.Xd)(new l.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new su(new V(t.getProvider("auth-internal")),new F(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new b(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eD(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(m,g,void 0),(0,o.KN)(m,g,"esm2017")}()}}]);