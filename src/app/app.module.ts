// 这个文件是Angular的根模块，告诉Angular如何组装应用

// BrowserModule，浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// Angular核心模块
import { NgModule } from '@angular/core';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { SearchComponent } from './components/search/search.component';

// @NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  // 配置当前项目运行的组件
  declarations: [
    AppComponent,
    NewsComponent,
    SearchComponent
  ],
  // 配置当前模块运行依赖的其他模块
  imports: [
    BrowserModule
  ],
  // 配置项目所需要的服务
  providers: [],
  // 指定应用的主视图（称为根组件）通过引导根AppModule来启动应用，这里一般的是根组件
  bootstrap: [AppComponent]
})
// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
