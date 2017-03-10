import React from 'react'
import { Route, IndexRoute, Router } from 'dva/router'
import CoreLayout from '../containers/layout'
import Hotgoods from 'views/Hotgoods/page'
import MyCustom from 'views/MyCustom/page'
import GatherGoods from 'views/GatherGoods/page'

export default function (ref) {
  return (
    <Router history={ref.history}>
      <Route path='/' component={CoreLayout} name="有好货">
        <IndexRoute component={GatherGoods} name="有好货"/>
        <Route path='/Hotgoods' component={Hotgoods} name="热卖好货" />
        <Route path='/MyCustom' component={MyCustom} name="我的定制" />
        <Route path='/GatherGoods' component={GatherGoods} name="聚好货"/>
      </Route>
    </Router>
  )
}
