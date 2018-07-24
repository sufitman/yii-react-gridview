# Yii2 GridView widget for react

## Installing
```bash
npm install --save yii-react-gridview
```
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
    public function actionGetData($currentPage = 0, $pageSize = 20) {
        \Yii::$app->response->format = Response::FORMAT_JSON;
        return [
            'data' => ArrayHelper::toArray(User::find()
                ->offset($currentPage * $pageSize)
                ->limit($pageSize)
                ->all(), [
                User::class => [
                    'username',
                    'email',
                    'city',
                ]
            ]),
            'headerCells' => (new User)->attributeLabels(),
            'currentPage' => $currentPage,
            'totalCount' => User::find()->count(),
            'pageSize' => $pageSize,
        ];
    }        
}

``` 
## Available `props`
|Property|Type|Default value|Description|
|:---:|:---:|:---:|:---|
|`data`|Array|undefined|Array of models to show in list|
|`headerCells`|Object|{}|Key-value pairs of names of data models properties. It should contain the same properties as an Object in `data`|
|`caption`|String|undefined|A string for caption if necessary|
|`captionOptions`|Object|{}|HTML attributes of `caption`|
|`tableOptions`|Object|{}|HTML attributes of table|
|`showHeader`|Boolean|true|Whether show \<thead\> or not|
|`showFooter`|Boolean|false|Whether show \<tfoot\> or not|
|`headerRowOptions`|Object|{}|HTML attributes of *thead > row*|
|`footerRowOptions`|Object|{}|HTML attributes of *tfoot > row*|
|`rowOptions`|Object|{}|HTML attributes of *tbody \> row*|
|`columns`|Object|undefined|Keys of the object are whether properties of a model in data (then the title will be provided by `headerCells`) or custom strings that will be a column titles. Values of the object are either null (to provide a model value as is) or `function (cell)` (to decorate a model value with its result). Also string `'serial'` can be set to provide models numeration|
|`filters`|Object|null|Contain *filters* for specified columns. *Filters* can be: a) string `'text'` renders simple input; b) Object `{ type: ..., options: {...}` where type can be either `'text'` (input of `type="text"`), `'checkbox'` or `'select'`. Options typically are HTML attributes of the inputs. If type is `'select'` then `options` should contain `data` - object of options (where key is value attribute of an \<option\> and value is its text).}|
|`filters`|Object|null|Contain *filters* for specified columns. *Filters* can be: a) string `'text'` renders simple input of `type="text"`; b) Object `{ type: ..., options: {...} }` where type can be either `'text'` (input of `type="text"`), `'checkbox'` or `'select'`. Options typically are HTML attributes of the inputs. If type is `'select'` then `options` should contain `data` - object of options (where key is value attribute of an \<option\> and value is its text); c) `function (name)` to render custom input with name="`name`"|
|`onFilterChange`|`function(filters)`|undefined|Callback to filter the data with `filters` - key-value object to filter the `data`. **Required** when filters are specified. The way of filtering depends on you|
|`filterDelay`|int(seconds)|3|Delay in seconds before execute `onFilterChange` after a filter was changed. It prevents unnecessary execution of the callback after each key pressed|
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
