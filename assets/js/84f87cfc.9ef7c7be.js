"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9704],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5235:function(e,t,n){n.d(t,{n:function(){return o}});var r=n(7294),o=function(e){var t=e.title,n=e.url;return r.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:t,width:"100%"},r.createElement("source",{src:n,type:"video/mp4"}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,l=void 0!==i&&i,d=a.absolute,p=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+s:s}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},5319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=n(4996),l=n(5235),d=["components"],p={id:"keyboard-handling",title:"Keyboard Handling",description:"Keyboard handling with Bottom Sheet.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/keyboard-handling"},s=void 0,c={unversionedId:"guides/keyboard-handling",id:"guides/keyboard-handling",isDocsHomePage:!1,title:"Keyboard Handling",description:"Keyboard handling with Bottom Sheet.",source:"@site/docs/guides/keyboard-handling.mdx",sourceDirName:"guides",slug:"/keyboard-handling",permalink:"/react-native-bottom-sheet/keyboard-handling",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/guides/keyboard-handling.mdx",tags:[],version:"current",frontMatter:{id:"keyboard-handling",title:"Keyboard Handling",description:"Keyboard handling with Bottom Sheet.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/keyboard-handling"},sidebar:"packages",previous:{title:"Detach Modal",permalink:"/react-native-bottom-sheet/detach-modal"},next:{title:"Pull To Refresh",permalink:"/react-native-bottom-sheet/pull-to-refresh"}},u=[{value:"Example",id:"example",children:[],level:3}],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Keyboard handling is one of the main feature of ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomSheet v4"),", thanks to the effort of the community to spot issues, test and help to debug the implementation on both platform ",(0,a.kt)("inlineCode",{parentName:"p"},"iOS")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Android"),"."),(0,a.kt)("p",null,"To handle the keyboard appearance, I have simplified the approach by creating a pre-integrated ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," called ",(0,a.kt)("a",{parentName:"p",href:"./components/bottomsheettextinput"},"BottomSheetTextInput"),", which communicate internally to react to the keyboard appearance."),(0,a.kt)("p",null,"Also I have introduce two props to allow users to customize the handling, ",(0,a.kt)("a",{parentName:"p",href:"./props#keyboardbehavior"},"keyboardBehavior"),", ",(0,a.kt)("a",{parentName:"p",href:"./props#keyboardblurbehavior"},"keyboardBlurBehavior")," and ",(0,a.kt)("a",{parentName:"p",href:"./props#android_keyboardinputmode"},"android_keyboardInputMode")," that is only for ",(0,a.kt)("inlineCode",{parentName:"p"},"Android"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To use custom ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput"),", you will need to copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleOnFocus")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"handleOnBlur")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gorhom/react-native-bottom-sheet/blob/master/src/components/bottomSheetTextInput/BottomSheetTextInput.tsx"},"BottomSheetTextInput")," into your own component."))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)(l.n,{title:"React Native Bottom Sheet Keyboard Handling",url:(0,i.Z)("video/bottom-sheet-keyboard-handling-preview.mp4"),mdxType:"Video"}),(0,a.kt)("p",null,"Here is an example of a simple keyboard handling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useMemo } from "react";\nimport { View, StyleSheet } from "react-native";\nimport BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";\n\nconst App = () => {\n  // variables\n  const snapPoints = useMemo(() => ["25%"], []);\n\n  // renders\n  return (\n    <View style={styles.container}>\n      <BottomSheet snapPoints={snapPoints}>\n        <View style={styles.contentContainer}>\n          <BottomSheetTextInput value="Awesome \ud83c\udf89" style={styles.textInput} />\n        </View>\n      </BottomSheet>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    backgroundColor: "grey",\n  },\n  textInput: {\n    alignSelf: "stretch",\n    marginHorizontal: 12,\n    marginBottom: 12,\n    padding: 12,\n    borderRadius: 12,\n    backgroundColor: "grey",\n    color: "white",\n    textAlign: "center",\n  },\n  contentContainer: {\n    flex: 1,\n    alignItems: "center",\n  },\n});\n\nexport default App;\n')))}h.isMDXComponent=!0}}]);