import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from "./data.json"
import TestComponent from './TestComponent';

// JSONの型推論
type USERS = typeof Data;

const name = "hello";

let username = "Hello";
let dummyNum = 2;
let bool = true;

let array1 =  [true, false, true];
let array2 = [0, 1, "hello"];

// オブジェクト
interface NAME {
  first: string;
  last ?: string | null;
}

let nameObj: NAME = { first: "Yamada", last: "Taro" };
let nameObj2: NAME = { first: "Tanaka" };
let nameObj3: NAME = { first: "Sato", last: null };

// 関数（戻り値の型を明示的にする場合）
const func1 = (x: number, y: number): number => {
  return x + y;
}
const func2 = (x: number, y: number) => {
  return x + y;
}

type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

// Intersection Types （複数のtypeを結合する）
type USER = PROFILE & LOGIN;

const  userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy"
}

// Union Types　変数が受け取れるデータ型を制限
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string )[];
arrayUni = [0, 1, 2, "hello"];

// Literal Types　代入できる文字を制限
let company: "Facebook" | "Google" | "Amazon"
company = "Amazon"

let memory : 256 | 512;
memory = 256;


// typeof　宣言済み変数の型を取得（複雑なJSONの構造によく使われる）
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";


const SPORTS = {
  soccer: "Soccer",
  baseball: "Bassball"
};

// typeof + keyof
let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum　自動で連番をつけてくれる
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number,
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};


// 型の互換性
const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
// let comp4: "test" = comp3;

// 関数の型の互換性
let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {;}
// funcComp1 = funcComp2;


// Generics　型を動的に変えることができる
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
const gen1: GEN<number> = { item: 12 };

// デフォルトの型を指定
interface GEN1<T = string> {
  item: T;
}
const gen2: GEN1 = { item: "hello" };

// 型を指定
interface GEN2<T extends string | number> {
  item: T;
}
const gen3: GEN2<string> = { item: "hello" };
const gen4: GEN2<number> = { item: 12 };

function funcGen<T>(props: T) {
  return {item: props};
}
const gen5 = funcGen("test");
const gen6 = funcGen<string | null> (null);

// 関数の引数の型を指定
function funcGen1<T extends string | null>(props: T){
  return {value: props};
}
const gen7 = funcGen1("hello");

// TypeScriptではpropsに型を必ず指定する必要がある
interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T){
  return {value: props.price}
}
const gen10 =  funcGen3({ price: 10 });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price }
};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header"></header>
//     </div>
//   );
// }

// functionalコンポーネントの型
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App"/>
      </header>
    </div>
  );
}


export default App;
