import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import ClassComp from "./components/ClassComp";
import Message from "./components/Message";
import Count from "./components/Count";
import EventClick from "./components/EventClick";
import FunctionClick from "./components/FnctionClick";
import ParentCmoponenet from "./components/ParentCmoponenet";
import ExportFun from "./components/ExportFun";
import ConditinalRendring from "./components/ConditinalRendring";
import ArrayList from "./components/ArrayList";
import style from "./components/ArrayStyleModule.module.css";
import UserForm from "./components/UserForm";
import ToggleState from "./components/ToggleState";
import MountingA from "./components/08-06-2022/MountingA";
import ParentCall from "./components/08-06-2022/ParentCall";
import DemoRef from "./components/08-06-2022/DemoRef";
import Portals from "./components/08-06-2022/Portals";
import Parent from "./components/08-06-2022/ParentToChild/Parent";
import Hero from "./components/08-06-2022/ErrorBoundary/Hero";
import ErrorBoundary from "./components/08-06-2022/ErrorBoundary/ErrorBoundary";
import RandomUser from "./components/09/06/2022/RandomApiFatch/RandomUser";
import ClickFun from "./components/09/06/2022/RandomApiFatch/HigherOrderComp/ClickFun";
import HoverFun from "./components/09/06/2022/RandomApiFatch/HigherOrderComp/HoverFun";
import CommonRender from "./components/09/06/2022/RandomApiFatch/RenderProps/CommonRender";
import ClickFunRender from "./components/09/06/2022/RandomApiFatch/RenderProps/ClickFunRender";
import HoverFunRender from "./components/09/06/2022/RandomApiFatch/RenderProps/HoverFunRender";
import A from "./components/09/06/2022/RandomApiFatch/ContextApi/A";
import CompA from "./components/10-06-2022/ContextAndUseContext/CompA";
import UseStateHook from "./components/10-06-2022/UseState/UseStateHook";
import UseEffectHook1 from "./components/11-06-2022/UseEffect/UseEffectHook1";
import UseEffectHook2 from "./components/11-06-2022/UseEffect/UseEffectHook2";
import UseReducer from "./components/13-06-2022/UseReducerHook/UseReducer";
import UseMemo from "./components/13-06-2022/UseMemoHOOK/UseMemo";
import UseCallbackHooksExamp from "./components/13-06-2022/UseCallbackHooks/UseCallbackHooksExamp";
import UseRefExample from "./components/13-06-2022/UseCallbackHooks/UseRefExample";
import CustomHook from "./components/13-06-2022/UseCallbackHooks/CustomHook";
function App() {
  return (
    <div className="App">
      <h1 className={style.success}>React Js</h1>
      {/* <UseRefExample/> */}
        <CustomHook/>
      {/* <UseCallbackHooksExamp/> */}
      {/* <UseMemo/> */}
      {/* <UseReducer/> */}
      {/* <UseEffectHook2/> */}
      {/* <UseEffectHook1/> */}
      {/* <UseStateHook/> */}
      {/* <CompA/> */}
      {/* <A/> */}
      {/* <CommonRender>
        {(count, incrementCount) => (
          <ClickFunRender
            name="Kishan"
            count={count}
            incrementCount={incrementCount}
          />
        )}
      </CommonRender>
      <CommonRender>
        {(count, incrementCount) => (
          <HoverFunRender count={count} incrementCount={incrementCount} />
        )}
      </CommonRender> */}
      {/* <HoverFunRender/> */}

      {/* <HoverFun name="Kishan"/>
      <ClickFun/> */}
      {/* <RandomUser/> */}
      {/* <Hero/> */}

      {/* <ErrorBoundary>
      <Hero heroName={'IronMan'}/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName={'Joker'}/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName={'SpiderMan'}/>
      </ErrorBoundary> */}
      {/* <Parent/> */}
      {/* <Portals/> */}
      {/* <ParentCall/> */}
      {/* <DemoRef/> */}
      {/* <MountingA/> */}
      {/* <ToggleState/> */}
      {/* <UserForm/> */}
      {/* <ArrayList/> */}
      {/* <ConditinalRendring/> */}
      {/* <ParentCmoponenet/> */}
      {/* <FunctionClick/> */}
      {/* <Count/> */}
      {/* <EventClick/> */}
      {/* <Message/> */}
      {/* <ClassComp name="UniBranis"/>
        <Welcome name="Mohan" surName="Gupta">
          How Are You
        </Welcome>
        <Welcome name="Sohan" surName="Patel">
          <button>Start</button>
        </Welcome>
        <Welcome name="Rohan" surName="Thakur"/>
        <Hello/> */}
    </div>
  );
}

export default App;
