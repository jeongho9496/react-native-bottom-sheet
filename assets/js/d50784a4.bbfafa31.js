"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8793],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4022:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],s={id:"bottomsheetsectionlist",title:"BottomSheetSectionList",description:"a pre-integrated React Native SectionList with BottomSheet gestures.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetsectionlist"},l=void 0,c={unversionedId:"components/bottomsheetsectionlist",id:"components/bottomsheetsectionlist",isDocsHomePage:!1,title:"BottomSheetSectionList",description:"a pre-integrated React Native SectionList with BottomSheet gestures.",source:"@site/docs/components/bottomsheetsectionlist.md",sourceDirName:"components",slug:"/components/bottomsheetsectionlist",permalink:"/react-native-bottom-sheet/components/bottomsheetsectionlist",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/components/bottomsheetsectionlist.md",tags:[],version:"current",frontMatter:{id:"bottomsheetsectionlist",title:"BottomSheetSectionList",description:"a pre-integrated React Native SectionList with BottomSheet gestures.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetsectionlist"},sidebar:"packages",previous:{title:"BottomSheetFlatList",permalink:"/react-native-bottom-sheet/components/bottomsheetflatlist"},next:{title:"BottomSheetVirtualizedList",permalink:"/react-native-bottom-sheet/components/bottomsheetvirtualizedlist"}},p=[{value:"Props",id:"props",children:[{value:"<code>focusHook</code>",id:"focushook",children:[],level:3}],level:2},{value:"Ignored Props",id:"ignored-props",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A pre-integrated ",(0,i.kt)("inlineCode",{parentName:"p"},"React Native")," SectionList with ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomSheet")," gestures."),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("p",null,"Inherits ",(0,i.kt)("inlineCode",{parentName:"p"},"SectionListProps")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native"),"."),(0,i.kt)("h3",{id:"focushook"},(0,i.kt)("inlineCode",{parentName:"h3"},"focusHook")),(0,i.kt)("p",null,"This needed when bottom sheet used with multiple scrollables to allow bottom sheet detect the current scrollable ref, especially when used with React Navigation. You will need to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@react-navigation/native"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"default"),(0,i.kt)("th",{parentName:"tr",align:null},"required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"function"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"React.useEffect")),(0,i.kt)("td",{parentName:"tr",align:null},"NO")))),(0,i.kt)("h2",{id:"ignored-props"},"Ignored Props"),(0,i.kt)("p",null,"These props will be ignored if they were passed, because of the internal integration that uses them."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scrollEventThrottle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decelerationRate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onScrollBeginDrag"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useCallback, useRef, useMemo } from "react";\nimport { StyleSheet, View, Text, Button } from "react-native";\nimport BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";\n\nconst App = () => {\n  // hooks\n  const sheetRef = useRef<BottomSheet>(null);\n\n  // variables\n  const sections = useMemo(\n    () =>\n      Array(10)\n        .fill(0)\n        .map((_, index) => ({\n          title: `Section ${index}`,\n          data: Array(10)\n            .fill(0)\n            .map((_, index) => `Item ${index}`),\n        })),\n    []\n  );\n  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);\n\n  // callbacks\n  const handleSheetChange = useCallback((index) => {\n    console.log("handleSheetChange", index);\n  }, []);\n  const handleSnapPress = useCallback((index) => {\n    sheetRef.current?.snapToIndex(index);\n  }, []);\n  const handleClosePress = useCallback(() => {\n    sheetRef.current?.close();\n  }, []);\n\n  // render\n  const renderSectionHeader = useCallback(\n    ({ section }) => (\n      <View style={styles.sectionHeaderContainer}>\n        <Text>{section.title}</Text>\n      </View>\n    ),\n    []\n  );\n  const renderItem = useCallback(\n    ({ item }) => (\n      <View style={styles.itemContainer}>\n        <Text>{item}</Text>\n      </View>\n    ),\n    []\n  );\n  return (\n    <View style={styles.container}>\n      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />\n      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />\n      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />\n      <Button title="Close" onPress={() => handleClosePress()} />\n      <BottomSheet\n        ref={sheetRef}\n        index={1}\n        snapPoints={snapPoints}\n        onChange={handleSheetChange}\n      >\n        <BottomSheetSectionList\n          sections={sections}\n          keyExtractor={(i) => i}\n          renderSectionHeader={renderSectionHeader}\n          renderItem={renderItem}\n          contentContainerStyle={styles.contentContainer}\n        />\n      </BottomSheet>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    paddingTop: 200,\n  },\n  contentContainer: {\n    backgroundColor: "white",\n  },\n  sectionHeaderContainer: {\n    backgroundColor: "white",\n    padding: 6,\n  },\n  itemContainer: {\n    padding: 6,\n    margin: 6,\n    backgroundColor: "#eee",\n  },\n});\n\nexport default App;\n')))}u.isMDXComponent=!0}}]);