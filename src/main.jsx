import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { CallbackHook } from './06-memos/CallbackHook';
import { MemoHook } from './06-memos/MemoHook';
import { Memorize } from './06-memos/Memorize';
import { HooksApp } from './HooksApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CallbackHook />
)
