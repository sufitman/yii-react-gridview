# Yii2 GridView widget for react
This component is created to simplify moving from php rendering of built-in [Yii2 Gridview widget](https://www.yiiframework.com/doc/api/2.0/yii-grid-gridview) to React-based application using some of its familiar settings.

[Simple example](https://codepen.io/sufitman/project/editor/XVamYV)
## Installing
```bash
npm install --save yii-react-gridview
```

## Setting `props`
Instead of using `pager` or `dataProvider` objects as it used in [Yii2 Gridview widget](https://www.yiiframework.com/doc/api/2.0/yii-grid-gridview), some of its properties (or equivalents) should be set as props directly in GridView component. It makes more suitable way for React of re-rendering the component in case if some prop will be changed. See [Available props](#available-props) to find out how to set up your GridView. 

## Example
of component:
```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GridView from 'yii-react-gridview';
import Axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: null,
    };
    Axios.get('/your/get-data').then(response => {
      let dataProvider = response.data;
      this.pageSize = dataProvider.pageSize;
      this.headerCells = dataProvider.headerCells;
      this.maxButtonCount = dataProvider.maxButtonCount;
      this.setState({
        data: dataProvider.data,
        currentPage: dataProvider.currentPage,
        totalCount: dataProvider.totalCount,
      });
    });

    this.columns = {
      username: null,
      email: null,
      city: null,
    }
  }
  
  onPageButtonClicked = (currentPage) =>  {
    Axios.get('/your/get-data').then(response => {
      this.setState({
        currentPage: currentPage,
        //...
      });
    })
  };
  
  onSortChanged = (sort) =>  {
    this.setState({sort: sort});
    Axios.get('/your/get-data', {
      params: {
        // Pass 'sort' as is (js-object) or prepare it to be compatible with Query::orderBy()
        orderBy: sort,
        //...
      }
    }).then(response => {
      this.setState({
        //...
      });
    });
  };
  
  render() {
    return (
      <div className="App">
        <GridView
          data={ this.state.data }
          headerCells={ this.headerCells }
          columns={ this.columns }
          currentPage={ this.state.currentPage }
          totalCount={this.state.totalCount}
          maxButtonCount={ this.maxButtonCount }
          pageSize={this.pageSize }
          onPageButtonClick={ this.onPageButtonClicked }
          onSortChange={ this.onSortChanged }
        />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
```

of action:
```php
class YourController extends Controller {
    public function actionGetData($currentPage = 0, $pageSize = 20, $filters = [], $orderBy = '') {
        \Yii::$app->response->format = Response::FORMAT_JSON;
        
        // Prepare orderBy object here or do it in 'onSortChange' callback
        // Anyway make it compatible with '->orderBy($orderBy)'
        $preparedOrderBy = [];
        if ($orderBy) {
            foreach (Json::decode($orderBy) as $col => $sort) {
                $preparedOrderBy[] = "{$col} {$sort}";
            }
            if (!empty($preparedOrderBy)) {
                $preparedOrderBy = implode(',', $preparedOrderBy);
            }
        }
        // Probably $filters should be also prepared
        // ...
        
        return [
            'data' => ArrayHelper::toArray(User::find()
                ->andFilterWhere($filters)
                ->offset($currentPage * $pageSize)
                ->orderBy($preparedOrderBy)
                ->limit($pageSize)
                ->all(), [
                User::class => [
                    'username',
                    'email',
                    'city',
                ]
            ]),
            'headerCells' => (new User)->attributeLabels(),
            'currentPage' => (int) $currentPage,
            'totalCount' => (int) User::find()->andFilterWhere($filters)->count(),
            'pageSize' => $pageSize,
        ];
    }        
}

``` 
## Available `props`
|Property|Type|Default value|Description|
|:---:|:---:|:---:|:---|
|`data`|Array|undefined|Array of models to show in list|
|`notSetText`|string|'(not set)'|Text will be shown when a cell in a row is not set|
|`headerCells`|Object|{}|Key-value pairs of names of data models properties. It should contain the same keys as keys of an Object in `data`.<br>Values of `headerCells` could be either strings or object of following structure: <br>` { value: 'Column Title', column: 'attrbute_name', enableSorting: true, sort: 'ASC' }`.<br>If `enableSorting` is `true` then `column` required. `sort` (if specified) must be either 'ASC' or 'DESC'|
|`footerCells`|Array|[]|Array of strings or components corresponding cells of `tfoot`-row. Make sure the array length match the table|
|`caption`|String|undefined|A string for caption if necessary|
|`emptyCaption`|String|'Nothing found'|The text will be shown when no data rows are loaded|
|`captionOptions`|Object|{}|HTML attributes of `caption`|
|`containerOptions`|Object|{}|HTML attributes of GridView instance conteiner (div that wraping the table and the pager)|
|`tableOptions`|Object|{}|HTML attributes of table|
|`showHeader`|Boolean|true|Whether show \<thead\> or not|
|`showFooter`|Boolean|false|Whether show \<tfoot\> or not|
|`placeFooterAfterBody`|Boolean|true|Whether place \<tfoot\> after body or not|
|`headerRowOptions`|Object|{}|HTML attributes of *thead > row*|
|`footerRowOptions`|Object|{}|HTML attributes of *tfoot > row*|
|`rowOptions`|Object|{}|HTML attributes of *tbody \> row*|
|`columns`|Object|undefined|Keys of the object are whether properties of a model in data (then the title will be provided by `headerCells`) or custom strings that will be a column titles.<br>Values of the object are either null (to provide a model value as is) or `function (cell, rowId)` (to decorate a model value with its result).<br>Also string `'serial'` can be set to provide models numeration.<br>If `'checkbox'` is set as a key and its value (just value at least) then column of checkboxes will be rendered in order to select row(s) ids (a value that specified in `rowIdColumn`)|
|`filters`|Object|null|Contain *filters* for specified columns. *Filters* can be:<br>a) string `'text'` renders simple input of `type="text"`;<br>b) Object `{ type: ..., options: {...} }` where type can be either `'text'` (input of `type="text"`), `'checkbox'` or `'select'`. Options typically are HTML attributes of the inputs. If type is `'select'` then `options` should contain `data` - object of options (where key is value attribute of an \<option\> and value is its text);<br>c) `function (name, onChange)` to render custom input with name={ `name` } and onChange={ `onChange` } (must return a React.Component/html) |
|`onSortChange`|`function(sort)`|undefined|Callback to sort the data with `sort` - key-value object (```js { column:'ASC' /* or 'DESC' */ }```) to sort the `data`. The way of is up to you|
|`onFilterChange`|`function(filters)`|undefined|Callback to filter the data with `filters` - key-value object to filter the `data`. **Required** when filters are specified. The way of filtering depends on you|
|`pagerOptions`|object|undefined|HTML attributes of pager container|
|`currentPage`|integer|undefined|Number of current page (begins from 0). **Should be provided by `data` provider**|
|`totalCount`|integer|undefined|Total count of models given in `data`. **Should be provided by `data` provider**|
|`maxButtonCount`|integer|10|Max count of pager links|
|`pageSize`|integer|20|Max count of models on a page|
|`pagerTag`|string|`'ul'`|Tag name of pager container|
|`pageTag`|string|`'li'`|Tag name of pager link|
|`activePageCssClass`|string|`'active'`|Class name of active page link|
|`disabledPageCssClass`|string|`'disabled'`|Class name of disabled pager link|
|`nextPageCssClass`|string|`'next'`|Class name of 'next' page link|
|`prevPageCssClass`|string|`'prev'`|Class name of 'previous' page link|
|`firstPageCssClass`|string|`'first'`|Class name of 'first' page link|
|`lastPageCssClass`|string|`'last'`|Class name of 'last' page link|
|`nextPageLabel`|string|`'»'`|Label of 'next' page link|
|`prevPageLabel`|string|`'«'`|Label of 'previous' page link|
|`firstPageLabel`|string|null|Label of 'first' page link|
|`lastPageLabel`|string|null|Label of 'last' page link|
|`onPageButtonClick`|`function(currentPage)`|null|Callback of click on pager link with given page number. Originally it should replace `currentPage` with its page number and reload the `data`, but it's up to you whatever it does.|
|`onSelectionChange`|`function(selectedRowIds)`|null|Callback which will be applied when a row is (or all rows are) selected. Array of selected values specified in `rowIdColumn` will be passed in `selectedRowIds`|
|`rowIdColumn`|string|'id'|Column name that could be used as primary key for selection. If `onSelectionChange` is set, then array of values of selected rowIdColumn will be passed as an argument|
|`selectedRowIds`|array|undefined|Array of currently selected row ids. Use to keep state out of GridView module. The value must be manually updated every time `onSelectionChange` is called and replaced with its `selectedRowIds`. If not defined the value will be stored in GridView's local state.|
|`allRowsChecked`|bool|undefined|The value means that 'select all' checkbox in table header is either checked or not. Use to keep state out of GridView module. The value must be manually updated every time `onSelectionChange` is called and be set to `false` if `selectedRowIds` array length equals 0 or to `true` when the length equals `pageSize`. If not defined the value will be stored in GridView's local state.|
|`sort`|object|undefined|Key-value object that match `onSortChange`'s `sort` argument value. Use to keep state out of GridView module. The value must be manually updated every time `onSortChange` is called and be set to its `sort` argument value. If not defined the value will be stored in GridView's local state.|
|`filterData`|bobject|undefined|Key-value object that match `onFilterChange`'s `filters` argument value. Use to keep state out of GridView module. The value must be manually updated every time `onFilterChange` is called and be set to its `filters` argument value. If not defined the value will be stored in GridView's local state.|
