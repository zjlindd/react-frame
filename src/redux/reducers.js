import { combineReducers } from "redux"
import * as ActionTypes from "./actionTypes"
import localStorage from "../util/storage"

/**
 * reducer就是一个纯函数，接收旧的state和action，返回新的state
 */

// 需要存储的初始状态数据
const initialState = {
  headerName: "hahahaha",
};

// 拆分Reducer

// 设置皮肤
function headerName(headerName = initialState.headerName, action) {
  switch (action.type) {
    case ActionTypes.SET_HEADER:
      return action.headerName;
    default:
      return headerName;
  }
}
// 合并Reducer
const reducer = combineReducers({
  headerName
});

export default reducer
